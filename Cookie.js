var box1 = new Vue({
    el:'#box',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'Pistacho Happy Heart',
            imgUrl:'cookie1.jpg',
            price:'230',
            count:'4'
          },
          {
            id:'2',
            itemName:'Peppermint Almond',
            imgUrl:'cookie2.jpg',
            price:'260',
            count:'3'
          },
          {
            id:'3',
            itemName:'Matchu Matchu',
            imgUrl:'cookie3.jpg',
            price:'200',
            count:'2'
          },
          {
            id:'4',
            itemName:'Belgium Walnut Chocolate',
            imgUrl:'cookie4.jpg',
            price:'300',
            count:'1'
          },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>=1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
        getSum(){
            var sum = 0;
            for(var i in this.itemList){
                sum+= this.itemList[i].count*this.itemList[i].price;
            }
            return sum
        }
    },
    computed:{

    }
})