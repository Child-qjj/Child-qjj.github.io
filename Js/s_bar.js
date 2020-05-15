var vue = new Vue({
    el:'#app',
    data:{
        value:'',
        styleSheet:{
        borderBottom: '',
        borderBottomLeftRadius: '',
        borderColor: '',
        },
        show:false,
        items:[
            {id:0,value:'first'},
            {id:1,value:'second'},
            {id:2,value:'third'},
            {id:3,value:'fourth'}
        ],
    },
    methods:{
        add:function(){
            newSearch={id:this.items.length,value:this.value}
            if(this.value != ''){
            this.items.unshift(newSearch);
            this.items.forEach(
               item=>{
                item.id++;
               }
            )
            this.value =''
            }
        },
        del(id){
         var index=this.items.findIndex(item=>item.id == id);
         console.log(index);
         this.items.splice(index,1)
        },
        search(keyword){
            var newList = []
            this.items.forEach(item => {
                if(item.value.indexOf(keyword) != -1) {
                newList.push(item)
                }
            })
            return newList
            },
        },
        watch:{ //事件监听,设置data中某个值改变就触发函数;
          show: function(show){
            if(show){
                this.styleSheet.borderColor='#4E6EF2';
                this.styleSheet.borderBottom='none';
                this.styleSheet. borderBottomLeftRadius='0';
            }
            else {
                this.styleSheet.borderColor='';
                this.styleSheet.borderBottom='';
                this.styleSheet. borderBottomLeftRadius='';
            }
        }
        }
})