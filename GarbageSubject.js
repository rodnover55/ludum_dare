/**
 * Created by rodnover on 15.12.13.
 */
define(['BaseSubject'], function(BaseSubject){
    return {
        success: function(caller){
            console.log('success');
        },
        fail: function(caller){
            console.log('fail');
        }
    };
});