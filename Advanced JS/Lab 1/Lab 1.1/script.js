var linkedListError = {
    valueExistError: new Error('This value already exists.'),
    emptyListError: new Error('The list is already empty.'),
    nonExistentValueError: new Error('This value doesn\'t exists.'),
    nonExistentPlaceError: new Error('This the specified place doesn\'t exist.'),
    invalidValueError: {
        pushValue: new Error('[Invalid Value] You can\'t push a value that is less than the latest value.'),
        enqueueValue: new Error('[Invalid Value] You can\'t enqueue a value that is higher than the next value.'),
        insertValue:new Error('[Invalid Value] The value can\'t be higher than its next or less than its previous.')
    }
}

var linkedList = {
    data:[],
    push: function (item){
        var itemObj = {
            value:item
        }
        if(!this.isEmpty()){
            if(!this.hasItem(item)){
                if(this.data[this.data.length-1].value < item){
                    this.data.push(itemObj)
                }else{
                    throw linkedListError.invalidValueError.pushValue
                }
            }else{
                throw linkedListError.valueExistError
            }
        }else{
            this.data[0] = itemObj
        }
    },
    pop:function(){
        if(!this.isEmpty()){
            this.data.pop()
        }else{
            throw linkedListError.emptyListError
        }
    },
    enqueue:function(item){
        var itemObj = {
            value:item
        }
        if(!this.isEmpty()){
            if(!this.hasItem(item)){
                if(this.data[0].value > item){
                    this.data.unshift(itemObj)
                }else{
                    throw linkedListError.invalidValueError.enqueueValue
                }
            }else{
                throw linkedListError.valueExistError
            }
        }else{
            this.data[0] = itemObj
        }
    },
    dequeue:function(){
        if(!this.isEmpty()){
            this.data.shift()    
        }else{
            throw linkedListError.emptyListError
        }
    },
    insert:function(item,nextItem){
        var itemObj = {
            value:item
        }
        if(!this.hasItem(item)){
            var nextItemIndex = this.data.map(a=>a.value).indexOf(nextItem)
            if(nextItemIndex >= 0){
                var prevItemIndex = nextItemIndex > 0? nextItemIndex-1 : 0
                var prevItem = this.data[prevItemIndex].value
                if(prevItemIndex !==0 ){
                    if(item < nextItem && item > prevItem){
                        var secondHalf = this.data.slice(nextItemIndex)
                        this.data.splice(nextItemIndex)
                        this.data.push(itemObj,...secondHalf)
                    }else{
                        throw linkedListError.invalidValueError.insertValue
                    }
                }else{
                    this.data.unshift(itemObj)
                }
            }else{
                throw linkedListError.nonExistentPlaceError
            }
        }else{
            throw linkedListError.valueExistError
        }
    },
    remove:function(item){
        if(this.hasItem(item)){
            var filteredData = this.data.filter(a=>a.value !== item)
            this.data = filteredData
        }else{
            throw linkedListError.nonExistentValueError
        }
    },
    hasItem:function(item){
        return this.data.map(a=>a.value).includes(item)
    },
    isEmpty:function(){
        return this.data.length === 0
    }
}