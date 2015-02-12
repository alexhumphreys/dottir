#!/bin/sh
HOST='ftp.dottirberlin.com'
USER=''
PASSWD=''
FILE='dottir_build'

rm -r $FILE
mkdir $FILE
cp index.html $FILE
cp -r css $FILE
cp -r js $FILE
cp -r images $FILE

ncftpput -R -v -u $USER -p $PASSWD $HOST / $FILE
