const { ArgumentParser } = require('argparse');
const { exit } = require('process');
const version = "1.0";
const fs = require('fs')
let private_key_from_file;
let release_notes;

const parser = new ArgumentParser({
    description: 'Script to upload AAB to Play Store'
  });
parser.add_argument('-v', '--version', { action: 'version', version });     //version of script
parser.add_argument('-c', '--Client_Email', { help: 'Client email of google play account to comunicate with API' });
if(parser.parse_args().Client_Email == null){
    console.log("Missing parameters");
    exit(1);
}

private_key_from_file = fs.readFileSync('key.txt', 'utf8');
release_notes = fs.readFileSync('../release_notes.txt','utf8');

const { Apkup } = require('apkup');
const apkup = new Apkup({
    client_email: parser.parse_args().Client_Email,
    private_key: private_key_from_file
  });
  
  apkup.upload('app/build/outputs/bundle/release/app-release.aab', {
      releaseNotes: [
        {
          language: 'en-US',
          text: release_notes
        }
      ]
    })
    .then(data => {
      console.log(` ${data.packageName} version ${data.versionCode} is up!`);
    });  


