$var = new Vue(
    {
        el: "#wrapper",
        data: {
          first:'cyrus',  
            last: 'muchiri',
            age: 20,
            link: "https://google.com",
            attributeName: "href",
            isActive:"true"
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
