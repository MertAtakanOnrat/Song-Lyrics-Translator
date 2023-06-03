mvn archetype:generate -DgroupId=com.example.app -DartifactId=translate-java -DarchetypeVersion=1.4 -DinteractiveMode=false
cloudshell workspace translate-java
gcloud iam service-accounts create translate-quickstart --project hazel-env-380416
gcloud projects add-iam-policy-binding hazel-env-380416 --member serviceAccount:translate-quickstart@hazel-env-380416.iam.gserviceaccount.com --role roles/cloudtranslate.user
gcloud iam service-accounts keys create translate-key.json --iam-account translate-quickstart@hazel-env-380416.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS=translate-key.json
gcloud iam service-accounts create translate-quickstart --project hazel-env-380416
gcloud projects add-iam-policy-binding hazel-env-380416 --member serviceAccount:translate-quickstart@hazel-env-380416.iam.gserviceaccount.com --role roles/cloudtranslate.user
gcloud iam service-accounts keys create translate-key.json --iam-account translate-quickstart@hazel-env-380416.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS=translate-key.json
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:42605' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:45885' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:42103' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:42203' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:44527' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:43169' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:44405' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
gcloud iam service-accounts create translate-quickstart --project hazel-env-380416
rm translate-key.json
gcloud iam service-accounts create translate-quickstart --project hazel-env-380416
gcloud projects add-iam-policy-binding hazel-env-380416 --member serviceAccount:translate-quickstart@hazel-env-380416.iam.gserviceaccount.com --role roles/cloudtranslate.user
gcloud iam service-accounts keys create translate-key.json --iam-account translate-quickstart@hazel-env-380416.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS=translate-key.json
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:33729' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:37209' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:42103' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:45841' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:34667' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
rm translate-key.json
mvn archetype:generate -DgroupId=com.example.app -DartifactId=translate-java -DarchetypeVersion=1.4 -DinteractiveMode=false
cloudshell workspace translate-java
gcloud iam service-accounts create translate-quickstart --project hazel-env-380416
gcloud iam service-accounts keys create translate-key.json --iam-account translate-quickstart@hazel-env-380416.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS=translate-key.json
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:40309' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:43441' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
rm translate-key.json
cd '/home/alper_mumcular/translate-java' && '/usr/lib/jvm/java-17-openjdk-amd64/bin/java' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:40595' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '@/tmp/cp_ecu3ijavs1v63ulwmewurlnwe.argfile' 'com.example.app.App'
cd Playground/
npm install
gcloud app deploy
npm install dotenv @google-cloud/translate --save
gcloud app deploy
npm -v @google-cloud/translate
node app.js
cd ..
cd PlayGround/
npm install
gcloud app deploy
node app.js
npm install dotenv @google-cloud/translate --save
node app.js
gcloud app deploy
node app.js
gcloud app deploy
npm -v @google-cloud/translate
npm install dotenv @google-cloud/translate --save
gcloud app deploy
edit .env
node app.js
gcloud app deploy
node app.js
ls
git init
git add .
git commit -m
git commit -m deneme
git config --global user.email "alper.mumcular@ug.bilkent.edu.tr"
git commit -m deneme
git config --global user.name "Alper Mumcular"
git commit -m deneme
git remote add origin https://github.com/AlperMumcular/Cloud.git
git push
git push --set-upstream origin master
git push -u origin main
git remote add origin git@github.com:AlperMumcular/Cloud.git
git push -u origin main
git checkout -b master
git add .
git status
git push origin master
git push
git push --set-upstream origin master
ls
cd PlayGround/
gcloud app deploy
npm update
gcloud app deploy
cd ..
cd translate-java/
gcloud app deploy
cd ..
cd PlayGround/
dev_appserver.py app.yaml
gcloud app deploy app.standard.yaml
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
cd ..
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
cd appengine/sample-folder/
cd appengine/hello-world/
cd nodejs-docs-samples/
cd appengine/hello-world/
cd standard/
gcloud app deploy
cd ..
cd PlayGround/
gcloud app deploy
gcloud app browse
gcloud app deploy
cd ..
cd nodejs-docs-samples/
cd appengine/hello-world/
gcloud app deploy
cd standard/
gcloud app deploy
cd ..
ls
gcloud app deploy
node app.js
gcloud app deploy
node app.js
cd ..
cd nodejs-docs-samples/
cd appengine/hello-world/
cd standard/
node app.js
ls
node app.js
cd .. ..
cd ..
cd ...
cd ..
cd PlayGround/
ls
gcloud app deploy
node app.js
gcloud app deploy
git add .
git push
git commit
git add .
git commit -m "update"
git push origin master
gsutil ls hazel-env-380416/**.csv
gsutil ls gs://hazel-env-380416/**.csv
gsutil ls gs://hazel-env-380416/
gsutil ls gs://cloudprojectlyrics/
gcloud sql connect clouddb --user=root
create table songs (title VARCHAR(255), tag VARCHAR(50), artist VARCHAR(50), year INT, views INT, features VARCHAR(255), lyrics VARCHAR(50000), id INT, language_cld3 VARCHAR(10), language_ft VARCHAR(10) );
create table songs (title VARCHAR(255), tag VARCHAR(50), artist VARCHAR(50), year INT, views INT, features VARCHAR(255), lyrics VARCHAR(50000), id INT, language_cld3 VARCHAR(10), language_ft VARCHAR(10), PRIMARY KEY(id) );
create table songs (title VARCHAR(255), tag VARCHAR(50), artist VARCHAR(50), year INT, views INT, features VARCHAR(255), lyrics VARCHAR(50000), id INT, language_cld3 VARCHAR(10), language_ft VARCHAR(10), PRIMARY KEY(id));
create table songs (title VARCHAR(255), tag VARCHAR(50), artist VARCHAR(50), year INT, views INT, features VARCHAR(255), lyrics VARCHAR(50000), id INT, language_cld3 VARCHAR(10), language_ft VARCHAR(10), PRIMARY KEY(id))
create table songs (title VARCHAR(255), tag VARCHAR(50), artist VARCHAR(50), year INT, views INT, features VARCHAR(255), lyrics VARCHAR(50000), id INT, language_cld3 VARCHAR(10) );
create table songs (title VARCHAR(255), tag VARCHAR(50), artist VARCHAR(50), year INT );
create table songs ( year INT );
create table songs ( year INT )
;
ff
f
create table songs ( year INT )
create table songs;
CREATE TABLE songs;
gcloud sql connect clouddb --user=root
create table songs (title VARCHAR(255), tag VARCHAR(50), artist VARCHAR(50), year INT, views INT, features VARCHAR(255), lyrics VARCHAR(50000), id INT, language_cld3 VARCHAR(10), language_ft VARCHAR(10), PRIMARY KEY(id) );
gcloud sql connect clouddb --user=root
