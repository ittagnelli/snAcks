let gradle;
let version_snacks;
let version_snacks_raw;

    const fs = require('fs');
    try {
        
        gradle = fs.readFileSync('app/build.gradle', 'utf-8');
        version_snacks_raw = fs.readFileSync('../src/components/app.svelte', 'utf-8');
        version_snacks_raw.split(/\r?\n/).forEach((line) => {
            if(line.split("$title_bar = ")[1] != null)
                version_snacks = line.split("$title_bar = ")[1].replace("snAcks","").replace("v","").replace(" ","").replace(";","");
        })
        gradle.split(/\r?\n/).forEach((line) => {
            if(line.split("versionCode")[1] != null){
                let searchString = 'versionCode' + line.split("versionCode")[1];
                let re = new RegExp('^.*' + searchString + '.*$', 'gm');
                let versioncode = parseInt(line.split("versionCode")[1]) + 1;
                gradle = gradle.replace(re, '        versionCode ' + versioncode);
            }
            if(line.split("versionName")[1] != null){
                let searchString = 'versionName' + line.split("versionName")[1];
                let re = new RegExp('^.*' + searchString + '.*$', 'gm');
                gradle = gradle.replace(re, '        versionName ' + version_snacks);
            } 
            fs.writeFileSync('app/build.gradle', gradle);
        })
        
      } catch (err) {
        console.error(err);
      };    

