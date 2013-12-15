/**
 * Created by rodnover on 15.12.13.
 */
define(['BaseSubject'], function(BaseSubject){
    return {
        success: function(self, caller){
            console.log(self, caller, 'success');
            self.convertTo(self.oncomplete);

        },
        fail: function(self, caller){
            console.log(self, caller, 'fail');
        }
    };
});