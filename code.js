function CheckChanges() {
  // Fetch the value
  var ValueToBeChecked = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("E1");
  var ChangeThreshold = ValueToBeChecked.getValue();
  // Check totals sales

  //var NameofPersonDroppingShift = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("A1");
  //var NameofDropper = NameofPersonDroppingShift.getValue();

  var TypeofShift = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("A1");
  var TheShiftType = TypeofShift.getValue();

  if (ChangeThreshold > 0){
    // Fetch the email address
    var SendToThisEmail = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("F1");
    var emailAddress = SendToThisEmail.getValue();

    // Send Alert Email.
    //var message = 'Name of person is :' + NameofDropper; // Second column
    var message = 'Someone just dropped a "'+ TheShiftType + '" shift';

    var subject = 'SOMEONE DROPPED A SHIFT';

    MailApp.sendEmail(emailAddress, subject, message, {
    htmlBody: message,
    cc: 'kev276@nyu.edu'

    });
  }
