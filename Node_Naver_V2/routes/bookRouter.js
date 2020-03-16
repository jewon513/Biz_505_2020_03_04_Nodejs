var express = require('express')
var router = express.Router();
var request = require('request')

var book = require('../models/book');
var naver = require('../config/naver_secret')

var reqOptions = (api_url) => {

    var options = {

        url : api_url,
        headers : {

            'X-Naver-Client-Id' : naver.client_id,
            'X-Naver-Client-Secret' : naver.client_secret

        }

    }

    return options

}


module.exports = (app) => {

    router.get("/",(req,res) => {

        res.json(naver)

    })

    router.get('/naver', (req,res)=>{

        let search = req.query.search
        let api_url = naver.book_url
        api_url += '?query=' +encodeURI(search)

        request.get(reqOptions(api_url), (err,response,body)=>{

            if(err){

                console.log(err)
                res.send(response.statusMessage)

            }else if(response.statusCode == 200){

                var responseJson = JSON.parse(body).items
        
                responseJson.forEach(element => {
                    element.search = search
                });

                // res.json(responseJson)

                book.find({search : search}, (err,data)=>{

                    var dataLength = Object.keys(data).length

                    if(dataLength > 0){
                        res.json(data)
                    }else{

                        book.collection.insertMany(responseJson, (err,result) => {  

                            console.log(err)
                            console.log(result)
        
                            if(err){
                                res.send("DATA BULK INSERT ERROR")
                            }else{
                                res.json(responseJson)
                            }
        
                        })
                        
                    }

                })

               

            }else {

                res.send("check plz")

            }

        })

    })

    return router

}