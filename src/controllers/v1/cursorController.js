const limit = parseInt(req.query.limit)
// const nextCursor = req.query.nextCursor;
const cursor = req.query.cursor
// let decryptedCursor
// let tradesCollection

// if (cursor) {
//     decryptedCursor = decrypt(cursor)
//     let decrypedDate = new Date(decryptedCursor * 1000)
//     tradesCollection = await Trades.find({
//         time: {
//             $lt: new Date(decrypedDate),
//         },
//     })
//         .sort({ time: -1 })
//         .limit(limit + 1)
//         .exec()
// } else {
//     tradesCollection = await Trades.find({})
//         .sort({ time: -1 })
//         .limit(limit + 1)
// }

if (cursor) {
    tradesCollection = await Trades.find({})
        .sort({time: -1})
        .limit(limit + 1)
}

const hasMore = tradesCollection.length === limit + 1
let nextCursor = null
if (hasMore) {
    const nextCursorRecord = tradesCollection[limit]
    var unixTimestamp = Math.floor(nextCursorRecord.time.getTime() / 1000)
    nextCursor = encrypt(unixTimestamp.toString())
    tradesCollection.pop()
}


res.status(200).send({
    data: tradesCollection,
    paging: {
        hasMore,
        nextCursor,
    },
})