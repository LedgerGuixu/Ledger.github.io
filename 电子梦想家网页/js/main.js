var app = new Vue({
    el: '#base',
    data: {
        name: [],
    },
    methods: {
        upgrade: function () {
            var that = this;
            // alert('nihao');

            axios.get("http://localhost:8000/upgrade")
                .then(function (res) {
                    // alert('你好吗');
                    that.name = res.data;
                    console.log(res);
                    console.log(that.name);
                }), function () { alert('请求失败') }
        }

    },
    activated() {
        this.type = this.$route.query.type;
    },
})