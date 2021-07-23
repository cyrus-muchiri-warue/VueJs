$var = new Vue(
    {
        el: "#wrapper",
        data: {
          first:'cyrus',  
            last: 'muchiri',
            age:20
        },
        methods: {
            addAge: function (params) {
                return this.age +params
               
            },
            subtractAge:function(params) {
               return this.age + params;
            }
        },
        computed: {
            
        }
    }
);
