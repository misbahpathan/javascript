const fs= require ('fs');

function dirRead (path){
    fs.readdir(path, function (err, files){
        if(err){
            console.log(err);
            return ;
        }
        console.log(files)
    });
      
}

dirRead('/Users/sirajpathan/misbah/preview');
dirRead('/Users/sirajpathan/misbah/preview1');
