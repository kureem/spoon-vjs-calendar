## Custom View / Edit form 

This component displays a form which can be used to view and/or edit a record in salesforce.<br>
The component allows you to specify the fields to include in the form.


Provided by <a href="http://www.spoonconsulting.com/" target="_blank">Spoon Consulting</a>

<a href="https://githubsfdeploy.herokuapp.com/?owner=kureem&repo=spoon-customdetails" target="_blank"> <img src="https://andrewfawcett.files.wordpress.com/2014/09/deploy.png"></a>
<br>

### Usage

#### Used manually in another lightning component or lightning application
```xml
<c:LC00_CustomDetails objectApiName="Account" cols="2" defaultFields="Name,AccountNumber" recordId="0011r00001mRsvmAAC"/>
```
*If the component is used manually in another lightning component or lightning app, you need to configure the following attributes*
1. objectApiName<br>
This is the object type

2. cols : default=2<br>
This is the number of columns to display in the form

3. defaultFields<br>
Comma seperated list of fields to include in the form

4. recordId<br>
The Id of the record to view/edit

*Note: If the component is used in a record page, there is no need to configure the recordId. The component will automatically pick up the current recordId*

#### Using the App Builder
*The component need to be used in a record page*
*Once you have dropped the component in a record page, you need to configure the following 3 parameters*

*Configure the 3 parameters*

1. Fields<br>
A comma seperated list of fields to include in the form

2. Object API Name<br>
The API name of the Object (e.g Account, Contact). It can be any object

3. Columns (optional) : default = 2<br>
This is the number of columns in the form to render

<br><br>
<a href="https://githubsfdeploy.herokuapp.com/?owner=kureem&repo=spoon-customdetails" target="_blank"> <img src="https://andrewfawcett.files.wordpress.com/2014/09/deploy.png"></a>

