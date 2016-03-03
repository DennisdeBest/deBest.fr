<div class="pageContent">
<form id="emailForm" ng-submit="submitForm()" novalidate>
    <table>
        <tr>
            <td>
                <label for="name">Name</label>
            </td>
            <td>
                <input type="text" name="name" id="name" ng-model="formData.name" ng-class="{'error' : errorName}">
            </td>
        </tr>
        <tr>
            <td>
    <label for="email">E-mail</label>
            </td>
            <td>
                <input type="email" name="email" id = "email" ng-model="formData.email" ng-class="{'error' : errorEmail}">
            </td>
        </tr>
        <tr>
            <td>
                <label for="message">Message</label>
            </td>
            <td>
                <textarea name="message" id="message" ng-class="{'error' : errorTextarea}" ng-model="formData.message" cols="30" rows="10"></textarea>
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center"> <input type="submit" value="Send!" name="submit" id="submit"></td>
        </tr>




    </table>
    <div ng-class="{'submissionMessage' : submission}" ng-bind="submissionMessage"></div>
</form>

</div>

