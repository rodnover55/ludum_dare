define(function() {
    return {
        callbacks: {
            success: function(self, caller) {
                console.log(self, caller, 'success');
            },
            fail: function(self, caller) {
                console.log(self, caller, 'faile');
            }
        }
    }
})
