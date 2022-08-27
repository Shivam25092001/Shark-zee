class APIfeatures{
    constructor(query,queryStr){
        this.query = query
        this.queryStr = queryStr
    }
    search(){
        const keyword = this.queryStr.keyword?{
            name:{
                $regex: this.queryStr.keyword,
                $options : "i"
            }
        }:{

        }
        this.query = this.query.find({...keyword});
        return this
    }
    pagination(resultsPerPage){
        const currPage = this.queryStr.page||1
        const skip = resultsPerPage*(currPage-1);
        this.query = this.query.find().limit(resultsPerPage).skip(skip)
        return this
    }
}
module.exports = APIfeatures