# Credentials

## MongoDB
#### To connect application:

(Just copy the string including '' in the app source code)

**URL/URI:** 'mongodb+srv://<group3>:<group3cop4331>@cluster0-2n09e.mongodb.net/test?retryWrites=true&w=majority'
   
## AWS - EC2 instance (Virtual Machine or Hosting):
Remember to copy the _sampleMeanSmallProject.pem_ into your computer. 
Use the full path to point there or navigate to the location of the pem and then use it to connecting throug SSH.

**Public DNS (IPv4):** ec2-18-221-247-1.us-east-2.compute.amazonaws.com

**Pv4 Public IP:** 18.221.247.1

### To connect from UNIX based terminal (Mac OS, Ubuntu, etc.)
```
$ sudo chmod 400 "sampleMeanContactList.pem" 
```
```
$ ssh -i "sampleMeanContactList.pem" ubuntu@ec2-18-221-247-1.us-east-2.compute.amazonaws.com
```
### To connect from Windows
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html

### See the website running from browser

(Do not forget to run Node)

**URL:** http://ec2-18-221-247-1.us-east-2.compute.amazonaws.com:3000/
