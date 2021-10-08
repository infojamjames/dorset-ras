/* 

NOTES

== 0 IS THE SAME AS == "" -> Replaced all == "" with ===""


Some notes here some more notes


xyz 

*/




//Functions
function ISNONTEXT() {
    //TODO
    return false;
  }
  
  function ISNUMBER(num) {
    if (typeof num == "number") {
      return true;
    } else {
      return false;
    }
  }
  
  function NOT_ISNUMBER() {
    return false;
  }
/* #region [VLOOKUP SETTINGS] */
var FALSE = "";
var RLA = "";
var DST_Levels = 'DST_Levels'
var Age_Bands = "Age_Bands";
var ALS = "ALS";
var Toilet_Prep_Freq = "Toilet_Prep_Freq";

var Social_Degree = "Social_Degree";
var Social_Howoften = "Social_Howoften";
var Safety_Waking = "Safety_Waking";
var Night_freq = "Night_freq";
var Main_condition = "Main_condition";

var Informal_support = "Informal_support";
var Primary_support_reasons = "Primary_support_reasons";
var Num_Sharing = "Num_Sharing";
var Ongoing_Childcare = "Ongoing_Childcare";
var Ongoing_Company = "Ongoing_Company";
var Informal0to7 = "Informal0to7";
var TimeAlone = "TimeAlone";
var How_Often_Childcare = "How_Often_Childcare";

//NEW
var Informal_safety = "Informal_safety";
var NightAlone = "NightAlone";

//New 20/06/2019
var Informal_Support_DomTasks = "Informal_Support_DomTasks";
var Informal_Support_Social = "Informal_Support_Social";
var Informal_Support_Emotional = "Informal_Support_Emotional";
var Work_Degree = "Work_Degree";
var Meds_Freq = "Meds_Freq";
var Wash_Freq = "Wash_Freq";
//Raw Data
var rN = "35-44";
var rO = 4;
var rP = 'Yes';
var rQ = 1;
var rR = 'Yes';
var rS = "Yes"
var rT = 'No';
var rU = 'Transport';
var rV = 'Less1act';
var rDF = 'Yes';
var rDE = "No";
var rW = 'Voluntary';
var rX = 'None';
var rY = 'No';
var rZ = '2to1';
var rDG = 'Yes';
var rAA = '1act';
var rAB = 'No';
var rDH = 'Yes';
var rAC = 'LittleSupportMost';
var rAD = 'Supp24h';
var rAE = 'No';
var rAF = 2;;
var rDI = 'Yes';
var rAG = 'Yes';
var rAH = 'No';
var rAI = 'No';
var rDJ = 'Yes';
var rAJ = 5;;
var rDJ = 'Yes';
var rAK = 2;
var rAL = 'Less than daily';
var rAM = 2;
var rAN = 'Yes';
var rAO = 'n/a';
var rAP = 'Yes';
var rAQ = '0.00';
var rAR = 'No';
var rAS = 5;
var rDK = 'Yes';
var rAT = 5;
var rAU = 'No';
var rAV = 5;
var rDL = 'Yes';
var rAW = 5;
var rAX = 'Four times a day';
var rAY = 'No';
var rDM = 'Yes';
var rAZ = 5;
var rBA = 'Every 2-3 hours+';
var rBB = 'Monitor';
var rBC = 'No';
var rBD = 5;
var rBE = 'No';
var rBF = 2;
var rBG = 5;
var rBH = 'No';
var rBI = 'Cardiac' ;
var rBJ = 'CerebPal';
var rBK = 'COPD';
var rBL = 'Demen';
var rBM = 'Monthly';
var rBN = 'remind';
var rBO = 'Less than daily';
var rBP = 0;
var rBQ = 'n/a';
var rBR = 'RiskLessDaily';
var rBS = 1;
var rBT = 'Yes'
var rBU = 2;
var rBV = 'Inhaler';
var rBW = 'No';
var rBX = 1;
var rBY = 1;
var rBZ = 1;
var rCA = 1;
var rCB = 1;
var rCC = 'No';
var rCD = 1;
var rCE = 'OccasChecks';
var rCF = '1visit';
var rCG = 'n/a';
var rCH = 'FullEff';
var rCI = 'Yes';
var rCJ = 'No';
var rCK = 'Yes';
var rCL = 'Yes';
var rCM = 'Yes';
var rCN = 'Yes';
var rCO = 'Yes';
var rCP = 6;
var rCI = 'Yes';
var rCQ = 6;
var rCR = 6;
var rCS = 7;
var rCT = 'Yes';
var rCU = 'No';
var rCV = '';
var rCW = 'Yes';
var rCX = 0;
var rCY = '1act';
var rCZ = 'Weekly';
var rDA = '2to3times';
var rDB = 'NoConstant';
var rDC = 1;
var rDD = 'Yes';
var rDE = 'No';
var rDF = 'Yes';
var rDG = 'Yes';
var rDH = 'Yes';
var rDI = 'Yes';
var rDJ = 'Yes';
var rDL = 'Yes';
var rDM = 'Yes';
var rDN = 'Yes';
var rDO = 'Yes';
var rDP = 'Yes';
var rDQ = 'Visual';
var rDR = 'Supp24h';
var rDS = '3sharing';
var rDT = 'n/a';
var rDU = '';
var rDV = '';
var rDW = '';
var rDX = '';
var rDY = '';
var rDZ = '';
var rEA = '';
var rEB = '';
var rEC = '';
var rED = '';
var rEE = '';
var rEF = '';
var rEG = '';
var rEH = '';
var rEI = '';
var rEJ = '';
var rEW = '';
var rEX = '';
var rEK = '';
var rEY = '';
var rEL = '';
var rEZ = '';
var rEM = '';
var rFA = '';
var rEN = '';
var rFB = '';
var rEO = '';
var rFC = '';
var rEP = '';
var rFD = '';
var rEQ = '';
var rER = '';
var rES = '';
var rET = '';
var rEU = '';
var rEV = '';
//Clean Data = cl
var clAL = 0.10;
var clGC = 0.00;
var clGK = 0.00;
var clGI = 0.00;
var scAE = 3;
var scAF = 3;
var ModelType = 1; 
var OUT_DSTNeedsProfile = 0;
var Appointments = 0;
var ModelType = 1;



var clG = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!N58),NOT(ISNUMBER('Raw data'!N58))),'Raw data'!N58=""),-17,0)
if((ISNONTEXT(rN)&& NOT_ISNUMBER(rN))||rN ==="")
{
    clG = -17
}
else
{
    clG = 0;
}

var clH = "";
//=IF('Raw data'!O58=1, 1, 
//IF('Raw data'!O58=2, 2, 
//IF('Raw data'!O58=3, 3, 
//IF('Raw data'!O58=4, 4, 0))))
if(rO == 1)
{
    clH = 1;
}
else if(rO ==2)
{
    clH = 2;
}
else if(rO ==3)
{
    clH = 3;
}
else if(rO ==4)
{
    clH = 4;
}
else
{
    clH = 0;
}

var clI = "";
//=IF('Raw data'!P58="Yes", 1, 
//IF('Raw data'!P58="No", 0, ""))
if(rP == 'Yes')
{
  clI = 1;
}
else if(rP == 'No')
{
  clI = 0;
}
else {
  clI = "";
}

var clJ = "";
//=IF('Raw data'!Q58=1, 1,
 //IF('Raw data'!Q58=2, 2,
 //IF('Raw data'!Q58=3, 3, 
 //IF('Raw data'!Q58=4, 4, 0))))
if (rQ == 1)
{
  clJ = 1;
}
else if(rQ == 2)
{
  clJ = 2;
}
else if(rQ == 3)
{
  clJ = 3;
} 
else if(rQ == 4)
{
  clJ = 4;
}
else 0;

var clK = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!Q58),NOT(ISNUMBER('Raw data'!Q58))),'Raw data'!Q58=""),-17,0)
if((ISNONTEXT(rQ)&& NOT_ISNUMBER(rQ))||rQ ==="")

{
  clK = -17
}
else
{
  clK = 0;
}
var clL = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!R58),NOT(ISNUMBER('Raw data'!R58))),'Raw data'!R58=""),"",
//IF('Raw data'!R58="No",1,
//IF('Raw data'!R58="Yes",0,"")))

if((ISNONTEXT(rR)&& NOT_ISNUMBER(rR))||rR ==="")
{
  clL = ""
}

else if(rR == 'No')
{
  clL = 1;
}
else if (rR == 'Yes'){
  clL = 0;
}
else {
  clL = ""
}

clM = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,Appointments=1),1,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,Appointments=0),0,
//IF(AND(ModelType<=2,'Raw data'!DE58="No"),0,
//IF(OR(AND(ISNONTEXT('Raw data'!S58),NOT(ISNUMBER('Raw data'!S58))),'Raw data'!S58=""),0,
//IF('Raw data'!S58="No",1,
//IF('Raw data'!S58="Yes",0,""))))))

if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && Appointments == 1)
{
  clM = 1;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && Appointments == 0)
{
  clM = 0;
}
else if(ModelType<=2 && rDE == "No")
{
  clM = 0;
}
else if((ISNONTEXT(rS)&& NOT_ISNUMBER(rS))||rS ==="")
{
  clM = 0;
}
else if(rS == "No")
{
  clM = 1;
}
else if (rS == "Yes")
{
  clM = 0;
}
else{clM = ""}

var clN = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!T58),NOT(ISNUMBER('Raw data'!T58))),'Raw data'!T58=""),"",
//IF('Raw data'!T58="No",1,
//IF('Raw data'!T58="Yes",0,"")))

if((ISNONTEXT(rT)&& NOT_ISNUMBER(rT))||rT ==="")
{
  clN = ""
}
else if(rT = "No")
{
  clN = 1;
}
else if(rT = "Yes")
{
  clN = 0;
}
else{clN = ""}

var clO = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!U58),NOT(ISNUMBER('Raw data'!U58))),'Raw data'!U58=""),0,VLOOKUP('Raw data'!U58,Social_Degree,2,FALSE))



if((ISNONTEXT(rU)&& NOT_ISNUMBER(rU))||rU ==="")
{
  clO = 0;
}
else{clO = VLOOKUP(rU,Social_Degree,2, FALSE) }
 
//=IF(OR(AND(ISNONTEXT('Raw data'!U58),NOT(ISNUMBER('Raw data'!U58))),'Raw data'!U58=""),-17,VLOOKUP('Raw data'!U58,Social_Degree,3, FALSE))
if((ISNONTEXT(rU)&& NOT_ISNUMBER(rU))||rU ==="")
{
  clP = 0;
}
else
{
  clP = VLOOKUP(rU,Social_Degree,3, FALSE)
}

var clQ = "";
//=IF(AND(ModelType<=2,'Raw data'!DF58="No",'Raw data'!DE58="No"),0,
//IF(OR(AND(ISNONTEXT('Raw data'!V58),NOT(ISNUMBER('Raw data'!V58))),'Raw data'!V58=""),0,VLOOKUP('Raw data'!V58,Social_Howoften,2,FALSE)))


if(ModelType<=2 && rDF == "No" && rDE == "No") 
{
clQ = 0;
}
else if((ISNONTEXT(rV)&& NOT_ISNUMBER(rV))||rV ==="")
  {
   clQ = 0;
  }
else 
{ 
  clQ =VLOOKUP(rV,Social_Howoften,2,FALSE)
}

var clR ="";
//=IF(OR(AND(ISNONTEXT('Raw data'!V58),NOT(ISNUMBER('Raw data'!V58))),'Raw data'!V58=""),-17,VLOOKUP('Raw data'!V58,Social_Howoften,2, FALSE))

if (((ISNONTEXT(rV)&& NOT_ISNUMBER(rV))||rV ===""))
{
  clR = -17;
}
else
{
 clR = VLOOKUP(rV,Social_Howoften,2, FALSE)
}

//clR = ((ISNONTEXT(rV)&& NOT_ISNUMBER(rV))||rV ==="") ? -17 : VLOOKUP(rV,Social_Howoften,2, FALSE)

var clS ="";
//=IF('Raw data'!W58="16HoursMore",1,
//IF('Raw data'!W58="5to15Hours",2,
//IF('Raw data'!W58="4HoursLess",3,
//IF('Raw data'!W58="Voluntary",4,
//IF('Raw data'!W58="NotWorkingSeeking",5,
//IF('Raw data'!W58="NotWorkingNotSeeking",6,
//IF('Raw data'!W58="Retired",7,"")))))))



if(rW == "16HoursMore")
{
  clS = 1;
}
else if(rW == "5to15Hours")
{
  clS = 2;
}
else if(rW == "4HoursLess")
{
  clS = 3;
}
else if(rW == "Voluntary")
{
  clS = 4;
}
else if(rW == "NotWorkingSeeking")
{
  clS = 5;
}
else if(rW == "NotWorkingNotSeeking")
{
  clS = 6;
}
else if(rW == "Retired")
{
  clS = 7;
}
else {clS = ""}

var clT = ""
//=IF('Raw data'!X58="FullTime",2,
//IF('Raw data'!X58="PartTime",1,
//IF('Raw data'!X58="None",0,"")))

if(rX == "FullTime")
{
  clT = 2;
}
else if(rX == "PartTime")
{
  clT = 1;
}
else if(rX == "None")
{
  clT = 0;
}
else {clT = ""}

var clU = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!Y58),NOT(ISNUMBER('Raw data'!Y58))),'Raw data'!Y58=""),"",
//IF('Raw data'!Y58="No",1,
//IF('Raw data'!Y58="Yes",0,
//IF('Raw data'!Y58="N/A",0,""))))

if (((ISNONTEXT(rY)&& NOT_ISNUMBER(rV))||rY ===""))
{
  clU = ""
}
else if (rY == "No")
{
  clU = 1;
}
else if(rY == "Yes")
{
  clU = 0;
}
else if(rY == "N/A")
{
  clU = 0;
}
else 
{
  clU = ""
}
clV = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!Z58),NOT(ISNUMBER('Raw data'!Z58))),'Raw data'!Z58=""),0,VLOOKUP('Raw data'!Z58,Work_Degree,2,FALSE))

if (((ISNONTEXT(rZ)&& NOT_ISNUMBER(rZ))||rZ ===""))
{
  clV = 0;
}
else 
{
 clV = VLOOKUP(rZ,Work_Degree,2,FALSE)
} 

var clW = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!Z58),NOT(ISNUMBER('Raw data'!Z58))),'Raw data'!Z58=""),-17,VLOOKUP('Raw data'!Z58,Work_Degree,3, FALSE))
if (((ISNONTEXT(rZ)&& NOT_ISNUMBER(rZ))||rZ ===""))
{
  clW = -17;
}
else
{
  clW = VLOOKUP(rZ,Work_Degree,3, FALSE)
}

var clX = "";
//=IF(AND(ModelType<=2,'Raw data'!DG58="No"),0,
//IF(OR(AND(ISNONTEXT('Raw data'!AA58),NOT(ISNUMBER('Raw data'!AA58))),'Raw data'!AA58=""),0,
//VLOOKUP('Raw data'!AA58,Social_Howoften,2,FALSE)))


if(ModelType<=2 && rDG == "No")
{
clX = 0;
}
else if(((ISNONTEXT(rAA)&& NOT_ISNUMBER(rAA))||rAA ===""))
{
  clX = 0;
}
else
{
  clX = VLOOKUP(rAA,Social_Howoften,2,FALSE)
}
var clY = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AA58),NOT(ISNUMBER('Raw data'!AA58))),'Raw data'!AA58=""),-17,VLOOKUP('Raw data'!AA58,Social_Howoften,2, FALSE))
if (((ISNONTEXT(rAA)&& NOT_ISNUMBER(rAA))||rAA ===""))
{
  clY = -17
}
else
{
  clY = VLOOKUP(rAA,Social_Howoften,2, FALSE)
}

var clZ = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1),0,
//IF(OR(AND(ISNONTEXT('Raw data'!AB58),NOT(ISNUMBER('Raw data'!AB58))),'Raw data'!AB58=""),"",
//IF('Raw data'!AB58="No",1,
//IF('Raw data'!AB58="Yes",0,
//IF('Raw data'!AB58="N/A",0,"")))))

if(ModelType>=2 && OUT_DSTNeedsProfile == 1)
{
clZ = 0;
}
else if  (((ISNONTEXT(rAB)&& NOT_ISNUMBER(rAB))||rAB ===""))
{
  clZ = "";
}
else if(rAB == "No")
{
  clZ = 1;
}
else if(rAB == "Yes")
{
  clZ = 0;
}
else if(rAB == "N/A")
{
  clZ = 0;
}
else
{
  clZ = "";
}

var clAA = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1),0,
//IF(AND(ModelType<=2,'Raw data'!DH58="No"),0,
//IF(OR(AND(ISNONTEXT('Raw data'!AC58),NOT(ISNUMBER('Raw data'!AC58))),'Raw data'!AC58=""),"",
//VLOOKUP('Raw data'!AC58,How_Often_Childcare,2,FALSE))))

if(ModelType>=2 && OUT_DSTNeedsProfile == 1)
{
clAA = 0;
}
else if(ModelType<=2 && rDH == "No")
{
  clAA = 0;
}
else if (((ISNONTEXT(rAC)&& NOT_ISNUMBER(rAC))||rAC ===""))
{
  clAA = "";
}
else 
{
  clAA = VLOOKUP(rAC,How_Often_Childcare,2,FALSE)
}

var clAB = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AD58),NOT(ISNUMBER('Raw data'!AD58))),'Raw data'!AD58=""), 0, VLOOKUP('Raw data'!AD58,ALS,2, FALSE))
if (((ISNONTEXT(rAD)&& NOT_ISNUMBER(rAD))||rAD ===""))
{
  clAB = 0;
}
else 
{
  clAB = VLOOKUP(rAD,ALS,2, FALSE)
}

var clAC = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AD58),NOT(ISNUMBER('Raw data'!AD58))),'Raw data'!AD58=""),-17,VLOOKUP('Raw data'!AD58,ALS,3, FALSE))
if (((ISNONTEXT(rAD)&& NOT_ISNUMBER(rAD))||rAD ===""))
{
  clAC = -17
}
else
{
  clAC = VLOOKUP(rAD,ALS,3, FALSE)
}

var clAD = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AE58),NOT(ISNUMBER('Raw data'!AE58))),'Raw data'!AE58=""),"",
//IF('Raw data'!AE58="No",1,
//IF('Raw data'!AE58="Yes",0,"")))
if(((ISNONTEXT(rAE)&& NOT_ISNUMBER(rAE))||rAE ===""))
{
  clAD = ""
}
else if(rAE == "No")
{
  clAD = 1;
}
else if(rAE == "Yes")
{
  clAD = 0;
}
else
{
  clAD = ""
}

var clAE = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1),4,
//IF(AND(ModelType<=2,'Raw data'!DI58="No"),0,
//IF('Raw data'!AF58=0,0,
//IF('Raw data'!AF58=2,2,
//IF('Raw data'!AF58=3,3,
//IF('Raw data'!AF58=4,4,
//IF('Raw data'!AF58=5,4,0)))))))

if(ModelType>=2 && OUT_DSTNeedsProfile == 1)
{
  clAE = 4;
}
else if(ModelType<=2 && rDI == "No")
{
  clAE = 0;
}
else if(rAF == 0)
{
  clAE = 0;
}
else if(rAF == 2)
{
  clAE = 2;
}
else if(rAF == 3)
{
  clAE = 3;
}
else if(rAF == 4)
{
  clAE = 4;
}
else if(rAF == 5)
{
  clAE = 4;
}
else
{
clAE = 0;
}

var clAF = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AG58),NOT(ISNUMBER('Raw data'!AG58))),'Raw data'!AG58=""),0,
//IF('Raw data'!AG58="No",1,
//IF('Raw data'!AG58="Yes",0,"")))
if (((ISNONTEXT(rAG)&& NOT_ISNUMBER(rAG))||rAG ===""))
{
  clAF = 0;
}
else if(rAG == "No") 
{
  clAF = 1;
}
else if(rAG == "Yes")
{
  clAF = 0;
}
else 
{
  clAF = "";
}

var clAG = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1),0,
//IF(OR(AND(ISNONTEXT('Raw data'!AH58),NOT(ISNUMBER('Raw data'!AH58))),'Raw data'!AH58=""),0,
//IF('Raw data'!AH58="No",1,
//IF('Raw data'!AH58="Yes",0,""))))
if(ModelType>=2 && OUT_DSTNeedsProfile == 1)
{
  clAG = 0;
}
else if (((ISNONTEXT(rAH)&& NOT_ISNUMBER(rAH))||rAH ===""))
{
  clAG = 0;
}
else if(rAH == "No")
{
  clAG = 1;
}
else if(rAH == "Yes")
{
  clAG = 0;
}
else
{
  clAG = "";
}

var clAH ="";
//=IF(OR(AND(ISNONTEXT('Raw data'!AI58),NOT(ISNUMBER('Raw data'!AI58))),'Raw data'!AI58=""),"",
//IF('Raw data'!AI58="No",1,
//IF('Raw data'!AI58="Yes",0,"")))
if (((ISNONTEXT(rAI)&& NOT_ISNUMBER(rAI))||rAI ===""))
{
  clAH = "";
}
else if(rAI == "No")
{
  clAH = 1;
}
else if(rAI == "Yes")
{
  clAH = 0;
}
else
{
  clAH = "";
}

var clAI = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1),4,
//IF(AND(ModelType<=2,'Raw data'!DJ58="No"),0,
//IF('Raw data'!AJ58=0,0,
//IF('Raw data'!AJ58=2,2,
//IF('Raw data'!AJ58=3,3,
//IF('Raw data'!AJ58=4,4,
//IF('Raw data'!AJ58=5,5,0)))))))
if(ModelType >=2 && OUT_DSTNeedsProfile == 1)
{
  clAI = 4;
}
else if(ModelType <=2 && rDJ == "No")
{
  clAI = 0;
}
else if(rAJ == 0)
{
  clAI = 0;
}
else if(rAJ == 2)
{
  clAI = 2;
}
else if(rAJ == 3)
{
  clAI = 3;
}
else if(rAJ == 4)
{
  clAI = 4;
}
else if(rAJ == 5)
{
  clAI = 5;
}
else
{
  clAI = 0;
}

var clAJ = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,AL58=0.1),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,AL58>=1),4,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,AL58=0),0,
//IF(AND(ModelType<=2,'Raw data'!DJ58="No"),0,
//IF('Raw data'!AK58=0,0,
//IF('Raw data'!AK58=2,2,
//IF('Raw data'!AK58=3,3,
//IF('Raw data'!AK58=4,4,
//IF('Raw data'!AK58=5,4,0)))))))))
if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && clAL == 0.1)
{
  clAJ = 2;
}
else if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && clAL>=1 )
{
  clAJ =4;
}
else if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && clAL == 0)
{
  clAJ = 0;
}
else if(ModelType <=2 && rDJ == "No")
{
  clAJ = 0;
}
else if(rAK == 0)
{
 clAJ = 0;
}
else if(rAK == 2)
{
clAJ = 2;
}
else if(rAK == 3)
{
  clAJ = 3;
}
else if(rAK == 4)
{
  clAJ = 4;
}
else if(rAK == 5)
{
  clAJ = 4;
}
else
{
  clAJ = 0;
}

var clAK = "";;
//=IF(OR(AND(ISNONTEXT('Raw data'!AK58),NOT(ISNUMBER('Raw data'!AK58))),'Raw data'!AK58=""),-17,
//IF('Raw data'!AK58=5,1,0))

if (((ISNONTEXT(rAK)&& NOT_ISNUMBER(rAK))||rAK ===""))
{
  clAK = -17;
}
else if(rAK == 5)
{
  clAK = 1;
}
else 
{
  clAK = 0;
}


var clAL = "";
//=IF(AND(ModelType<=2,'Raw data'!DJ58="No"),0,
//IF(OR(AND(ISNONTEXT('Raw data'!AL58),NOT(ISNUMBER('Raw data'!AL58))),'Raw data'!AL58=""),0,VLOOKUP('Raw data'!AL58,Toilet_Prep_Freq,2,FALSE)))
if(ModelType <=2 && rDJ == "No")
{
  clAL = 0;
}
else if(((ISNONTEXT(rAL)&& NOT_ISNUMBER(rAL))||rAL ===""))
{
  clAL = 0;
}
else
{
  clAL = VLOOKUP(rAL,Toilet_Prep_Freq,2,FALSE)
}

var clAM = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!AL58),NOT(ISNUMBER('Raw data'!AL58))),'Raw data'!AL58=""),-17,0)
if (((ISNONTEXT(rAL)&& NOT_ISNUMBER(rAL))||rAL ===""))
{
  clAM = -17;
}
else
{
  clAM = 0;
}

var clAN = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GC58=0),0,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GC58=1),3,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GC58>=2),4,
//IF(AND(ModelType<=2,'Raw data'!DJ58="No"),0,
//IF('Raw data'!AM58=0,0,
//IF('Raw data'!AM58=2,2,
//IF('Raw data'!AM58=3,3,
//IF('Raw data'!AM58=4,4,
//IF('Raw data'!AM58=5,4,0)))))))))

if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGC == 0)
{
  clAN = 0;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGC == 1)
{
  clAN = 3;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGC >= 2)
{
  clAN = 4;
}
else if(ModelType <= 2 && rDJ == "No")
{
  clAN = 0;
}
else if(rAM == 0)
{
  clAN = 0;
}
else if(rAM == 2)
{
  clAN = 2;
}
else if(rAM == 3)
{
  clAN = 3;
}
else if(rAM == 4)
{
  clAN = 4;
}
else if(rAM == 5)
{
  clAN = 4;
}
else
{
  clAN = 0;
}

var clAO = "";
//=IF(AND(ModelType<=2,'Raw data'!DJ58="No"),0,
//IF('Raw data'!AM58=5,1,0))

if(ModelType <= 2 && rDJ == "No")
{
  clAO = 0;
}
else if (rAM == 5)
{
  clAO = 1;
}
else
{
  clAO = 0;
}

var clAP = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AM58),NOT(ISNUMBER('Raw data'!AM58))),'Raw data'!AM58=""),-17,0)
if(((ISNONTEXT(rAM)&& NOT_ISNUMBER(rAM))||rAM ===""))
{
  clAP = -17;
}
else
{
  clAP = 0;
}

var clAQ = "";
//=IF('Raw data'!AN58="No", 1, 
//IF('Raw data'!AN58="Yes", 0, 0))

if(rAN == "No")
{
  clAQ = 1;
}
else if(rAN == "Yes")
{
  clAQ = 0;
}
else 
{
  clAQ = 0; 
}

var clAR = "";
//=IF('Raw data'!AO58="More30m",1,
//IF('Raw data'!AO58="Upto30m",0,
//IF('Raw data'!AO58="n/a",0,0)))
if (rAO == "More30m")
{
  clAR = 1;
}
else if(rAO == "Upto30m")
{
  clAR = 0;
}
else if(rAO == "n/a")
{
  clAR = 0;
}
else
{
  clAR = 0;
}

var clAS = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GC58<2),0,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GC58>=2),1,
//IF('Raw data'!AP58="No",1,
//IF('Raw data'!AP58="Yes",0,0))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGC < 2)
{
  clAS = 0;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGC >= 2 )
{
  clAS = 1;
}
else if(rAP == "No")
{
  clAS = 1;
}
else if(rAP == "Yes")
{
  clAS = 0;
}
else
{
  clAS = 0;
}

var clAT = "";
//=IF('Raw data'!AQ58="No", 1, 
//IF('Raw data'!AQ58="Yes", 0, 0))
if(rAQ == "No")
{
  clAT = 1;
}
else if(rAQ == "Yes")
{
  clAT = 0;
}
else
{
  clAT = 0;
}

var clAU = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AR58),NOT(ISNUMBER('Raw data'!AR58))),'Raw data'!AR58=""),"",
//IF('Raw data'!AR58="No",1,
//IF('Raw data'!AR58="Yes",0,"")))
if(((ISNONTEXT(rAR)&& NOT_ISNUMBER(rAR))||rAR ===""))
{
  clAU = "";
}
else if(rAR == "No")
{
  clAU = 1;
}
else if(rAR == "Yes")
{
  clAU = 0;
}
else
{
  clAU = "";
}

var clAV = "";
//=IF(AND(ModelType<=2,'Raw data'!DK58="No"),0,
//IF('Raw data'!AS58=0,0,
//IF('Raw data'!AS58=2,2,
//IF('Raw data'!AS58=3,3,
//IF('Raw data'!AS58=4,4,
//IF('Raw data'!AS58=5,4,0))))))
if(ModelType <= 2 && rDK == "No")
{
  clAV = 0;
}
else if(rAS == 0)
{
  clAV = 0;
}
else if(rAS == 2)
{
  clAV = 2;
}
else if(rAS == 3)
{
  clAV = 3;
}
else if(rAS == 4)
{
  clAV = 4;
}
else if(rAS == 5)
{
  clAV = 4;
}
else
{
  clAV = 0;
}

var clAW = "";
//=IF(AND(ModelType<=2,'Raw data'!DK58="No"),0,
//IF('Raw data'!AS58=5,1,0))
if(ModelType <= 2 && rDK == "No")
{
  clAW = 0;
}
else if(rAS == 5)
{
  clAW = 1;
}
else
{
  clAW = 0;
}

var clAX = "";
//=IF(AND(ModelType<=2,'Raw data'!DK58="No"),0,
//IF('Raw data'!AT58=0,0,
//IF('Raw data'!AT58=2,2,
//IF('Raw data'!AT58=3,3,
//IF('Raw data'!AT58=4,4,
//IF('Raw data'!AT58=5,4,0))))))
if(ModelType <= 2 && rDK == "No")
{
  clAX = 0;
}
else if(rAT == 0)
{
  clAX = 0;
}
else if(rAT == 2)
{
  clAX = 2;
}
else if(rAT == 3)
{
  clAX = 3;
}
else if(rAT == 4)
{
  clAX = 4;
}
else if(rAT == 5)
{
  clAX = 4;
}
else
{
  clAX = 0;
}

var clAY = "";
//=IF(AND(ModelType<=2,'Raw data'!DK58="No"),0,
//IF('Raw data'!AT58=5,1,0))
if(ModelType <= 2 && rDK == "No")
{
  clAY = 0;
}
else if(rAT == 5)
{
  clAY = 1;
}
else
{
  clAY = 0;
}

var clAZ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AU58),NOT(ISNUMBER('Raw data'!AU58))),'Raw data'!AU58=""),"",
//IF('Raw data'!AU58="No",1,
//IF('Raw data'!AU58="Yes",0,"")))
if(((ISNONTEXT(rAU)&& NOT_ISNUMBER(rAU))||rAU ===""))
{
  clAZ = ""
}
else if(rAU == "No")
{
  clAZ = 1;
}
else if(rAU == "Yes")
{
  clAZ = 0;
}
else
{
  clAZ = "";
}

var clBA = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1),4,
//IF(AND(ModelType<=2,'Raw data'!DL58="No"),0,
//IF('Raw data'!AV58=0,0,
//IF('Raw data'!AV58=2,2,
//IF('Raw data'!AV58=3,3,
//IF('Raw data'!AV58=4,4,
//IF('Raw data'!AV58=5,4,0)))))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1)
{
  clBA = 4;
}
else if(ModelType <= 2 && rDL == "No")
{
  clBA = 0;
}
else if(rAV == 0)
{
  clBA = 0;
}
else if(rAV == 2)
{
  clBA = 2;
}
else if(rAV == 3)
{
  clBA = 3;
}
else if(rAV == 4)
{
  clBA = 4;
}
else if(rAV == 5)
{
  clBA = 4;
}
else
{
  clBA = 0;
}

var clBB = "";
//=IF(AND(ModelType<=2,'Raw data'!DL58="No"), 0,
//IF('Raw data'!AV58=5,1,0))
if(ModelType <= 2 && rDL == "No")
{
  clBB = 0;
}
else if(rAV == 5)
{
  clBB = 1;
}
else 
{
  clBB = 0;
}

var clBC = "";
//=IF(AND(ModelType<=2,'Raw data'!DL58="No"), 0,
//IF('Raw data'!AW58=0,0,
//IF('Raw data'!AW58=2,2,
//IF('Raw data'!AW58=3,3,
//IF('Raw data'!AW58=4,4,
//IF('Raw data'!AW58=5,4,0))))))
if(ModelType <= 2 && rDL == "No")
{
  clBC = 0;
}
else if(rAW == 0)
{
  clBC = 0;
}
else if(rAW == 2)
{
  clBC = 2;
}
else if(rAW == 3)
{
  clBC =3;
}
else if(rAW == 4)
{
  clBC = 4;
}
else if(rAW == 5)
{
  clBC = 4;
}
else
{
  clBC = 0;
}

var clBD = "";
//=IF(AND(ModelType<=2,'Raw data'!DL58="No"), 0,
//IF('Raw data'!AW58=5,1,0))
if(ModelType <= 2 && rDL == "No")
{
  clBD = 0;
}
else if(rAW == 5)
{
  clBD = 1;
}
else
{
  clBD = 0;
}

var clBE = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AW58),NOT(ISNUMBER('Raw data'!AW58))),'Raw data'!AW58=""),-17,'Clean data'!BC58)
if(((ISNONTEXT(rAW)&& NOT_ISNUMBER(rAW))||rAW ===""))
{
  clBE = -17;
}
else
{
  clBE = clBC;
}

var clBF = "";
//=IF(AND(ModelType<=2,'Raw data'!DL58="No"), 0,
//IF(OR(AND(ISNONTEXT('Raw data'!AX58),NOT(ISNUMBER('Raw data'!AX58))),'Raw data'!AX58=""), 0, VLOOKUP('Raw data'!AX58, Wash_Freq, 2, FALSE)))
if(ModelType <= 2 && rDL == "No")
{
  clBF = 0;
}
else if(((ISNONTEXT(rAX)&& NOT_ISNUMBER(rAX))||rAX ===""))
{
  clBF = 0;
}
else
{
  clBF = VLOOKUP(rAX, Wash_Freq, 2, FALSE)
}

var clBG = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AX58),NOT(ISNUMBER('Raw data'!AX58))),'Raw data'!AX58=""),-17,'Clean data'!BF58)
if (((ISNONTEXT(rAX)&& NOT_ISNUMBER(rAX))||rAX ===""))
{
  clBG = -17;
}
else
{
  clBG = clBF;
}

var clBH = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AY58),NOT(ISNUMBER('Raw data'!AY58))),'Raw data'!AY58=""),"",
//IF('Raw data'!AY58="No",1,
//IF('Raw data'!AY58="Yes",0,"")))
if (((ISNONTEXT(rAY)&& NOT_ISNUMBER(rAY))||rAY ===""))
{
  clBH = ""
}
else if(rAY == "No")
{
  clBH = 1;
}
else if(rAY == "Yes")
{
  clBH = 0;
}
else
{
  clBH = ""
}

var clBI = "";
//=IF(AND(ModelType<=2,'Raw data'!DM58="No"),0,
//IF('Raw data'!AZ58=0,0,
//IF('Raw data'!AZ58=2,2,
//IF('Raw data'!AZ58=3,3,
//IF('Raw data'!AZ58=4,4,
//IF('Raw data'!AZ58=5,4,0))))))
if(ModelType <= 2 && rDM == "No")
{
  clBI = 0;
}
else if(rAZ == 0)
{
  clBI = 0;
}
else if(rAZ == 2)
{
  clBI = 2;
}
else if(rAZ == 3)
{
  clBI = 3;
}
else if(rAZ == 4)
{
  clBI = 4;
}
else if(rAZ == 5)
{
  clBI = 4;
}
else
{
  clBI = 0;
}


var clBJ = "";
//=IF(AND(ModelType<=2,'Raw data'!DM58="No"),0,
//IF('Raw data'!AZ58=5,1,0))
if(ModelType <= 2 && rDM == "No")
{
  clBJ = 0;
}
else if(rAZ == 5)
{
  clBJ = 1;
}
else
{
  clBJ = 0;
}

var clBK = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!AZ58),NOT(ISNUMBER('Raw data'!AZ58))),'Raw data'!AZ58=""), -17,'Clean data'!BI58)
if (((ISNONTEXT(rAZ)&& NOT_ISNUMBER(rAZ))||rAZ ===""))
{
  clBK = -17;
}
else
{
  clBK = clBI;
}

var clBL = "";
//=IF(AND(ModelType<=2,'Raw data'!DM58="No"),0,
//IF(OR(AND(ISNONTEXT('Raw data'!BA58),NOT(ISNUMBER('Raw data'!BA58))),'Raw data'!BA58=""),0,VLOOKUP('Raw data'!BA58,Toilet_Prep_Freq,2,FALSE)))


if(ModelType <= 2 && rDM == "No")
{
  clBL = 0;
}
else if  (((ISNONTEXT(rBA)&& NOT_ISNUMBER(rBA))||rBA ===""))
{
  clBL = 0;
}
else 
{
  clBL = VLOOKUP(rBA,Toilet_Prep_Freq,2,FALSE)
}

var clBM = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!BA58),NOT(ISNUMBER('Raw data'!BA58))),'Raw data'!BA58=""), -17,'Clean data'!BL58)
if(((ISNONTEXT(rBA)&& NOT_ISNUMBER(rBA))||rBA ===""))
{
  clBM = -17;
}
else
{
  clBM = clBL
}

var clBN = "";
//=IF('Raw data'!BB58="Routine",0,
//IF('Raw data'!BB58="Monitor",2,
//IF('Raw data'!BB58="Skilled",4,0)))
if(rBB == "Routine")
{
  clBN = 0;
}
else if(rBB == "Monitor")
{
  clBN = 2;
}
else if(rBB == "Skilled")
{
  clBN = 4;
}
else
{
  clBN = 0;
}

var clBO = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BB58),NOT(ISNUMBER('Raw data'!BB58))),'Raw data'!BB58=""),-17,BN58)
if(((ISNONTEXT(rBB)&& NOT_ISNUMBER(rBB))||rBB ===""))
{
  clBO = -17;
}
else
{
  clBO = clBN;
}

var clBP = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BC58),NOT(ISNUMBER('Raw data'!BC58))),'Raw data'!BC58=""),"",
//IF('Raw data'!BC58="No",1,
//IF('Raw data'!BC58="Yes",0,"")))
if(((ISNONTEXT(rBC)&& NOT_ISNUMBER(rBC))||rBC ===""))
{
  clBP = "";
}
else if(rBC == "No")
{
  clBP = 1;
}
else if(rBC == "Yes")
{
  clBP = 0;
}
else
{
  clBP = "";
}

var clBQ = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,MAX(AV58>3,AX58>3,BC58>3,BI58>3)),4,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,MAX(AV58=3,AX58=3,BC58=3,BI58=3)),3,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,MAX(AV58=2,AX58=2,BC58=2,BI58=2)),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,AV58<2,AX58<2,BC58<2,BI58<2),0,
//IF('Raw data'!BD58=0,0,
//IF('Raw data'!BD58=2,2,
//IF('Raw data'!BD58=3,3,
//IF('Raw data'!BD58=4,4,
//IF('Raw data'!BD58=5,4,0)))))))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && Math.max(clAV > 3, clAX > 3, clBC > 3, clBI > 3))
{
  clBQ = 4;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && Math.max(clAV == 3, clAX== 3, clBC == 3, clBI == 3))
{
  clBQ = 3;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && Math.max(clAV == 2, clAX == 2, clBC == 2, clBI == 2))
{
  clBQ = 2;
}
else if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && clAV < 2, clAX < 2, clBC < 2, clBI < 2)
{
  clBQ = 0;
}
else if(rBD == 0)
{
  clBQ = 0;
}
else if(rBD == 2)
{
  clBQ = 2;
}
else if(rBD == 3)
{
  clBQ = 3;
}
else if(rBD == 4)
{
  clBQ = 4;
}
else if(rBD == 5)
{
  clBQ = 4;
}
else
{
  clBQ = 0;
}


var clBR = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,OR('Raw data'!AS58=5,'Raw data'!AT58=5,'Raw data'!AW58=5,'Raw data'!AZ58=5)),1,
//IF('Raw data'!BD58=5,1,0))
if(ModelType >= 2 && OUT_DSTNeedsProfile || rAS == 5, rAT == 5, rAW == 5, rAZ == 5)
{
  clBR = 1;
}
else if(rBD == 5)
{
  clBR = 1;
}
else
{
  clBR = 0;
}


var clBS = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BD58),NOT(ISNUMBER('Raw data'!BD58))),'Raw data'!BD58=""),-17,BR58)
if(((ISNONTEXT(rBD)&& NOT_ISNUMBER(rBD))||rBD ===""))
{
  cLBS = -17;
}
else
{
  clBS = clBR;
}


var clBT = "";
//=IF('Raw data'!BE58="No", 1, 0)
if(rBE == "No")
{
  clBT = 1;
}
else
{
  clBT = 0;
}

var clBU = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BE58),NOT(ISNUMBER('Raw data'!BE58))),'Raw data'!BE58=""),-17,BT58)
if(((ISNONTEXT(rBE)&& NOT_ISNUMBER(rBE))||rBE ===""))
{
  clBU = -17;
}
else
{
  clBU = clBT;
}

var clBV = "";
//=IF('Raw data'!BF58=1, 1,
// IF('Raw data'!BF58=2, 2, 0))
if(rBF == 1)
{
  clBV = 1;
}
else if(rBF == 2)
{
  clBV = 2;
}
else
{
  clBV = 0;
}


var clBW = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GF58=0),0,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GF58=1),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GF58=2),3,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GF58>=3),4,
//IF('Raw data'!BG58=0,0,
//IF('Raw data'!BG58=2,2,
//IF('Raw data'!BG58=3,3,
//IF('Raw data'!BG58=4,4,
//IF('Raw data'!BG58=5,4,0)))))))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGF == 0)
{
  clBW = 0;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGF == 1)
{
  clBW = 2;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGF == 2)
{
  clBW = 3;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGF >= 3)
{
  clBW = 4;
}
else if(rBG == 0)
{
  clBW = 0;
}
else if(rBG == 2)
{
  clBW = 2;
}
else if(rBG == 3)
{
  clBW = 3;
}
else if(rBG == 4)
{
  clBW = 4;
}
else if(rBG == 5)
{
  clBW = 4;
}
else
{
  clBW = 0;
}


var clBX = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GF58=4),1,
//IF('Raw data'!BH58="No",1,0))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGF == 4)
{
  clBX = 1;
}
else if(rBH == "No")
{
  clBX = 1;
}
else 
{
  clBX = 0;
}

var clBY = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BH58),NOT(ISNUMBER('Raw data'!BH58))),'Raw data'!BH58=""),-17,BX58)
if(((ISNONTEXT(rBH)&& NOT_ISNUMBER(rBH))||rBH ===""))
{
  clBY = -17;
}
else
{
  clBY = clBX;
}

var clBZ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BI58),NOT(ISNUMBER('Raw data'!BI58))),'Raw data'!BI58=""),0,VLOOKUP('Raw data'!BI58,Main_condition,2,FALSE))
if(((ISNONTEXT(rBI)&& NOT_ISNUMBER(rBI))||rBI ===""))
{
  clBZ = 0;
}
else
{
  clBZ = VLOOKUP(rBI,Main_condition,2,FALSE)
}

var clCA = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BJ58),NOT(ISNUMBER('Raw data'!BJ58))),'Raw data'!BJ58=""),0,VLOOKUP('Raw data'!BJ58,Main_condition,2,FALSE))
if(((ISNONTEXT(rBJ)&& NOT_ISNUMBER(rBJ))||rBJ ===""))
{
  clCA = 0;
}
else
{
  clCA = VLOOKUP(rBJ,Main_condition,2,FALSE)
}

var clCB = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BK58),NOT(ISNUMBER('Raw data'!BK58))),'Raw data'!BK58=""),0,VLOOKUP('Raw data'!BK58,Main_condition,2,FALSE))
if(((ISNONTEXT(rBK)&& NOT_ISNUMBER(rBK))||rBK ===""))
{
  clCB = 0;
}
else
{
  clCB = VLOOKUP(rBK,Main_condition,2,FALSE)
}

var clCC = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BL58),NOT(ISNUMBER('Raw data'!BL58))),'Raw data'!BL58=""),0,VLOOKUP('Raw data'!BL58,Main_condition,2,FALSE))
if(((ISNONTEXT(rBL)&& NOT_ISNUMBER(rBL))||rBL ===""))
{
  clCC = 0;
}
else
{
  clCC = VLOOKUP(rBL,Main_condition,2,FALSE)
}

var clCD = "";
//=IF('Raw data'!BM58="Daily", 4,
//IF('Raw data'!BM58="Weekly", 3, 
//IF('Raw data'!BM58="Monthly", 2, 
//IF('Raw data'!BM58="Rarely", 1, ""))))
if(rBM == "Daily")
{
  clCD = 4;
}
else if(rBM == "Weekly")
{
  clCD = 3;
}
else if(rBM == "Monthly")
{
  clCD = 2;
}
else if(rBM == "Rarely")
{
  clCD = 1;
}
else
{
  clCD = "";
}

var clCE = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58>=3),5,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58=2),4,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58=1),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58<1),0,
//(IF('Raw data'!BN58="none",0,
//IF('Raw data'!BN58="remind",2,
//IF('Raw data'!BN58="Supervise",3,
//IF('Raw data'!BN58="Admin",4,
//IF('Raw data'!BN58="TrainedAdmin",5,0))))))))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK >= 3)
{
  clCE = 5;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK == 2)
{
  clCE = 4;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK == 1)
{
  clCE = 2;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK < 1)
{
  clCE = 0;
}
else if(rBN == "none")
{
  clCE = 0;
}
else if(rBN == "remind")
{
  clCE = 2;
}
else if(rBN == "Supervise")
{
  clCE = 3;
}
else if(rBN == "Admin")
{
  clCE = 4;
}
else if(rBN == "TrainedAdmin")
{
  clCE = 5;
}
else 
{
  clCE = 0;
}

var clCF = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BN58),NOT(ISNUMBER('Raw data'!BN58))),'Raw data'!BN58=""),-17,0)
if(((ISNONTEXT(rBN)&& NOT_ISNUMBER(rBN))||rBN ===""))
{
  clCF = -17;
}
else 
{
  clCF = 0;
}

var clCG = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BO58),NOT(ISNUMBER('Raw data'!BO58))),'Raw data'!BO58=""), 0, VLOOKUP('Raw data'!BO58, Meds_Freq, 2, FALSE))
if(((ISNONTEXT(rBO)&& NOT_ISNUMBER(rBO))||rBO ===""))
{
  clCG = 0;
}
else
{
  clCG = VLOOKUP(rBO, Meds_Freq, 2, FALSE)
}

var clCH = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BO58),NOT(ISNUMBER('Raw data'!BO58))), 'Raw data'!BO58=""),-17,0)
if(((ISNONTEXT(rBO)&& NOT_ISNUMBER(rBO))||rBO ===""))
{
  clCH = -17;
}
else
{
  clCH = 0;
}


var clCI = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58>=3),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58=2),1,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58<2),0,
//IF('Raw data'!BP58=1,1,
//IF('Raw data'!BP58=2,2,0)))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK >= 3)
{
  clCI = 2;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK == 2)
{
  clCI = 1;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK < 2)
{
  clCI = 0;
}
else if(rBP == 1)
{
  clCI = 1;
}
else if(rBP == 2)
{
  clCI = 2;
}
else 
{
  clCI = 0;
}

var x = NOT_ISNUMBER(0);


var clCJ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BP58),NOT(ISNUMBER('Raw data'!BP58))), 'Raw data'!BP58=""),-17,CI58)
if(((ISNONTEXT(rBP)&& NOT_ISNUMBER(rBP))||rBP ===""))
{
  clCJ = -17;
}
else 
{
  clCJ = clCI;
}
 
var clCK = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58>=4),1,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GK58<4),0,
//IF('Raw data'!BQ58="Yes",0,
//IF('Raw data'!BQ58="No",1,""))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK >= 4)
{
  clCK = 1;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGK < 4)
{
  clCK = 0;
}
else if(rBQ == "Yes")
{
  clCK = 0;
}
else if(rBQ == "No")
{
  clCK = 1;
}
else
{
  clCK = "";
}

var clCL = "";
//=IF('Raw data'!BR58="RiskLessDaily",1,
//IF('Raw data'!BR58="RiskDaily",2,
//IF('Raw data'!BR58="RiskMoreDaily",3,
//F('Raw data'!BR58="TreatLessDaily",4,
//IF('Raw data'!BR58="TreatDaily",5,
//IF('Raw data'!BR58="TreatMoreDaily",6,0))))))
if(rBR == "RiskLessDaily")
{
  clCL = 1;
}
else if(rBR == "RiskDaily")
{
  clCL = 2;
}
else if(rBR == "RiskMoreDaily")
{
  clCL = 3;
}
else if(rBR == "TreatLessDaily")
{
  clCL = 4;
}
else if(rBR == "TreatDaily")
{
  clCL = 5;
}
else if(rBR == "TreatMoreDaily")
{
  clCL = 6;
}
else 
{
  clCL = 0;
}

var clCM = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!BR58),NOT(ISNUMBER('Raw data'!BR58))), 'Raw data'!BR58=""),-17,CL58)
if(((ISNONTEXT(rBR)&& NOT_ISNUMBER(rBR))||rBR ===""))
{
  clCM = -17;
}
else
{
  clCM = clCL;
}

var clCN = ""
//=IF('Raw data'!BS58=1,1,
//IF('Raw data'!BS58=2,2,
//IF('Raw data'!BS58=3,3,0)))
if(rBS == 1)
{
  clCN = 1;
}
else if(rBS == 2)
{
  clCN = 2;
}
else if(rBS == 3)
{
  clCN = 3;
}
else
{
  clCN = 0;
}

var clCO = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!BS58),NOT(ISNUMBER('Raw data'!BS58))), 'Raw data'!BS58=""),-17,CN58)
if(((ISNONTEXT(rBS)&& NOT_ISNUMBER(rBS))||rBS ===""))
{
  clCO = -17;
}
else
{
  clCO = clCN;
}

var clCP = ""
//=IF('Raw data'!BT58="No", 1,
// IF('Raw data'!BT58="Yes", 0, ""))
if(rBT == "No")
{
  clCP = 1;
}
else if(rBT == "Yes")
{
  clCP = 0;
}
else
{
  clCP = "";
}

var clCQ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BT58),NOT(ISNUMBER('Raw data'!BT58))), 'Raw data'!BT58=""),-17,CP58)
if(((ISNONTEXT(rBT)&& NOT_ISNUMBER(rBT))||rBT ===""))
{
  clCQ = -17;
}
else
{
  clCQ = clCP;
}


var clCR = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GB58>=4),4,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GB58=3),3,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GB58=2),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GB58=1),1,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GB58<1),0,
//IF('Raw data'!BU58=1,1,
//IF('Raw data'!BU58=2,2,
//IF('Raw data'!BU58=3,3,
//IF('Raw data'!BU58=4,4,0)))))))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGB >= 4)
{
  clCR = 4;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGB == 3)
{
  clCR = 3;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGB == 2)
{
  clCR = 2;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGB == 1)
{
  clCR = 1;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGB < 1)
{
  clCR = 0;
}
else if(rBU == 1)
{
  clCR = 1;
}
else if(rBU == 2)
{
  clCR = 2;
}
else if(rBU == 3)
{
  clCR = 3;
}
else if(rBU == 4)
{
  clCR = 4;
}
else 
{
  clCR = 0;
}

var clCS = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BU58),NOT(ISNUMBER('Raw data'!BU58))), 'Raw data'!BU58=""),-17,CR58)
if(((ISNONTEXT(rBU)&& NOT_ISNUMBER(rBU))||rBU ===""))
clCS = -17;
else 
{
  clCS = clCR;
}

var clCT = "";
//=IF('Raw data'!BV58="None", 0, IF('Raw data'!BV58="Inhaler", 1, IF('Raw data'!BV58="LowLevel", 2, IF('Raw data'!BV58="HighLevel", 3, 0))))
if(rBV == "None")
{
  clCT = 0;
}
else if(rBV == "Inhaler")
{
  clCT = 1;
}
else if(rBV == "LowLevel")
{
  clCT = 2;
}
else if(rBV == "HighLevel")
{
  clCT = 3;
}
else
{
  clCT = 0;
}

var clCU = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BV58),NOT(ISNUMBER('Raw data'!BV58))), 'Raw data'!BV58=""),-17,CT58)
if(((ISNONTEXT(rBV)&& NOT_ISNUMBER(rBV))||rBV ===""))
{
  clCU = -17;
}
else 
{
  clCU = clCT;
}

var clCV = ""
//=IF('Raw data'!BW58="Yes",1,0)
if(rBW == "Yes")
{
  clCV = 1;
}
else
{
  clCV = 0;
}

var clCW = "";
//=IF('Raw data'!BX58=1,1,
//IF('Raw data'!BX58=2,2,
//IF('Raw data'!BX58=3,3,
//IF('Raw data'!BX58=4,4,
//IF('Raw data'!BX58=5,5,0)))))
if(rBX == 1)
{
  clCW = 1;
}
else if(rBX == 2)
{
  clCW = 2;
}
else if(rBX == 3)
{
  clCW = 3;
}
else if(rBX == 4)
{
  clCW = 4;
}
else if(rBX == 5)
{
  clCW = 5;
}
else 
{
  clCW = 0;
}


var clCX = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BX58),NOT(ISNUMBER('Raw data'!BX58))), 'Raw data'!BX58=""),-17,CW58)
if(((ISNONTEXT(rBX)&& NOT_ISNUMBER(rBX))||rBX ===""))
{
  clCX = -17;
}
else
{
  clCX = clCW;
}

var clCY = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58=4),4,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58=3),3,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58=2),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58=1),1,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58<1),0,
//IF(OR(AND(ISNONTEXT('Raw data'!BY58),NOT(ISNUMBER('Raw data'!BY58))),'Raw data'!BY58=""),0,
//IF('Raw data'!BY58=1,1,
//IF('Raw data'!BY58=2,2,
//IF('Raw data'!BY58=3,3,
//IF('Raw data'!BY58=4,4,0))))))))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI == 4)
{
  clCY = 4;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI == 3)
{
  clCY = 3;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI == 2)
{
  clCY = 2;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI == 1)
{
  clCY = 1;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI < 0)
{
  clCY = 0;
}
else if(((ISNONTEXT(rBY)&& NOT_ISNUMBER(rBY))||rBY ===""))
{
clCY = 0;
}
else if(rBY == 1)
{
  clCY = 1;
}
else if(rBY == 2)
{
  clCY = 2;
}
else if(rBY == 3)
{
  clCY = 3;
}
else if(rBY == 4)
{
  clCY = 4;
}
else 
{
  clCY = 0;
}

var clCZ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!BY58),NOT(ISNUMBER('Raw data'!BY58))), 'Raw data'!BY58=""),-17,CY58)
if(((ISNONTEXT(rBY)&& NOT_ISNUMBER(rBY))||rBY ===""))
{
  clCZ = -17;
}
else 
{
  clCZ = clCY;
}

var clDA = ""
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58=4),4,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58=3),3,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58=2),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58=1),1,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,GI58<1),0,
//IF(OR(AND(ISNONTEXT('Raw data'!BZ58),NOT(ISNUMBER('Raw data'!BZ58))),'Raw data'!BZ58=""),0,
//IF('Raw data'!BZ58=1,1,
//IF('Raw data'!BZ58=2,2,
//IF('Raw data'!BZ58=3,3,
//IF('Raw data'!BZ58=4,4,0))))))))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI == 4)
{
  clDA = 4;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI == 3)
{
  clDA = 3;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI == 2)
{
  clDA = 2;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI == 1)
{
  clDA = 1;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clGI < 0)
{
  clDA = 0;
}
else if(((ISNONTEXT(rBY)&& NOT_ISNUMBER(rBY))||rBY ===""))
{
clDA = 0;
}
else if(rBZ == 1)
{
  clDA = 1;
}
else if(rBZ == 2)
{
  clDA = 2;
}
else if(rBZ == 3)
{
  clDA = 3;
}
else if(rBZ == 4)
{
  clDA= 4;
}
else 
{
  clDA = 0;
}

var clDB = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!BZ58),NOT(ISNUMBER('Raw data'!BZ58))), 'Raw data'!BZ58=""),-17,DA58)
if(((ISNONTEXT(rBZ)&& NOT_ISNUMBER(rBZ))||rBZ ===""))
{
  clDB = -17;
}
else 
{
  clDB = clDA;
}

var clDC = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!CA58),NOT(ISNUMBER('Raw data'!CA58))),'Raw data'!CA58=""),0,
//IF('Raw data'!CA58=1,1,
//IF('Raw data'!CA58=2,2,
//IF('Raw data'!CA58=3,3,
//IF('Raw data'!CA58=4,4,0)))))
if(((ISNONTEXT(rCA)&& NOT_ISNUMBER(rCA))||rCA ===""))
{
  clDC = 0;
}
else if(rCA == 1)
{
  clDC = 1;
}
else if(rCA == 2)
{
  clDC = 2;
}
else if(rCA == 3)
{
  clDC = 3;
}
else if(rCA == 4)
{
  clDC = 4;
}
else
{
  clDC = 0;
}

var clDD = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!CA58),NOT(ISNUMBER('Raw data'!CA58))), 'Raw data'!CA58=""),-17,DC58)
if(((ISNONTEXT(rCA)&& NOT_ISNUMBER(rCA))||rCA ===""))
{
  clDD = -17
}
else 
{
  clDD = clDC;
}

var clDE = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!CB58),NOT(ISNUMBER('Raw data'!CB58))),'Raw data'!CB58=""),0,
//IF('Raw data'!CB58=1,1,
//IF('Raw data'!CB58=2,2,
//IF('Raw data'!CB58=3,3,
//IF('Raw data'!CB58=4,4,0)))))
if(((ISNONTEXT(rCB)&& NOT_ISNUMBER(rCB))||rCB ===""))
{
  clDE = 0;
}
else if(rCB == 1)
{
  clDE = 1;
}
else if(rCB == 2)
{
  clDE = 2;
}
else if(rCB == 3)
{
  clDE = 3;
}
else if(rCB == 4)
{
  clDE = 4;
}
else
{
  clDE = 0;
}

var clDF = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!CB58),NOT(ISNUMBER('Raw data'!CB58))), 'Raw data'!CB58=""),-17,DE58)
if(((ISNONTEXT(rCB)&& NOT_ISNUMBER(rCB))||rCB ===""))
{
  clDF = -17;
}
else
{
  clDF = clDE;
}

var clDG = "";
//=IF('Raw data'!CC58="Yes",1,0)
if(rCC == "Yes")
{
  clDG = 1;
}
else
{
  clDG = 0;
}

var clDH = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile>=1,GH58=3),4,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile>=1,GH58=2),3,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile>=1,GH58=1),1,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile>=1,GH58<1),0,
//IF(OR(AND(ISNONTEXT('Raw data'!CD58),NOT(ISNUMBER('Raw data'!CD58))),'Raw data'!CD58=""),0,
//IF('Raw data'!CD58=1,1,
//IF('Raw data'!CD58=2,2,
//IF('Raw data'!CD58=3,3,
//IF('Raw data'!CD58=4,4,0)))))))))
if(ModelType >= 2 && OUT_DSTNeedsProfile >= 1 && clGH == 3)
{
  clDH = 4;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile >= 1 && clGH == 2)
{
  clDH = 3;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile >= 1 && clGH == 1)
{
  clDH = 1;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile >= 1 && clGH < 1)
{
  clDH = 0;
}
else if (((ISNONTEXT(rCD)&& NOT_ISNUMBER(rCD))||rCD ===""))
{
  clDH = 0;
}
else if(rCD == 1)
{
  clDH = 1;
}
else if(rCD == 2)
{
  clDH = 2;
}
else if(rCD == 3)
{
  clDH = 3;
}
else if(rCD == 4)
{
  clDH = 4;
}
else 
{
  clDH = 0;
}

var clDI = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CD58),NOT(ISNUMBER('Raw data'!CD58))),'Raw data'!CD58=""),-17,
//IF('Raw data'!CD58="n/a",-3,DH58))
if(((ISNONTEXT(rCD)&& NOT_ISNUMBER(rCD))||rCD ===""))
{
  clDI = -17;
}
else if(rCD == "n/a")
{
  clDI = -3;
}
else
{
  clDI = clDH;
}

var clDJ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CE58),NOT(ISNUMBER('Raw data'!CE58))),'Raw data'!CE58=""),0,VLOOKUP('Raw data'!CE58,Safety_Waking,2,FALSE))
if(((ISNONTEXT(rCE)&& NOT_ISNUMBER(rCE))||rCE ===""))
{
  clDJ = 0;
}
else
{
  clDJ = VLOOKUP(rCE,Safety_Waking,2,FALSE)
}

var clDK = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CF58),NOT(ISNUMBER('Raw data'!CF58))),'Raw data'!CF58=""),0,VLOOKUP('Raw data'!CF58,Night_freq,2,FALSE))
if(((ISNONTEXT(rCF)&& NOT_ISNUMBER(rCF))||rCF ===""))
{
  clDK = 0;
}
else 
{
  clDK = VLOOKUP(rCF,Night_freq,2,FALSE);
}

var clDL = ""
//=IF('Raw data'!CG58=0,0,
//IF('Raw data'!CG58=1,1,
//IF('Raw data'!CG58=2,2,
//IF('Raw data'!CG58=3,3,
//IF('Raw data'!CG58=4,4,0)))))
if(rCG == 0)
{
  clDL = 0;
}
else if(rCG == 1)
{
  clDL = 1;
}
else if(rCG == 2)
{
  clDL = 2;
}
else if(rCG == 3)
{
  clDL = 3;
}
else if(rCG == 4)
{
  clDL = 4;
}
else 
{
  clDL = 0;
}

var clDM = "";
//=IF('Raw data'!CH58="NotReq",0,
//IF('Raw data'!CH58="n/a",0,
//IF('Raw data'!CH58="FullEff",1,
//IF('Raw data'!CH58="PartEff",2,
//IF('Raw data'!CH58="NotEff",3,"")))))
if(rCH == "NotReq")
{
  clDM = 0;
}
else if(rCH == "n/a")
{
  clDM = 0;
}
else if(rCH == "FullEff")
{
  clDM = 1;
}
else if(rCH == "PartEff")
{
  clDM = 2;
}
else if(rCH == "NotEff")
{
  clDM = 3;
}
else
{
  clDM = "";
}

var clDN = "";
//=IF('Raw data'!CI58="Yes",1,
//IF('Raw data'!CI58="No",0,-17))
if(rCI == "Yes")
{
  clDN = 1;
}
else if(rCI == "No")
{
  clDN = 0;
}
else 
{
  clDN = -17;
}

var clDO = "";
//=IF('Raw data'!CJ58="Yes",1,
//IF('Raw data'!CJ58="No",0,-17))
if(rCJ == "Yes")
{
  clDO = 1;
}
else if(rCJ == "No")
{
  clDO = 0;
}
else
{
  clDO = -17;
}

var clDP = ""
//=IF('Raw data'!CK58="Yes",1,
//IF('Raw data'!CK58="No",0,-17))
if(rCK == "Yes")
{
  clDP = 1;
}
else if(rCK == "No")
{
  clDP = 0;
}
else
{
  clDP = -17;
}

var clDQ = ";"
//=IF('Raw data'!CL58="Yes",1,
//IF('Raw data'!CL58="No",0,-17))
if(rCL == "Yes")
{
  clDQ = 1;
}
else if(rCL == "No")
{
  clDQ = 0;
}
else
{
  clDQ = -17;
}

var clDR = "";
//=IF('Raw data'!CM58="Yes",1,
//IF('Raw data'!CM58="No",0,-17))
if(rCM == "Yes")
{
  clDR = 1;
}
else if(rCM == "No")
{
  clDR = 0;
}
else
{
  clDR = -17
}

var clDS = "";
//=IF('Raw data'!CN58="Yes",1,
//IF('Raw data'!CN58="No",0,-17))
if(rCN == "Yes")
{
  clDS = 1;
}
else if(rCN == "No")
{
  clDS = 0;
}
else
{
  clDS = -17;
}

var clDT = "";
//=IF('Raw data'!CO58="Yes",1,
//IF('Raw data'!CO58="No",0,-17))
if(rCO == "Yes")
{
  clDT = 1;
}
else if(rCO == "No")
{
  clDT = 0;
}
else
{
  clDT = -17;
}

var clDU = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CP58),NOT(ISNUMBER('Raw data'!CP58))),'Raw data'!CP58=""),0,
//IF('Raw data'!CP58="NoNeed","NoNeed",
//IF(OR('Raw data'!CM58="Yes",'Raw data'!CN58="Yes",'Raw data'!CO58="Yes"),'Raw data'!CP58,0)))
if(((ISNONTEXT(rCP)&& NOT_ISNUMBER(rCP))||rCP ===""))
{
  clDU = 0;
}
else if(rCP == "NoNeed")
{
  clDU = "NoNeed";
}
else if(rCM == "Yes" || rCN == "Yes" || rCO == "Yes" )
{
  clDU = rCP;
}
else
{
  clDU = 0;
}

var clDV = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CP58),NOT(ISNUMBER('Raw data'!CP58))),'Raw data'!CP58=""),0,
//IF('Raw data'!CP58="NoNeed","NoNeed",
//IF(OR(AND(AV58>=2,'Raw data'!CI58="No"),AND(OR(BA58>=2,BC58>=2),'Raw data'!CJ58="No"),AND(BI58>=2,'Raw data'!CK58="No")),0,
//IF(OR(AND(AV58>=2,'Raw data'!CI58="Yes"),AND(OR(BA58>=2,BC58>=2),'Raw data'!CJ58="Yes"),AND(BI58>=2,'Raw data'!CK58="Yes")),'Raw data'!CP58,0))))
if(((ISNONTEXT(rCP)&& NOT_ISNUMBER(rCP))||rCP ===""))
{
  clDV = 0;
}
else if(rCP == "NoNeed")
{
  clDV = "NoNeed"
}
else if((clAV >= 2 && rCI == "No") || ((clBA >= 2 || clBC > 2) && rCJ == "No") || (clBI >2 && rCK == "No"))
{
  clDV = 0;
}
else if((clAV >= 2 && rCI == "Yes") || ((clBA >= 2 || clBC >= 2) && rCJ == "Yes") || (clBI >2 && rCK == "Yes"))   
{
  clDV = rCP;
}
else
{
  clDV = 0;
}

var clDW = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CP58),NOT(ISNUMBER('Raw data'!CP58))),'Raw data'!CP58=""),0,
//IF('Raw data'!CP58="NoNeed","NoNeed",
//IF('Raw data'!CL58="Yes",'Raw data'!CP58,0)))
if(((ISNONTEXT(rCP)&& NOT_ISNUMBER(rCP))||rCP ===""))
{
  clDW = 0;
}
else if(rCP == "NoNeed")
{
  clDW = "NoNeed"
}
else if(rCL == "Yes")
{
  clDW = rCP;
}
else
{
  clDW = 0;
}

var clDX = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CQ58),NOT(ISNUMBER('Raw data'!CQ58))),'Raw data'!CQ58=""),0,
//IF('Raw data'!CQ58="NoNeed","NoNeed",
//IF(OR('Raw data'!CM58="Yes",'Raw data'!CN58="Yes",'Raw data'!CO58="Yes"),'Raw data'!CQ58,0)))
if(((ISNONTEXT(rCQ)&& NOT_ISNUMBER(rCQ))||rCQ ===""))
{
  clDX = 0;
}
else if(rCQ == "NoNeed")
{
  clDX = "NoNeed";
}
else if(rCM == "Yes" || rCN == "Yes" || rCO || "Yes")
{
  clDX = rCQ;
}
else 
{
  clDX = 0;
}

var clDY = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CQ58),NOT(ISNUMBER('Raw data'!CQ58))),'Raw data'!CQ58=""),0,
//IF('Raw data'!CQ58="NoNeed","NoNeed",
//IF(AND(BI58=0,OR('Clean data'!BL58>=0.05,'Clean data'!BF58>0.05),'Clean data'!BL58<=7,'Clean data'!BF58<=7,NOT(AND(Scores!AE58>=1.5,Scores!AF58>=1.5)),'Raw data'!CP58=7,'Raw data'!CR58=7,OR('Raw data'!CI58="Yes",'Raw data'!CJ58="Yes",'Raw data'!CK58="Yes")),'Raw data'!CQ58,
//IF(OR(AND(BI58>=2,'Raw data'!CK58="No")),0,
//IF(OR(AND(BI58>=2,'Raw data'!CK58="Yes")),'Raw data'!CQ58,0)))))

if(((ISNONTEXT(rCQ)&& NOT_ISNUMBER(rCQ))||rCQ ===""))
{
  clDY = 0;
}
else if(rCQ == "NoNeed")
{
  clDY = "NoNeed";
}
else if(((clBI==0&&(clBL>=0.05||clBF>0.05)&&clBF<=7&&clBF<=7&&((scAE<1.5||scAF<1.5))&&rCP==7&&rCR==7&&(rCI=="Yes"||rCJ=="Yes"||rCK=="Yes"))))
{
  clDY = rCQ;
}
else if(clBI >= 2 && rCK == "No")
{
  clDY = 0;
}
else if(clBI >= 2 && rCK == "Yes")
{
  clDY = rCQ;
}
else
{
  clDY = 0;
}

var clDZ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CQ58),NOT(ISNUMBER('Raw data'!CQ58))),'Raw data'!CQ58=""),0,
//IF('Raw data'!CQ58="NoNeed","NoNeed",
//IF('Raw data'!CL58="Yes",'Raw data'!CQ58,0)))
if(((ISNONTEXT(rCQ)&& NOT_ISNUMBER(rCQ))||rCQ ===""))
{
  clDZ = 0;
}
else if(rCQ == "NoNeed")
{
  clDZ = "NoNeed";
}
else if(rCL == "Yes")
{
  clDZ = rCQ;
}
else
{
  clDZ = 0;
}

var clEA = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CR58),NOT(ISNUMBER('Raw data'!CR58))),'Raw data'!CR58=""),0,
//IF('Raw data'!CR58="NoNeed","NoNeed",
//IF(OR('Raw data'!CM58="Yes",'Raw data'!CN58="Yes",'Raw data'!CO58="Yes"),'Raw data'!CR58,0)))
if(((ISNONTEXT(rCR)&& NOT_ISNUMBER(rCR))||rCR ===""))
{
  clEA = 0;
}
else if(rCR == "NoNeed")
{
  clEA = "NoNeed";
}
else if(rCM == "Yes" || rCN == "Yes" || rCO == "Yes")
{
  clEA = rCR;
}
else
{
  clEA = 0;
}


var clEB = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CR58),NOT(ISNUMBER('Raw data'!CR58))),'Raw data'!CR58=""),0,
//IF('Raw data'!CR58="NoNeed","NoNeed",
//IF(OR(AND(AX58>=2,'Raw data'!CI58="No"),AND(BI58>=2,'Raw data'!CK58="No")),0,
//IF(OR(AND(AX58>=2,'Raw data'!CI58="Yes"),AND(OR(BA58>=2,BC58>=2),'Raw data'!CJ58="Yes"),AND(BI58>=2,'Raw data'!CK58="Yes")),'Raw data'!CR58,0))))
if(((ISNONTEXT(rCR)&& NOT_ISNUMBER(rCR))||rCR ===""))
{
  clEB = 0;
}
else if(rCR == "NoNeed")
{
  clEB = "NoNeed"
}
else if((clAX >= 2 && rCI == "No") || (clBI >= 2 && rCK == "No"))
{
  clEB = 0;
}
else if((clAX >= 2 && rCI == "Yes") ||  (clBA >= 2 || clBC >= 2) && rCJ == "Yes" || (clBI >= 2 && rCK == "Yes"))
{
clEB = rCR;
}
else
{
  clEB = 0;
}















var clEC = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CR58),NOT(ISNUMBER('Raw data'!CR58))),'Raw data'!CR58=""),0,
//IF('Raw data'!CR58="NoNeed","NoNeed",
//IF('Raw data'!CL58="Yes",'Raw data'!CR58,0)))
if(((ISNONTEXT(rCR)&& NOT_ISNUMBER(rCR))||rCR ===""))
{
  clEC = 0;
}
else if(rCR == "NoNeed")
{
  clEC = "NoNeed";
}
else if(rCL == "Yes")
{
  clEC = rCR;
}
else
{
  clEC = 0;
}


var clED = "";
//=IF(OR(AND(ISNONTEXT(DU58),NOT(ISNUMBER(DU58))),DU58=""), 0, VLOOKUP(DU58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clDU)&& NOT_ISNUMBER(clDU))||clDU ===""))
{
  clED = 0;
}
else
{
  clED = VLOOKUP(clDU, Informal_support, 2, FALSE)
}

var clEE = "";
//IF(OR(AND(ISNONTEXT(DV58),NOT(ISNUMBER(DV58))),DV58=""), 0, VLOOKUP('Clean data'!DV58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clDV)&& NOT_ISNUMBER(clDV))||clDV ===""))
{
  clEE = 0;
}
else
{
  clEE = VLOOKUP(clDV, Informal_support, 2, FALSE)
}

var clEF = "";
//=IF(OR(AND(ISNONTEXT(DW58),NOT(ISNUMBER(DW58))),DW58=""), 0, VLOOKUP('Clean data'!DW58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clDW)&& NOT_ISNUMBER(clDW))||clDW ===""))
{
  clEF = 0;
}
else
{
  clEF =  VLOOKUP(clDW, Informal_support, 2, FALSE)
}

var clEG = "";
//=IF(OR(AND(ISNONTEXT(DW58),NOT(ISNUMBER(DW58))),DW58=""), 0, VLOOKUP(DW58, Informal_support, 3, FALSE))
if(((ISNONTEXT(clDW)&& NOT_ISNUMBER(clDW))||clDW ===""))
{
  clEG = 0;
}
else
{
  clEG = VLOOKUP(clDW, Informal_support, 3, FALSE)
}

var clEH = "";
//=IF(OR(AND(ISNONTEXT(DX58),NOT(ISNUMBER(DX58))),DX58=""), 0, VLOOKUP(DX58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clDX)&& NOT_ISNUMBER(clDX))||clDX ===""))
{
  clEH = 0;
}
else
{
  clEH = VLOOKUP(clDX, Informal_support, 2, FALSE)
}

var clEI = "";
//=IF(OR(AND(ISNONTEXT(DY58),NOT(ISNUMBER(DY58))),DY58=""), 0, VLOOKUP(DY58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clDY)&& NOT_ISNUMBER(clDY))||clDY ===""))
{
  clEI = 0;
}
else
{
  clEI = VLOOKUP(clDY, Informal_support, 2, FALSE)
}

var clEJ = "";
//=IF(OR(AND(ISNONTEXT(DZ58),NOT(ISNUMBER(DZ58))),DZ58=""), 0, VLOOKUP(DZ58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clDZ)&& NOT_ISNUMBER(clDZ))||clDZ ===""))
{
  clEJ = 0;
}
else
{
  clEJ = VLOOKUP(clDZ, Informal_support, 2, FALSE)
}

var clEK = "";
//=IF(OR(AND(ISNONTEXT(DZ58),NOT(ISNUMBER(DZ58))),DZ58=""), 0, VLOOKUP(DZ58, Informal_support, 3, FALSE))
if(((ISNONTEXT(clDZ)&& NOT_ISNUMBER(clDZ))||clDZ ===""))
{
  clEK = 0;
}
else 
{
  clEK =  VLOOKUP(clDZ, Informal_support, 3, FALSE)
}

var clEL = "";
//=IF(OR(AND(ISNONTEXT(EA58),NOT(ISNUMBER(EA58))),EA58=""), 0, VLOOKUP(EA58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clEA)&& NOT_ISNUMBER(clEA))||clEA ===""))
{
  clEL = 0;
}
else
{
  clEL =  VLOOKUP(clEA, Informal_support, 2, FALSE)
}

var clEM = "";
//=IF(OR(AND(ISNONTEXT(EB58),NOT(ISNUMBER(EB58))),EB58=""), 0, VLOOKUP(EB58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clEB)&& NOT_ISNUMBER(clEB))||clEB ===""))
{
  clEM = 0;
}
else
{
  clEM = VLOOKUP(clEB, Informal_support, 2, FALSE)
}

var clEN = "";
//=IF(OR(AND(ISNONTEXT(EC58),NOT(ISNUMBER(EC58))),EC58=""), 0, VLOOKUP(EC58, Informal_support, 2, FALSE))
if(((ISNONTEXT(clEC)&& NOT_ISNUMBER(clEC))||clEC ===""))
{
  clEN = 0;
}
else
{
  clEN = VLOOKUP(clEC, Informal_support, 2, FALSE)
}

var clEO = "";
//=IF(OR(AND(ISNONTEXT(EC58),NOT(ISNUMBER(EC58))),EC58=""), 0, VLOOKUP(EC58, Informal_support, 3, FALSE))
if(((ISNONTEXT(clEC)&& NOT_ISNUMBER(clEC))||clEC ===""))
{
  clEO = 0;
}
else
{
  clEO = VLOOKUP(clEC, Informal_support, 3, FALSE)
}

var clEP = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CS58),NOT(ISNUMBER('Raw data'!CS58))),'Raw data'!CS58=""), 0, VLOOKUP('Raw data'!CS58, Informal_support, 2, FALSE))
if(((ISNONTEXT(rCS)&& NOT_ISNUMBER(rCS))||rCS ===""))
{
  clEP = 0;
}
else
{
  clEP = VLOOKUP(rCS, Informal_support, 2, FALSE)
}

var clEQ = "";
//=IF('Raw data'!CS58="NoNeed", 0.25, 0)
if(rCS == "NoNeed")
{
  clEQ = 0.25;
}
else
{
  clEQ = 0;
}

var  clER = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CT58),NOT(ISNUMBER('Raw data'!CT58))),'Raw data'!CT58=""), 0, VLOOKUP('Raw data'!CT58, Informal_Support_DomTasks, 2, FALSE))
if(((ISNONTEXT(rCT)&& NOT_ISNUMBER(rCT))||rCT ===""))
{
  clER = 0;
}
else
{
  clER = VLOOKUP(rCT, Informal_Support_DomTasks, 2, FALSE)
}

var clES = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CU58),NOT(ISNUMBER('Raw data'!CU58))),'Raw data'!CU58=""), 0, VLOOKUP('Raw data'!CU58, Informal_Support_DomTasks, 2, FALSE))
if(((ISNONTEXT(rCU)&& NOT_ISNUMBER(rCU))||rCU ===""))
{
  clES = 0;
}
else
{
  clES = VLOOKUP(rCU, Informal_Support_DomTasks, 2, FALSE)
}

var clET = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CV58),NOT(ISNUMBER('Raw data'!CV58))),'Raw data'!CV58=""), 0, VLOOKUP('Raw data'!CV58, Informal_Support_DomTasks, 2, FALSE))
if(((ISNONTEXT(rCV)&& NOT_ISNUMBER(rCV))||rCV ===""))
{
  clET = 0;
}
else
{
  clET = VLOOKUP(rCV, Informal_Support_DomTasks, 2, FALSE)
}

var clEU = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CW58),NOT(ISNUMBER('Raw data'!CW58))),'Raw data'!CW58=""), 0, VLOOKUP('Raw data'!CW58, Informal_Support_DomTasks, 2, FALSE))
if(((ISNONTEXT(rCW)&& NOT_ISNUMBER(rCW))||rCW ===""))
{
  clEU = 0;
}
else
{
  clEU =  VLOOKUP(rCW, Informal_Support_DomTasks, 2, FALSE)
}

var clEV = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CX58),NOT(ISNUMBER('Raw data'!CX58))),'Raw data'!CX58=""), 0, VLOOKUP('Raw data'!CX58, Informal_Support_Social, 2, FALSE))
if(((ISNONTEXT(rCX)&& NOT_ISNUMBER(rCX))||rCX ===""))
{
  clEV = 0;
}
else
{
  clEV = VLOOKUP(rCX, Informal_Support_Social, 2, FALSE)
}

var clEW = "";
//=IF('Raw data'!CX58="NoNeed", 0.25, 0)
if(rCX == "NoNeed")
{
  clEW = 0.25;
}
else
{
  clEW = 0;
}

var clEX = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CY58),NOT(ISNUMBER('Raw data'!CY58))),'Raw data'!CY58=""), 0, VLOOKUP('Raw data'!CY58, Informal_Support_Social, 2, FALSE))
if(((ISNONTEXT(rCY)&& NOT_ISNUMBER(rCY))||rCY ===""))
{
  clEX = 0;
}
else
{
  clEX =  VLOOKUP(rCY, Informal_Support_Social, 2, FALSE)
}

var clEY = "";
//=IF('Raw data'!CY58="NoNeed", 0.25, 0)
if(rCY == "NoNeed")
{
  clEY = 0.25;
}
else
{
  clEY = 0;
}

var clEZ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CZ58),NOT(ISNUMBER('Raw data'!CZ58))),'Raw data'!CZ58=""), 0, VLOOKUP('Raw data'!CZ58, Informal_Support_Emotional, 2, FALSE))
if(((ISNONTEXT(rCZ)&& NOT_ISNUMBER(rCZ))||rCZ ===""))
{
  clEZ = 0;
}
else
{
  clEZ = VLOOKUP(rCZ, Informal_Support_Emotional, 2, FALSE)
}

var clFA = "";
//=IF('Raw data'!CZ58="NoNeed", 0.25, 0)
if(rCZ == "NoNeed")
{
  clFA = 0.25;
}
else
{
  clFA = 0;
}

var clFB = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DA58),NOT(ISNUMBER('Raw data'!DA58))),'Raw data'!DA58=""), 0, VLOOKUP('Raw data'!DA58, Informal_Support_Emotional, 2, FALSE))
if(((ISNONTEXT(rDA)&& NOT_ISNUMBER(rDA))||rDA ===""))
{
  clFB = 0;
}
else
{
  clFB =  VLOOKUP(rDA, Informal_Support_Emotional, 2, FALSE)
}

var clFC = "";
//=IF('Raw data'!DA58="NoNeed", 0.25, 0)
if(rDA == "NoNeed")
{
  clFC = 0.25;
}
else
{
  clFC = 0;
}

var clFD = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DB58),NOT(ISNUMBER('Raw data'!DB58))),'Raw data'!DB58=""), 0, VLOOKUP('Raw data'!DB58, Informal_safety, 2, FALSE))
if(((ISNONTEXT(rDB)&& NOT_ISNUMBER(rDB))||rDB ===""))
{
  clFD = 0;
}
else
{
  clFD =  VLOOKUP(rDB, Informal_safety, 2, FALSE)
}

var clFE = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DB58),NOT(ISNUMBER('Raw data'!DB58))),'Raw data'!DB58=""),-17,
//IF('Raw data'!DB58="NoConstant",0.25,
//IF('Raw data'!DB58="None",1,0)))
if(((ISNONTEXT(rDB)&& NOT_ISNUMBER(rDB))||rDB ===""))
{
  clFE = -17;
}
else if(rDB == "NoConstant")
{
  clFE = 0.25;
}
else if(rDB == "None")
{
  clFE = 1;
}
else
{
  clFE = 0;
}

var clFF = "";
//=IF(OR('Raw data'!DC58="",'Raw data'!DC58="n/a"),0,'Raw data'!DC58)
if(rDC == "" || rDC == "n/a")
{
  clFF = 0;
}
else
{
  clFF = rDC;
}

var clFG = "";
//=IF('Raw data'!DD58="Yes", 1, 0)
if(rDD == "Yes")
{
  clFG = 1;
}
else
{
  clFG = 0;
}

var clFH = "";
//=IF('Raw data'!DD58="No", 1, 0)
if(rDD == "No")
{
  clFH = 1;
}
else
{
  clFH = 0;
}

var clFI = "";
//=IF('Raw data'!DE58="Yes", 1, 
//IF('Raw data'!DE58="No", 0, ""))
if(rDE == "Yes")
{
  clFI = 1;
}
else if(rDE == "No")
{
  clFI = 0;
}
else
{
  clFI = "";
}

var clFJ = "";
//=IF('Raw data'!DF58="Yes", 1, 
//IF('Raw data'!DF58="No", 0, ""))
if(rDF == "Yes")
{
  clFJ = 1;
}
else if(rDF == "No")
{
  clFJ = 0;
}
else
{
  clFJ = "";
}

clFK = "";
//=IF('Raw data'!DG58="Yes", 1, 
//IF('Raw data'!DG58="No", 0, ""))
if(rDG == "Yes")
{
  clFK = 1;
}
else if(rDG ==  "No")
{
  clFK = 0;
}
else
{
  clFK = "";
}

clFL = "";
//=IF('Raw data'!DH58="Yes", 1, 
//IF('Raw data'!DH58="No", 0, ""))
if(rDH == "Yes")
{
  clFL = 1;
}
else if(rDH == "No")
{
  clFL = 0;
}
else
{
  clFL = "";
}

var clFM = "";
//=IF('Raw data'!DI58="Yes", 1, 
//IF('Raw data'!DI58="No", 0, ""))
if(rDI == "Yes")
{
  clFM = 1;
}
else if(rDI == "No")
{
  clFM = 0;
}
else
{
  clFM = "";
}

var clFN = "";
//=IF('Raw data'!DJ58="Yes", 1,
// IF('Raw data'!DJ58="No", 0, ""))
if(rDJ == "Yes")
{
  clFN = 1;
}
else if(rDJ == "No")
{
  clFN = 0;
}
else
{
  clFN = "";
}


var clFO = "";
//=IF('Raw data'!DK58="Yes", 1, 
//IF('Raw data'!DK58="No", 0, ""))
if(rDK == "Yes")
{
  clFO = 1;
}
else if(rDK == "No")
{
  clFO = 0;
}
else
{
  clFO = "";
}

var clFP = "";
//=IF('Raw data'!DL58="Yes", 1,
// IF('Raw data'!DL58="No", 0, ""))
if(rDL = "Yes")
{
  clFP = 1;
}
else if(rDL == "No")
{
  clFP = 0;
}
else
{
  clFP = "";
}

var clFQ = "";
//=IF('Raw data'!DM58="Yes", 1,
// IF('Raw data'!DM58="No", 0, ""))
if(rDM == "Yes")
{
  clFQ = 1;
}
else if(rDM == "No")
{
  clFQ = 0;
}
else
{
  clFQ = "";
}

var clFR = "";
//=IF('Raw data'!DN58="Yes", 1, 
//IF('Raw data'!DN58="No", 0, ""))
if(rDN == "Yes")
{
  clFR = 1;
}
else if(rDN == "No")
{
  clFR = 0;
}
else
{
  clFR = "";
}

var clFS = "";
//=IF('Raw data'!DO58="Yes", 1, 
//IF('Raw data'!DO58="No", 0, ""))
if(rDO == "Yes")
{
clFS = 1;
}
else if(rDO == "No")
{
  clFS = 0;
}
else
{
  clFS = "";
}

var clFT = "";
//=IF('Raw data'!DP58="Yes",1,
//IF(OR('Raw data'!DP58="No",'Raw data'!DP58="n/a"),0,""))
if(rDP = "Yes")
{
  clFT = 1;
}
else if(rDP == "No" || rDP == "n/a")
{
  clFT = 0;
}
else
{
  clFT = "";
}

var clFU = "";
//=IF(AND(ModelType>2,'Raw data'!DQ58=""),2,VLOOKUP('Raw data'!DQ58,Primary_support_reasons,2,FALSE))
if(ModelType > 2 && rDQ == "")
{
  clFU = 2;
}
else
{
  clFU = VLOOKUP(rDQ,Primary_support_reasons,2,FALSE)
}

var clFV = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DQ58),NOT(ISNUMBER('Raw data'!DQ58))),'Raw data'!DQ58=""),-17,0)
if(((ISNONTEXT(rDQ)&& NOT_ISNUMBER(rDQ))||rDQ ===""))
{
  clFV = -17;
}
else
{
  clFV = 0;
}

var clFW = "";
//=VLOOKUP('Raw data'!DR58,ALS,2,FALSE)
{
  clFW = VLOOKUP(rDR,ALS,2,FALSE)
}

var clFX = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DR58),NOT(ISNUMBER('Raw data'!DR58))),'Raw data'!DR58=""),-17,VLOOKUP('Raw data'!DR58,ALS,3,FALSE))
if(((ISNONTEXT(rDR)&& NOT_ISNUMBER(rDR))||rDR ===""))
{
  clFX = -17;
}
else
{
  clFX = VLOOKUP(rDR,ALS,3,FALSE)
}

var clFY = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DS58),NOT(ISNUMBER('Raw data'!DS58))),'Raw data'!DS58=""), 0, VLOOKUP('Raw data'!DS58,Num_Sharing,2, FALSE))
if(((ISNONTEXT(rDS)&& NOT_ISNUMBER(rDS))||rDS ===""))
{
  clFY = 0;
}
else
{
  clFY =  VLOOKUP(rDS,Num_Sharing,2, FALSE)
}

var clFZ = "";
//=IF('Raw data'!DT58="Yes",1,
//IF(OR('Raw data'!DT58="No",'Raw data'!DT58="n/a"),0,""))
if(rDT == "Yes")
{
  clFZ = 1;
}
else if(rDT == "No" || rDT == "n/a")
{
  clFZ = 0;
}
else
{
  clFZ = "";
}

var clGA = "";
//=IF('Raw data'!DU58="Yes",1,
//IF(OR('Raw data'!DU58="No",'Raw data'!DU58="n/k"),0,0))
if(rDU == "Yes")
{
  clGA = 1;
}
else if(rDU == "No" || rDU == "n/k")
{
  clGA = 0;
}
else
{
  clGA = 0;
}

var clGB = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DV58),NOT(ISNUMBER('Raw data'!DV58))),'Raw data'!DV58=""), 0, VLOOKUP('Raw data'!DV58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rDV)&& NOT_ISNUMBER(rDV))||rDV ===""))
{
  clGB = 0;
}
else
{
  clGB =  VLOOKUP(rDV,DST_Levels,2, FALSE)
}

var clGC = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DW58),NOT(ISNUMBER('Raw data'!DW58))),'Raw data'!DW58=""), 0, VLOOKUP('Raw data'!DW58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rDW)&& NOT_ISNUMBER(rDW))||rDW ===""))
{
  clGC = 0;
}
else
{
  clGC =  VLOOKUP(rDW,DST_Levels,2, FALSE)
}

var clGD = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DX58),NOT(ISNUMBER('Raw data'!DX58))),'Raw data'!DX58=""), 0, VLOOKUP('Raw data'!DX58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rDX)&& NOT_ISNUMBER(rDX))||rDX ===""))
{
  clGD = 0;
}
else
{
  clGD =  VLOOKUP(rDX,DST_Levels,2, FALSE)
}

var clGE = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DY58),NOT(ISNUMBER('Raw data'!DY58))),'Raw data'!DY58=""), 0, VLOOKUP('Raw data'!DY58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rDY)&& NOT_ISNUMBER(rDY))||rDY ===""))
{
  clGE = 0;
}
else
{
  clGE = VLOOKUP(rDY,DST_Levels,2, FALSE)
}

var clGF = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DZ58),NOT(ISNUMBER('Raw data'!DZ58))),'Raw data'!DZ58=""), 0, VLOOKUP('Raw data'!DZ58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rDZ)&& NOT_ISNUMBER(rDZ))||rDZ ===""))
{
  clGF = 0;
}
else
{
  clGF =  VLOOKUP(rDZ,DST_Levels,2, FALSE)
}

var clGG = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!EA58),NOT(ISNUMBER('Raw data'!EA58))),'Raw data'!EA58=""), 0, VLOOKUP('Raw data'!EA58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rEA)&& NOT_ISNUMBER(rEA))||rEA ===""))
{
  clGG = 0;
}
else
{
  clGG = VLOOKUP(rEA,DST_Levels,2, FALSE)
}

var clGH = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!EB58),NOT(ISNUMBER('Raw data'!EB58))),'Raw data'!EB58=""), 0, VLOOKUP('Raw data'!EB58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rEB)&& NOT_ISNUMBER(rEB))||rEB ===""))
{
  clGH = 0;
}
else
{
  clGH =  VLOOKUP(rEB,DST_Levels,2, FALSE)
}

var clGI = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!EC58),NOT(ISNUMBER('Raw data'!EC58))),'Raw data'!EC58=""), 0, VLOOKUP('Raw data'!EC58,DST_Levels_Cog,2, FALSE))
if(((ISNONTEXT(rEC)&& NOT_ISNUMBER(rEC))||rEC ===""))
{
  clGI = 0;
}
else
{
  clGI =  VLOOKUP(rEC,DST_Levels_Cog,2, FALSE)
}

var clGJ = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!ED58),NOT(ISNUMBER('Raw data'!ED58))),'Raw data'!ED58=""), 0, VLOOKUP('Raw data'!ED58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rEC)&& NOT_ISNUMBER(rEC))||rEC ===""))
{
  clGJ = 0;
}
else
{
  clGJ = VLOOKUP(rED,DST_Levels,2, FALSE)
}

var clGK = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!EE58),NOT(ISNUMBER('Raw data'!EE58))),'Raw data'!EE58=""), 0, VLOOKUP('Raw data'!EE58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rEE)&& NOT_ISNUMBER(rEE))||rEE ===""))
{
  clGK = 0;
}
else
{
  clGK = VLOOKUP(rEE,DST_Levels,2, FALSE)
}

var clGL = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!EF58),NOT(ISNUMBER('Raw data'!EF58))),'Raw data'!EF58=""), 0, VLOOKUP('Raw data'!EF58,DST_Levels_ASC,2, FALSE))
if(((ISNONTEXT(rEF)&& NOT_ISNUMBER(rEF))||rEF ===""))
{
  clGL = 0;
}
else
{
  clGL = VLOOKUP(rEF,DST_Levels_ASC,2, FALSE)
}

var clGM = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!EG58),NOT(ISNUMBER('Raw data'!EG58))),'Raw data'!EG58=""), 0, VLOOKUP('Raw data'!EG58,DST_Levels,2, FALSE))
if(((ISNONTEXT(rEG)&& NOT_ISNUMBER(rEG))||rEG ===""))
{
  clGM = 0;
}
else
{
  clGM =  VLOOKUP(rEG,DST_Levels,2, FALSE)
}

var clGN = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!EH58),NOT(ISNUMBER('Raw data'!EH58))),'Raw data'!EH58=""),0,VLOOKUP('Raw data'!EH58,Age_Bands,2,FALSE))
if(((ISNONTEXT(rEH)&& NOT_ISNUMBER(rEH))||rEH ===""))
{
  clGN = 0;
}
else
{
  clGN = VLOOKUP(rEH,Age_Bands,2,FALSE)
}

var clGO = ";"
//=IF('Raw data'!EI58="Yes", 1, 
//IF('Raw data'!EI58="No", 0, 0))
if(rEI == "Yes")
{
  clGO = 1;
}
else if(rEI == "No")
{
  clGO = 0;
}
else
{
  clGO = 0;
}

var clGP = "";
//=IF(OR('Raw data'!EW58="No",'Raw data'!EJ58="NotDueToCaring",'Raw data'!EJ58="NoChallenge",'Raw data'!EJ58="n/a",'Raw data'!EJ58="YesLittle",'Raw data'!EJ58="YesModerate"),0,
//IF('Raw data'!EJ58="YesSignificant",1,
//IF('Raw data'!EJ58="YesSevere",1.25,0)))
if(rEW == "No" || rEJ == "NotDueToCaring" || rEJ == "NoChallenge" || rEJ == "n/a" || rEJ == "YesLittle" || rEJ == "YesModerate")
{
  clGP = 0;
}
else if(rEJ == "YesSignificant")
{
  clGP = 1;
}
else if(rEJ == "YesSevere")
{
  clGP = 1.25;
}
else
{
  clGP = 0;
}

var clGQ = "";
//=IF(OR('Raw data'!EX58="No",'Raw data'!EK58="NotDueToCaring",'Raw data'!EK58="NoChallenge",'Raw data'!EK58="n/a",'Raw data'!EK58="YesLittle",'Raw data'!EK58="YesModerate"),0,
//IF('Raw data'!EK58="YesSignificant",1,
//IF('Raw data'!EK58="YesSevere",1.25,0)))
if(rEX == "No" || rEK == "NotDueToCaring" || rEK == "NoChallenge" || rEK == "n/a" || rEK == "YesLittle" || rEK == "YesModerate")
{
  clGQ = 0;
}
else if(rEK == "YesSignificant")
{
  clGQ = 1;
}
else if(rEK == "YesSevere")
{
  clGQ = 1.25;
}
else
{
  clGQ = 0;
}

var clGR = "";
//=IF(OR('Raw data'!EY58="No",'Raw data'!EL58="NotDueToCaring",'Raw data'!EL58="NoChallenge",'Raw data'!EL58="n/a",'Raw data'!EL58="YesLittle",'Raw data'!EL58="YesModerate"),0,
//IF('Raw data'!EL58="YesSignificant",1,
//IF('Raw data'!EL58="YesSevere",1.25,0)))
if(rEY == "No" || rEL == "NotDueToCaring" || rEL == "NoChallenge" || rEL == "n/a" || rEL == "YesLittle" || rEL == "YesModerate")
{
  clGQ = 0;
}
else if(rEL == "YesSignificant")
{
  clGR = 1;
}
else if(rEL == "YesSevere")
{
  clGR = 1.25;
}
else
{
  clGR = 0;
}


var clGS = "";
//=IF(OR('Raw data'!EZ58="No",'Raw data'!EM58="NotDueToCaring",'Raw data'!EM58="NoChallenge",'Raw data'!EM58="n/a",'Raw data'!EM58="YesLittle",'Raw data'!EM58="YesModerate"),0,
//IF('Raw data'!EM58="YesSignificant",1,
//IF('Raw data'!EM58="YesSevere",1.25,0)))
if(rEZ == "No" || rEM == "NotDueToCaring" || rEM == "NoChallenge" || rEM== "n/a" || rEM == "YesLittle" || rEM == "YesModerate")
{
  clGS = 0;
}
else if(rEM == "YesSignificant")
{
  clGS = 1;
}
else if(rEM == "YesSevere")
{
  clGS = 1.25;
}
else
{
  clGS = 0;
}

var clGT = "";
//=IF(OR('Raw data'!FA58="No",'Raw data'!EN58="NotDueToCaring",'Raw data'!EN58="NoChallenge",'Raw data'!EN58="n/a",'Raw data'!EN58="YesLittle",'Raw data'!EN58="YesModerate"),0,
//IF('Raw data'!EN58="YesSignificant",1,
//IF('Raw data'!EN58="YesSevere",1.25,0)))
if(rFA == "No" || rEN == "NotDueToCaring" || rEN == "NoChallenge" || rEN == "n/a" || rEN == "YesLittle" || rEN == "YesModerate")
{
  clGT = 0;
}
else if(rEN == "YesSignificant")
{
  clGT = 1;
}
else if(rEN == "YesSevere")
{
  clGT = 1.25;
}
else
{
  clGT = 0;
}


var clGU = "";
//=IF(OR('Raw data'!FB58="No",'Raw data'!EO58="NotDueToCaring",'Raw data'!EO58="NoChallenge",'Raw data'!EO58="n/a",'Raw data'!EO58="YesLittle",'Raw data'!EO58="YesModerate"),0,
//IF('Raw data'!EO58="YesSignificant",1,
//IF('Raw data'!EO58="YesSevere",1.25,0)))
if(rFB == "No" || rEO == "NotDueToCaring" || rEO == "NoChallenge" || rEO == "n/a" || rEO == "YesLittle" || rEO == "YesModerate")
{
  clGU = 0;
}
else if(rEO == "YesSignificant")
{
  clGU = 1;
}
else if(rEO == "YesSevere")
{
  clGU = 1.25;
}
else
{
  clGU = 0;
}

var clGV = "";
//=IF(OR('Raw data'!FC58="No",'Raw data'!EP58="NotDueToCaring",'Raw data'!EP58="NoChallenge",'Raw data'!EP58="n/a",'Raw data'!EP58="YesLittle",'Raw data'!EP58="YesModerate"),0,
//IF('Raw data'!EP58="YesSignificant",1,
//IF('Raw data'!EP58="YesSevere",1.25,0)))
if(rFC == "No" || rEP == "NotDueToCaring" || rEP == "NoChallenge" || rEP == "n/a" || rEP == "YesLittle" || rEP == "YesModerate")
{
  clGV = 0;
}
else if(rEP == "YesSignificant")
{
  clGV = 1;
}
else if(rEP == "YesSevere")
{
  clGV = 1.25;
}
else
{
  clGV = 0;
}

var clGW = "";
//=IF(OR('Raw data'!FD58="No",'Raw data'!EQ58="NotDueToCaring",'Raw data'!EQ58="NoChallenge",'Raw data'!EQ58="n/a",'Raw data'!EQ58="YesLittle",'Raw data'!EQ58="YesModerate"),0,
//IF('Raw data'!EQ58="YesSignificant",1,
//IF('Raw data'!EQ58="YesSevere",1.25,0)))
if(rFD == "No" || rEQ == "NotDueToCaring" || rEQ == "NoChallenge" || rEQ == "n/a" || rEQ == "YesLittle" || rEQ == "YesModerate")
{
  clGQ = 0;
}
else if(rEQ == "YesSignificant")
{
  clGQ = 1;
}
else if(rEQ == "YesSevere")
{
  clGQ = 1.25;
}
else
{
  clGQ = 0;
}


var clGX = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!ER58),NOT(ISNUMBER('Raw data'!ER58))),'Raw data'!ER58=""), 0, VLOOKUP('Raw data'!ER58, TimeAlone, 2, FALSE))
if(((ISNONTEXT(rER)&& NOT_ISNUMBER(rER))||rER ===""))
{
  clGX = 0;
}
else
{
  clGX = VLOOKUP(rER, TimeAlone, 2, FALSE)
}

var clGY = "";
//=IF('Raw data'!ES58="Yes", 1,
// IF('Raw data'!ES58="No", 0, 0))
if(rES == "Yes")
{
  clGY = 1;
}
else if(rES = "No")
{
  clGY = 0;
}
else
{
  clGY = 0;
}

var clGZ = "";
//=IF('Raw data'!ET58=1, 1, 
//IF('Raw data'!ET58=2, 2,
// IF('Raw data'!ET58=3, 3, 
//IF('Raw data'!ET58=4, 4, 0))))
if(rET == 1)
{
  clGZ = 1;
}
else if(rET == 2)
{
  clGZ = 2;
}
else if(rET == 3)
{
  clGZ == 3;
}
else if(rET == 4)
{
  clGZ = 4;
}
else
{
  clGZ = 0;
}


var clHA = "";
//=IF('Raw data'!EU58=1, 1,
// IF('Raw data'!EU58=2, 2,
// IF('Raw data'!EU58=3, 3, 
//IF('Raw data'!EU58=4, 4, 0))))
if(rEU == 1)
{
  clHA = 1;
}
else if(rEU == 2)
{
  clHA = 2;
}
else if(rEU == 3)
{
  clHA = 3;
}
else if(rEU == 4)
{
  clHA = 4;
}
else
{
  clHA = 0;
}

var clHB = "";
//=IF('Raw data'!EV58="Yes", 1,
// IF('Raw data'!EV58="No", 0, ""))
if(rEV == "Yes")
{
  clHB = 1;
}
else if(rEV == "No")
{
  clHB = 0;
}
else
{
  clHB = "";
}

var clHC = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CP58),NOT(ISNUMBER('Raw data'!CP58))),'Raw data'!CP58=""),0,
//IF('Raw data'!CP58="NoNeed","NoNeed",
//IF(OR(AND(AV58>=2,'Raw data'!CI58="Yes"),AND(OR(BA58>=2,BC58>=2),'Raw data'!CJ58="Yes"),AND(BI58>=2,'Raw data'!CK58="Yes")),'Raw data'!CP58,
//IF(OR(AND(AV58>=2,'Raw data'!CI58="No"),AND(OR(BA58>=2,BC58>=2),'Raw data'!CJ58="No"),AND(BI58>=2,'Raw data'!CK58="No")),0,0))))
if(((ISNONTEXT(rCP)&& NOT_ISNUMBER(rCP))||rCP ===""))
{
  clHC = 0;
}
else if(rCP == "NoNeed")
{
  clHC = "NoNeed";
}
else if(clAV >= 2 || rCI == "Yes" && clBA >= 2 || clBC >= 2 || rCJ == "Yes" && clBI >= 2 && rCK == "Yes")
{
  clHC = rCP;
}
else if(clAV >= 2 || rCI == "No" && clBA >= 2 || clBC >= 2 || rCJ == "No" && clBI >= 2 && rCK == "No")
{
  clHC = 0;
}
else
{
  clHC = 0;
}


var clHD = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CR58),NOT(ISNUMBER('Raw data'!CR58))),'Raw data'!CR58=""),0,
//IF('Raw data'!CR58="NoNeed","NoNeed",
//IF(OR(AND(AX58>=2,'Raw data'!CI58="Yes"),AND(OR(BA58>=2,BC58>=2),'Raw data'!CJ58="Yes"),AND(BI58>=2,'Raw data'!CK58="Yes")),'Raw data'!CR58,
//IF(OR(AND(AX58>=2,'Raw data'!CI58="No"),AND(BI58>=2,'Raw data'!CK58="No")),0,
//0))))
if(((ISNONTEXT(rCR)&& NOT_ISNUMBER(rCR))||rCR ===""))
{
  clHD = 0;
}
else if(rCR == "NoNeed")
{
  clHD = "NoNeed";
}
else if(clAX >= 2 || rCI == "Yes" && clBA >= 2 || clBC >= 2 || rCJ == "Yes" && clBI >= 2 && rCK == "Yes")
{
  clHD = rCR;
}
else if(clAX >= 2 || rCI == "No" && clBI >= 2 && rCK == "No")
{
  clHD = 0;
}
else 
{
  clHD = 0;
}

//=IF(OR(AND(ISNONTEXT(HC58),NOT(ISNUMBER(HC58))),HC58=""), 0,
// IF(OR('Raw data'!CI58="Yes", 'Raw data'!CJ58="Yes", 'Raw data'!CK58="Yes"), VLOOKUP(HC58, Informal0to7, 2, FALSE), 0))















console.log('----RAW----')
console.log('rN', rN);
console.log('rO', rO);
console.log('rP', rP);
console.log('rQ', rQ);
console.log('rR', rR);
console.log('rS', rS);
console.log('rT', rT);
console.log('rU', rU);
console.log('rDF', rDF);
console.log('rDE', rDE);
console.log('rV', rV);
console.log('rX', rX);
console.log('rY', rY);
console.log('rZ', rZ);
console.log('rDG', rDG);
console.log('rAA', rAA);
console.log('rAB', rAB);
console.log('rDH', rDH);
console.log('rAD', rAD);
console.log('rAE', rAE);
console.log('rAF', rAF);
console.log('rDI', rDI);
console.log('rAG', rAG);
console.log('rAH', rAH);
console.log('rAI', rAI);
console.log('rDJ', rDJ);
console.log('rAJ', rAJ);
console.log('rDJ', rDJ);
console.log('rAK', rAK);
console.log('rAL', rAL);
console.log('rAM', rAM);
console.log('rAN', rAN);
console.log('rAO', rAO);
console.log('rAP', rAP);
console.log('rAQ', rAQ);
console.log('rAR', rAR);
console.log('rAS', rAS);
console.log('rDK', rDK);
console.log('rAT', rAT);
console.log('rAU', rAU);
console.log('rDL', rDL);
console.log('rAW', rAW);
console.log('rAX', rAX);
console.log('rAY', rAY);
console.log('rDM', rDM);
console.log('rAZ', rAZ);
console.log('rBA', rBA);
console.log('rBB', rBB);
console.log('rBC', rBC);
console.log('rBD', rBD);
console.log('rBE', rBE);
console.log('rBF', rBF);
console.log('rBG', rBG);
console.log('rBH', rBH);
console.log('rBI', rBI);
console.log('rBJ', rBJ);
console.log('rBK', rBK);
console.log('rBL', rBL);
console.log('rBM', rBM);
console.log('rBN', rBN);
console.log('rBO', rBO);
console.log('rBP', rBP);
console.log('rBQ', rBQ);
console.log('rBR', rBR);
console.log('rBS', rBS);
console.log('rBT', rBT);
console.log('rBU', rBU);
console.log('rBV', rBV);
console.log('rBW', rBW);
console.log('rBX', rBX);
console.log('rBY', rBY);
console.log('rBZ', rBZ);
console.log('rCA', rCA);
console.log('rCB', rCB);
console.log('rCC', rCC);
console.log('rCD', rCD);
console.log('rCE', rCE);
console.log('rCF', rCF);
console.log('rCG', rCG);
console.log('rCH', rCH);
console.log('rCI', rCI);
console.log('rCJ', rCJ);
console.log('rCK', rCK);
console.log('rCL', rCL);
console.log('rCM', rCM);
console.log('rCN', rCN);
console.log('rCO', rCO);
console.log('rCP', rCP);
console.log('rCI', rCI);
console.log('rCS', rCS);
console.log('rCT', rCT);
console.log('rCU', rCU);
console.log('rCV', rCV);
console.log('rCW', rCW);
console.log('rCX', rCX);
console.log('rCY', rCY);
console.log('rCZ', rCZ);
console.log('rDA', rDA);
console.log('rDB', rDB);
console.log('rDC', rDC);
console.log('rDD', rDD);
console.log('rDE', rDE);
console.log('rDF', rDF);
console.log('rDG', rDG);
console.log('rDH', rDH);
console.log('rDI', rDI);
console.log('rDJ', rDJ);
console.log('rDK', rDK);
console.log('rDL', rDL);
console.log('rDM', rDM);
console.log('rDN'. rDN);
console.log('rDO', rDO);
console.log('rDP', rDP);
console.log('rDQ', rDQ);
console.log('rDR', rDR);
console.log('rDS', rDS);
console.log('rDT', rDT);
console.log('rDU', rDU);
console.log('rDV', rDV);
console.log('rDW', rDW);
console.log('rDX', rDX);
console.log('rDY', rDY);
console.log('rDZ', rDZ);
console.log('rEA', rEA);
console.log('rEB', rEB);
console.log('rEC', rEC);
console.log('rED', rED);
console.log('rEE', rEE);
console.log('rEF', rEF);
console.log('rEG', rEG);
console.log('rEH', rEH);
console.log('rEI', rEI);
console.log('rEJ', rEJ);
console.log('rEW', rEW);
console.log('rEX', rEX);
console.log('rEX', rEX);
console.log('rEY', rEY);
console.log('rEL', rEL);
console.log('rEZ', rEZ);
console.log('rEM', rEM);
console.log('rFA', rFA);
console.log('rEN', rEN);
console.log('rFB', rFB);
console.log('rEO', rEO);
console.log('rFC', rFC);
console.log('rEP', rEP);
console.log('rFD', rFD);
console.log('rEQ', rEQ);
console.log('rER', rER);
console.log('rES', rES);
console.log('rET', rET);
console.log('rEU', rEU);
console.log('rEV', rEV);
console.log('----clean----')
console.log('clG', clG);
console.log('clH', clH);
console.log('clI', clI);
console.log('clJ', clJ);
console.log('clK', clK);
console.log('clL', clL);
console.log('clM', clM);
console.log('clN', clN);
console.log('clO', clO);
console.log('clP', clP);
console.log('clQ', clQ);
console.log('clR', clR);
console.log('clS', clS);
console.log('clT', clT);
console.log('clU', clU);
console.log('clV', clV);
console.log('clW', clW);
console.log('clX', clX);
console.log('clY', clY);
console.log('clZ', clZ);
console.log('clAA', clAA);
console.log('clAB', clAB);
console.log('clAC', clAC);
console.log('clAD', clAD);
console.log('clAE', clAE);
console.log('clAF', clAF);
console.log('clAG', clAG);
console.log('clAH', clAH);
console.log('clAI', clAI);
console.log('clAJ', clAJ);
console.log('clAL', clAL);
console.log('clAK', clAK);
console.log('clAL', clAL);
console.log('clAM', clAM);
console.log('clAN', clAN);
console.log('clGC', clGC);
console.log('clAO', clAO);
console.log('clAP', clAP);
console.log('clAQ', clAQ);
console.log('clAR', clAR);
console.log('clAS', clAS);
console.log('clAT', clAT);
console.log('clAU', clAU);
console.log('clAV', clAV);
console.log('clAW', clAW);
console.log('clAX', clAX);
console.log('clAY', clAY);
console.log('clAZ', clAZ);
console.log('clBA', clBA);
console.log('clBB', clBB);
console.log('clBC', clBC);
console.log('clBD', clBD);
console.log('clBE', clBE);
console.log('clBF', clBF);
console.log('clBG', clBG);
console.log('clBH', clBH);
console.log('clBI', clBI);
console.log('clBJ', clBJ);
console.log('clBK', clBK);
console.log('clBL', clBL);
console.log('clBM', clBM);
console.log('clBN', clBN);
console.log('clBO', clBO);
console.log('clBP', clBP);
console.log('clBQ', clBQ);
console.log('clBR', clBR);
console.log('clBS', clBS);
console.log('clBT', clBT);
console.log('clBU', clBU);
console.log('clBV', clBV);
console.log('clBW', clBW);
console.log('clBX', clBX);
console.log('clBY', clBY);
console.log('clBZ', clBZ);
console.log('clCA', clCA);
console.log('clCB', clCB);
console.log('clCC', clCC);
console.log('clCD', clCD);
console.log('clCE', clCE);
console.log('clCF', clCF);
console.log('clCG', clCG);
console.log('clCH', clCH);
console.log('clCI', clCI);
console.log('clCJ', clCJ);
console.log('clCK', clCK);
console.log('clCL', clCL);
console.log('clCM', clCM);
console.log('clCN', clCN);
console.log('clCO', clCO);
console.log('clCP', clCP);
console.log('clCQ', clCQ);
console.log('clCR', clCR);
console.log('clCS', clCS);
console.log('clCT', clCT);
console.log('clCU', clCU);
console.log('clCV', clCV);
console.log('clCW', clCW);
console.log('clCX', clCX);
console.log('clCY', clCY);
console.log('clCZ', clCZ);
console.log('clDA', clDA);
console.log('clDB', clDB);
console.log('clDC', clDC);
console.log('clDD', clDD);
console.log('clDE', clDE);
console.log('clDF', clDF);
console.log('clDG', clDG);
console.log('clDH', clDH);
console.log('clDI', clDI);
console.log('clDJ', clDJ);
console.log('clDK', clDK);
console.log('clDL', clDL);
console.log('clDM', clDM);
console.log('clDN', clDN);
console.log('clDO', clDO);
console.log('clDP', clDP);
console.log('clDQ', clDQ);
console.log('clDR', clDR);
console.log('clDS', clDS);
console.log('clDT', clDT);
console.log('clDU', clDU);
console.log('clDV', clDV);
console.log('clDW', clDW);
console.log('clDX', clDX);
console.log('clDY', clDY);
console.log('clDZ', clDZ);
console.log('clEA', clEA);
console.log('clEB', clEB);
console.log('clEC', clEC);
console.log('clED', clED);
console.log('clEE', clEE);
console.log('clEF', clEF);
console.log('clEG', clEG);
console.log('clEH', clEH);
console.log('clEI', clEI);
console.log('clEJ', clEJ);
console.log('clEK', clEK);
console.log('clEL', clEL);
console.log('clEM', clEM);
console.log('clEN', clEN);
console.log('clEO', clEO);
console.log('clEP', clEP);
console.log('clEQ', clEQ);
console.log('clER', clER);
console.log('clES', clES);
console.log('clET', clET);
console.log('clEU', clEU);
console.log('clEV', clEV);
console.log('clEW', clEW);
console.log('clEX', clEX);
console.log('clEY', clEY);
console.log('clEZ', clEZ);
console.log('clFA', clFA);
console.log('clFB', clFB);
console.log('clFC', clFC);
console.log('clFD', clFD);
console.log('clFE', clFE);
console.log('clFF', clFF);
console.log('clFG', clFG);
console.log('clFH', clFH);
console.log('clFI', clFI);
console.log('clFJ', clFJ);
console.log('clFK', clFK);
console.log('clFL', clFL);
console.log('clFM', clFM);
console.log('clFN', clFN);
console.log('clFO', clFO);
console.log('clFP', clFP);
console.log('clFQ', clFQ);
console.log('clFR', clFR);
console.log('clFS', clFS);
console.log('clFT', clFT);
console.log('clFU', clFU);
console.log('clFV', clFV);
console.log('clFW', clFW);
console.log('clFX', clFX);
console.log('clFY', clFY);
console.log('clFZ', clFZ);
console.log('clGA', clGA);
console.log('clGB', clGB);
console.log('clGD', clGD);
console.log('clGE', clGE);
console.log('clGF', clGF);
console.log('clGG', clGG);
console.log('clGH', clGH);
console.log('clGI', clGI);
console.log('clGJ', clGJ);
console.log('clGK', clGK);
console.log('clGL', clGL);
console.log('clGM', clGM);
console.log('clGN', clGN);
console.log('clGO', clGO);
console.log('clGP', clGP);
console.log('clGQ', clGQ);
console.log('clGR', clGR);
console.log('clGS', clGS);
console.log('clGT', clGT);
console.log('clGU', clGU);
console.log('clGV', clGV);
console.log('clGQ', clGQ);
console.log('clGX', clGX);
console.log('clGY', clGY);
console.log('clGZ', clGZ);
console.log('clHA', clHA);
console.log('clHB', clHB);
console.log('clHC', clHC);
console.log('clHD', clHD);
//James reference

//IF(this = that, true, false) -> 
/*
if(this == that)
{
    clG = true;
}
else
{
    clG = false;
}


OR in Excel 

OR(x = 1, x =2)

OR in Javascript
x == 1 || x ==2

AND in Excel
AND(x=3, x =6)

AND in Javascript
x==3 && x==6


*/
//VLOOKUP v8.7.1.1
//#region [VLOOKUP]
//VLOOKUP v8.7.1.1
function VLOOKUP(d, functionName, c, b) {
  /* falls through */
  if (typeof d == "number") {
  d = d.toString()
  }
  
  switch (functionName) {
  case "Age_Bands":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "Under 18":
  return 1;
  case "18-24":
  return 2;
  case "25-34":
  return 3;
  case "35-44":
  return 4;
  case "45-54":
  return 5;
  case "55-64":
  return 6;
  case "65-74":
  return 7;
  case "75-84":
  return 8;
  case "85-94":
  return 9;
  case "95+":
  return 10;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "Under 18":
  return 1;
  case "18-24":
  return 2;
  case "25-34":
  return 3;
  case "35-44":
  return 4;
  case "45-54":
  return 5;
  case "55-64":
  return 6;
  case "65-74":
  return 7;
  case "75-84":
  return 8;
  case "85-94":
  return 9;
  case "95+":
  return 10;
  default:
  return 0;
  }
  }
  break;
  case "ALS":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "Alone":
  return 1;
  case "FamilyShort":
  return 2;
  case "FamilyLong":
  return 2;
  case "LiveIn":
  return 3;
  case "Shelt":
  return 6;
  case "SuppReg":
  return 7;
  case "Supp24h":
  return 9;
  case "Extrac":
  return 9.5;
  case "Res":
  return 12;
  case "Nurs":
  return 15;
  case "SharedL":
  return 10;
  case "HealthRes":
  return 16;
  case "Exoffender":
  return 17;
  case "Mobile":
  return 18;
  case "Rough":
  return 19;
  case "NightShelter":
  return 20;
  case "Refuge":
  return 21;
  case "TempAccomLA":
  return 22;
  case "Prison":
  return 23;
  case "OtherPerm":
  return 24;
  case "OtherTemp":
  return 25;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //TODO CHECK tHE DEFUALT VALUE
  switch (d) {
  case "Alone":
  return 1;
  case "FamilyShort":
  return 2;
  case "FamilyLong":
  return 3;
  case "LiveIn":
  return 4;
  case "Shelt":
  return 5;
  case "SuppReg":
  return 7;
  case "Supp24h":
  return 8;
  case "Extrac":
  return 6;
  case "Res":
  return 9;
  case "Nurs":
  return 10;
  case "SharedL":
  return 11;
  case "HealthRes":
  return 21;
  case "Exoffender":
  return 12;
  case "Mobile":
  return 13;
  case "Rough":
  return 14;
  case "NightShelter":
  return 15;
  case "Refuge":
  return 16;
  case "TempAccomLA":
  return 17;
  case "Prison":
  return 18;
  case "OtherPerm":
  return 19;
  case "OtherTemp":
  return 20;
  default:
  return 0;
  }
  }
  
  break;
  case "Toilet_Prep_Freq":
  if (c == 2) {
  switch (d) {
  case "None":
  return 0;
  case "Less than daily":
  return 0.1;
  case "Once a day":
  return 7;
  case "Twice a day":
  return 14;
  case "Three times a day":
  return 21;
  case "Four times a day":
  return 28;
  case "Every 2-3 hours+":
  return 35;
  case "n/a":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "None":
  return 0;
  case "Less than daily":
  return 1;
  case "Once a day":
  return 2;
  case "Twice a day":
  return 3;
  case "Three times a day":
  return 4;
  case "Four times a day":
  return 5;
  case "Every 2-3 hours+":
  return 6;
  case "n/a":
  return -3;
  default:
  return 0;
  }
  }
  break;
  case "Informal_safety":
  if (c == 2) {
  switch (d) {
  case "NoConstant":
  return 100;
  case "All":
  return 100;
  case "AlmostAll":
  return 90;
  case "Most":
  return 75;
  case "Half":
  return 50;
  case "Quarter":
  return 25;
  case "Minority":
  return 10;
  case "2nd Carer":
  return 0.5;
  case "2nd Carer":
  return 0.5;
  case "None":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "NoConstant":
  return 0.25;
  case "All":
  return 6;
  case "AlmostAll":
  return 5;
  case "Most":
  return 4;
  case "Half":
  return 3;
  case "Quarter":
  return 2;
  case "Minority":
  return 1;
  case "2nd Carer":
  return 0.5;
  case "2nd Carer":
  return 0.5;
  case "None":
  return 0;
  default:
  return 0;
  }
  }
  break;
  case "Meds_Freq":
  if (c == 2) {
  switch (d) {
  case "None":
  return 0;
  case "Less than daily":
  return 0;
  case "Once a day":
  return 7;
  case "Twice a day":
  return 14;
  case "Three times a day":
  return 21;
  case "Four times a day":
  return 28;
  case "Every 2-3 hours+":
  return 35;
  case "n/a":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "None":
  return 0;
  case "Less than daily":
  return 1;
  case "Once a day":
  return 2;
  case "Twice a day":
  return 3;
  case "Three times a day":
  return 4;
  case "Four times a day":
  return 5;
  case "Every 2-3 hours+":
  return 6;
  case "n/a":
  return -3;
  default:
  return 0;
  }
  }
  case "Wash_Freq":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "None":
  return 0;
  case "Less than daily":
  return 0.1;
  case "None or Less than weekly":
  return 0;
  case "Once or twice a week":
  return 1;
  case "Three or four times a week":
  return 3;
  case "Five or six times a week":
  return 5;
  case "Once a day":
  return 7;
  case "Twice a day":
  return 14;
  case "Three times a day":
  return 21;
  case "Four times a day":
  return 28;
  case "Every 2-3 hours+":
  return 35;
  case "n/a":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //30/01/2019 - JN First two return blank in spreadsheet - Default to "" too?
  switch (d) {
  case "None":
  return "";
  case "Less than daily":
  return "";
  case "None or Less than weekly":
  return 1;
  case "Once or twice a week":
  return 2;
  case "Three or four times a week":
  return 3;
  case "Five or six times a week":
  return 4;
  case "Once a day":
  return 5;
  case "Twice a day":
  return 6;
  case "Three times a day":
  return 7;
  case "Four times a day":
  return 8;
  case "Every 2-3 hours+":
  return 9;
  case "n/a":
  return -3;
  default:
  return "";
  }
  }
  break;
  case "Work_Degree":
  if (c == 2) {
  switch (d) {
  case "Indep":
  return 0;
  case "Unable":
  return 0;
  case "PreferNot":
  return 0;
  case "Transport":
  return 1;
  case "Background":
  return 2;
  case "1to1":
  return 3;
  case "2to1":
  return 4;
  case "n/a":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "Indep":
  return 0;
  case "Unable":
  return 1;
  case "PreferNot":
  return 2;
  case "Transport":
  return 3;
  case "Background":
  return 4;
  case "1to1":
  return 5;
  case "2to1":
  return 6;
  case "n/a":
  return -3;
  default:
  return 0;
  }
  }
  case "Social_Degree":
  //CHECKED
  //30/01/2019 - ADDED N/A and column 3
  if (c == 2) {
  switch (d) {
  case "Indep":
  return 0;
  case "Unable":
  return 0;
  case "PreferNot":
  return 0;
  case "Transport":
  return 1;
  case "Background":
  return 2;
  case "1to1":
  return 3;
  case "2to1":
  return 4;
  case "n/a":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "Indep":
  return 0;
  case "Unable":
  return "";
  case "PreferNot":
  return 2;
  case "Transport":
  return 3;
  case "Background":
  return 4;
  case "1to1":
  return 5;
  case "2to1":
  return 6;
  case "n/a":
  return -3;
  default:
  return 0;
  }
  }
  
  break;
  case "Social_Howoften":
  //CHECKED
  //30/01/2019 - ADDED column 3
  if (c == 2) {
  switch (d) {
  case "6to7act":
  return 7;
  case "4to5act":
  return 5;
  case "2to3act":
  return 2;
  case "1act":
  return 1;
  case "Less1act":
  return 0.5;
  case "None":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "6to7act":
  return 5;
  case "4to5act":
  return 4;
  case "2to3act":
  return 3;
  case "1act":
  return 2;
  case "Less1act":
  return 1;
  case "None":
  return 0;
  default:
  return 0;
  }
  }
  
  break;
  case "Safety_Waking":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "Safe":
  return 0;
  case "Alarm":
  return 1;
  case "OccasChecks":
  return 2;
  case "DailyChecks":
  return 4;
  case "Presence":
  return 6;
  case "1to1":
  return 8;
  case "2to1":
  return 9;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "Safe":
  return 0;
  case "Alarm":
  return 1;
  case "OccasChecks":
  return 2;
  case "DailyChecks":
  return 3;
  case "Presence":
  return 4;
  case "1to1":
  return 5;
  case "2to1":
  return 6;
  default:
  return 0;
  }
  //No 3rd column in Vlookup
  }
  break;
  case "Night_freq":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "None":
  return 0;
  case "Alarm":
  return 0.5;
  case "1visit":
  return 1;
  case "2visits":
  return 2;
  case "3visits":
  return 3;
  case "1carer":
  return 5;
  case "2carers":
  return 7;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "None":
  return 0;
  case "Alarm":
  return 1;
  case "1visit":
  return 2;
  case "2visits":
  return 3;
  case "3visits":
  return 4;
  case "1carer":
  return 5;
  case "2carers":
  return 6;
  default:
  return 0;
  }
  }
  
  break;
  case "Main_condition":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "None":
  return 0;
  case "Acquired":
  return 1;
  case "Arthr":
  return 2;
  case "Asperg":
  return 3;
  case "Autism":
  return 4;
  case "Cancer":
  return 5;
  case "COPD":
  return 6;
  case "Demen":
  return 7;
  case "DeprAnx":
  return 8;
  case "Epil":
  return 9;
  case "HeadInj":
  return 10;
  case "HearImp":
  return 11;
  case "HIV":
  return 12;
  case "LD":
  return 13;
  case "MND":
  return 14;
  case "Parkins":
  return 15;
  case "SevMH":
  return 16;
  case "Stroke":
  return 17;
  case "SubsMis":
  return 18;
  case "VisImp":
  return 19;
  case "OtherMH":
  return 20;
  case "OtherNeur":
  return 21;
  case "OtherPhys":
  return 22;
  case "OtherSens":
  return 23;
  case "CerebPal":
  return 24;
  case "Diabetes":
  return 25;
  case "MS":
  return 26;
  case "Migraine":
  return 28;
  case "Cardiac":
  return 29;
  case "OtherLD":
  return 30;
  case -17:
  return 0;
  case "-17":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "None":
  return 0;
  case "Acquired":
  return 1;
  case "Arthr":
  return 2;
  case "Asperg":
  return 3;
  case "Autism":
  return 4;
  case "Cancer":
  return 5;
  case "COPD":
  return 6;
  case "Demen":
  return 7;
  case "DeprAnx":
  return 9;
  case "Epil":
  return 13;
  case "HeadInj":
  return 15;
  case "HearImp":
  return 17;
  case "HIV":
  return 20;
  case "LD":
  return 29;
  case "MND":
  return 30;
  case "Parkins":
  return 35;
  case "SevMH":
  return 38;
  case "Stroke":
  return 39;
  case "SubsMis":
  return 40;
  case "VisImp":
  return 41;
  case "OtherMH":
  return 42;
  case "OtherNeur":
  return 43;
  case "OtherPhys":
  return 44;
  case "OtherSens":
  return 45;
  case "CerebPal":
  return 46;
  case "Diabetes":
  return 47;
  case "MS":
  return 48;
  case "Migraine":
  return 49;
  case "Cardiac":
  return 50;
  case "OtherLD":
  return 51;
  case -17:
  return 0;
  case "-17":
  return 0;
  default:
  return 0;
  }
  }
  break;
  case "Informal_Support_DomTasks":
  if (c == 2) {
  switch (d) {
  case "Yes":
  return 100;
  case "No":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "Yes":
  return 1;
  case "No":
  return 0;
  default:
  return 0;
  }
  }
  case "Informal_Support_Social":
  if (c == 2) {
  switch (d) {
  case "6to7act":
  return 7;
  case "4to5act":
  return 5;
  case "2to3act":
  return 2;
  case "1act":
  return 1;
  case "2nd Carer":
  return 50;
  case "2nd Carer":
  return 50;
  case "0":
  return 0;
  case "NoNeed":
  return 100;
  }
  
  
  }
  if (c == 3) {
  switch (d) {
  case "6to7act":
  return 6;
  case "4to5act":
  return 4;
  case "2to3act":
  return 2;
  case "1act":
  return 1;
  case "2nd Carer":
  return 0.5;
  case "2nd Carer":
  return 0.5;
  case "0":
  return 0;
  case "NoNeed":
  return 0.25;
  }
  
  
  }
  case "Informal_Support_Emotional":
  if (c == 2) {
  switch (d) {
  case "LotSupportMost":
  return 10;
  case "LittleSupportMost":
  return 5;
  case "2to3times":
  return 2;
  case "Weekly":
  return 1;
  case "None":
  return 0;
  case "NoNeed":
  return 0;
  }
  if (c == 3) {
  switch (d) {
  case "LotSupportMost":
  return 10;
  case "LittleSupportMost":
  return 5;
  case "2to3times":
  return 2;
  case "Weekly":
  return 1;
  case "None":
  return 0;
  case "NoNeed":
  return 0.5;
  }
  }
  }
  case "Informal_support":
  //CHECKED
  //30/01/2019 - TODO - CHECK DEFAULT 0 on Column 4, is this correct?
  if (c == 2) {
  switch (d) {
  case "7":
  return 100;
  case "6":
  return 85.7143;
  case "5":
  return 71.4286;
  case "4":
  return 57.1429;
  case "3":
  return 42.8571;
  case "2":
  return 28.5714;
  case "1":
  return 14.2857;
  case "0":
  return 0;
  case "2nd Carer":
  return 50;
  case "2nd Carer": //<----FACE ISSUE
  return 50;
  case "All":
  return 100;
  case "Some":
  return 0;
  case "None":
  return 0;
  case "Yes":
  return 100;
  case "No":
  return 0;
  case "6to7act":
  return 7;
  case "4to5act":
  return 5;
  case "2to3act":
  return 2;
  case "1act":
  return 1;
  case "Less1act":
  return 0.5;
  case "NoNeed":
  return 100;
  case "AlmostAll":
  return 90;
  case "Most":
  return 75;
  case "Half":
  return 50;
  case "Quarter":
  return 25;
  case "Minority":
  return 10;
  case "NoConstant":
  return 100;
  case "LotSupportMost":
  return 10;
  case "LittleSupportMost":
  return 5;
  case "2to3times":
  return 2;
  case "Weekly":
  return 1;
  case "None":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "7":
  return 7;
  case "6":
  return 6;
  case "5":
  return 5;
  case "4":
  return 4;
  case "3":
  return 3;
  case "2":
  return 2;
  case "1":
  return 1;
  case "0":
  return 0;
  case "2nd Carer":
  return 3.5;
  case "2nd Carer":
  return 3.5; //<-----FACE ISSUE
  case "All":
  return 1;
  case "Some":
  return 0;
  case "None":
  return 0;
  case "Yes":
  return 1;
  case "No":
  return 0;
  case "6to7act":
  return 0;
  case "4to5act":
  return 0;
  case "2to3act":
  return 0;
  case "1act":
  return 0;
  case "Less1act":
  return 0;
  case "NoNeed":
  return 0;
  case "AlmostAll":
  return "";
  case "Most":
  return "";
  case "Half":
  return "";
  case "Quarter":
  return "";
  case "Minority":
  return "";
  case "NoConstant":
  return "";
  case "LotSupportMost":
  return "";
  case "LittleSupportMost":
  return "";
  case "2to3times":
  return "";
  case "Weekly":
  return "";
  case "None":
  return "";
  default:
  return 0;
  }
  }
  if (c == 4) {
  switch (d) {
  case "7":
  return 7;
  case "6":
  return 6;
  case "5":
  return 5;
  case "4":
  return 4;
  case "3":
  return 3;
  case "2":
  return 2;
  case "1":
  return 1;
  case "0":
  return 0;
  case "2nd Carer":
  return 0.5;
  case "2nd Carer":
  return 0.5; //<-----FACE ISSUE
  case "All":
  return "";
  case "Some":
  return "";
  case "None":
  return "";
  case "Yes":
  return 1;
  case "No":
  return 0;
  case "6to7act":
  return 6;
  case "4to5act":
  return 4;
  case "2to3act":
  return 2;
  case "1act":
  return 1;
  case "Less1act":
  return "";
  case "NoNeed":
  return 0.25;
  case "LotSupportMost":
  return 4;
  case "LittleSupportMost":
  return 3;
  case "2to3times":
  return 2;
  case "Weekly":
  return 1;
  case "None":
  return 0.5;
  default:
  return 0;
  }
  }
  break;
  case "Primary_support_reasons":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "AccessMobility":
  return 1;
  case "PersCare":
  return 2;
  case "Cognition"://p3
  return 3;
  case "Visual":
  return 4;
  case "Hearing":
  return 5;
  case "DualSens":
  return 6;
  case "LD"://P4
  return 7;
  case "MH"://p5
  return 8;
  case "SocialCarer":
  return 9;
  case "Substance":
  return 10;
  case "Asylum":
  return 11;
  case "Isolation":
  return 12;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //TODO CHECK DEFAULT
  switch (d) {
  case "AccessMobility":
  return 2;
  case "PersCare":
  return 3;
  case "Cognition":
  return 4;
  case "Visual":
  return 6;
  case "Hearing":
  return 7;
  case "DualSens":
  return 8;
  case "LD":
  return 9;
  case "MH":
  return 10;
  case "SocialCarer":
  return 12;
  case "Substance":
  return 13;
  case "Asylum":
  return 14;
  case "Isolation":
  return 15;
  default:
  return 0;
  }
  }
  
  break;
  case "Num_Sharing":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "n/a":
  return 0;
  case "None":
  return 0;
  case "Alone":
  return 1;
  case "2sharing":
  return 2;
  case "3sharing":
  return 3;
  case "4sharing":
  return 4;
  case "5sharing":
  return 5;
  case "6sharing+":
  return 6;
  case "CareHomeUnder5":
  return 7;
  case "CareHome5to9":
  return 8;
  case "CareHomeOver9":
  return 9;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //TODO CHECK JN 30/01/2019 - None is "" - default to "" or 0 or -3 - left as 0 for now
  switch (d) {
  case "n/a":
  return -3;
  case "None":
  return "";
  case "Alone":
  return 0;
  case "2sharing":
  return 1;
  case "3sharing":
  return 2;
  case "4sharing":
  return 3;
  case "5sharing":
  return 4;
  case "6sharing+":
  return 5;
  case "CareHomeUnder5":
  return 6;
  case "CareHome5to9":
  return 7;
  case "CareHomeOver9":
  return 8;
  default:
  return 0;
  }
  }
  break;
  case "How_Often_Childcare":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "None":
  return 0;
  case "LessWeekly":
  return 0;
  case "Weekly":
  return 0;
  case "2to3times":
  return 0;
  case "LittleSupportMost":
  return 0;
  case "LotSupportMost":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "None":
  return 0;
  case "LessWeekly":
  return 1;
  case "Weekly":
  return 2;
  case "2to3times":
  return 3;
  case "LittleSupportMost":
  return 4;
  case "LotSupportMost":
  return 5;
  default:
  return 0;
  }
  }
  
  break;
  case "Informal0to7":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "NoNeed":
  return 0;
  case "7":
  return 7;
  case "6":
  return 6;
  case "5":
  return 5;
  case "4":
  return 4;
  case "3":
  return 3;
  case "2":
  return 2;
  case "1":
  return 1;
  case "2nd Carer":
  return 7;
  case "2nd Carer":
  return 7;
  case "0":
  return 0;
  case 7:
  return 7;
  case 6:
  return 6;
  case 5:
  return 5;
  case 4:
  return 4;
  case 3:
  return 3;
  case 2:
  return 2;
  case 1:
  return 1;
  case "2nd Carer":
  return 7;
  case "2nd Carer":
  return 7;
  case 0:
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  switch (d) {
  case "NoNeed":
  return 0;
  case "7":
  return 3.5;
  case "6":
  return 3;
  case "5":
  return 2.5;
  case "4":
  return 2;
  case "3":
  return 1.5;
  case "2":
  return 1;
  case "1":
  return 0.5;
  case "2nd Carer":
  return 3.5;
  case "2nd Carer":
  return 3.5;
  case "0":
  return 0;
  case 7:
  return 3.5;
  case 6:
  return 3;
  case 5:
  return 2.5;
  case 4:
  return 2;
  case 3:
  return 1.5;
  case 2:
  return 1;
  case 1:
  return 0.5;
  case "2nd Carer":
  return 3.5;
  case "2nd Carer":
  return 3.5;
  case 0:
  return 0;
  default:
  return 0;
  }
  }
  // if (c == 4) {
  // switch (d) {
  // case "NoNeed":
  // return 0;
  // case "7":
  // return 14;
  // case "6":
  // return 12;
  // case "5":
  // return 10;
  // case "4":
  // return 8;
  // case "3":
  // return 6;
  // case "2":
  // return 4;
  // case "1":
  // return 2;
  // case "2nd Carer":
  // return 14;
  // case "2nd Carer":
  // return 14;
  // case "0":
  // return 0;
  // default:
  // return 0;
  // }
  // }
  // if (c == 5) {
  // switch (d) {
  // case "NoNeed":
  // return 0;
  // case "7":
  // return 56;
  // case "6":
  // return 48;
  // case "5":
  // return 40;
  // case "4":
  // return 32;
  // case "3":
  // return 24;
  // case "2":
  // return 16;
  // case "1":
  // return 8;
  // case "2nd Carer":
  // return 56;
  // case "2nd Carer":
  // return 56;
  // case "0":
  // return 0;
  // default:
  // return 0;
  // }
  // }
  // if (c == 6) {
  // switch (d) {
  // case "NoNeed":
  // return 0;
  // case "7":
  // return 35;
  // case "6":
  // return 30;
  // case "5":
  // return 25;
  // case "4":
  // return 20;
  // case "3":
  // return 15;
  // case "2":
  // return 10;
  // case "1":
  // return 5;
  // case "2nd Carer":
  // return 35;
  // case "2nd Carer":
  // return 35;
  // case "0":
  // return 0;
  // default:
  // return 0;
  // }
  // }
  if (c == 4) {
  switch (d) {
  case "NoNeed":
  return 0;
  case "7":
  return 63;
  case "6":
  return 54;
  case "5":
  return 45;
  case "4":
  return 36;
  case "3":
  return 27;
  case "2":
  return 18;
  case "1":
  return 9;
  case "2nd Carer":
  return 63;
  case "2nd Carer":
  return 63;
  case "0":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 5) {
  switch (d) {
  case "NoNeed":
  return 0;
  case "7":
  return 1.75;
  case "6":
  return 1.5;
  case "5":
  return 1.25;
  case "4":
  return 1;
  case "3":
  return 0.75;
  case "2":
  return 0.5;
  case "1":
  return 0.25;
  case "2nd Carer":
  return 63;
  case "2nd Carer":
  return 63;
  case "0":
  return 0;
  default:
  return 0;
  }
  }
  break;
  case "TimeAlone":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "MoreThanDay":
  return 0;
  case "Day":
  return 1.75;
  case "MostDay":
  return 3.5;
  case "HalfDay":
  return 5.25;
  case "3to4Hours":
  return 7;
  case "2Hours":
  return 12.25;
  case "1Hour":
  return 24.5;
  case "15to30Mins":
  return 49;
  case "ConstantPresence":
  return 105;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //No 3rd column in Vlookup
  }
  break;
  case "DST_Levels":
  if (c == 2) {
  switch (d)
  {
  case "No additional needs":
  return 0;
  case "Low":
  return 1;
  case "Moderate":
  return 2;
  case "High":
  return 3;
  case "Severe":
  return 4;
  case "Priority":
  return 5;
  }
  }
  case "DST_levels_Cog":
  if (c == 2) {
  switch (d)
  {
  case "No additional needs":
  return 0;
  case "Low (cognitive impairment)":
  return 1;
  case "Low (Difficulty with memory/decisions)":
  return 1;
  case "Moderate":
  return 2;
  case "High":
  return 3;
  case "Severe":
  return 4;
  }
  }
 case "_ASC":
  if (c == 2) {DST_levels
  switch (d)
  {
  case "No additional needs":
  return 0;
  case "Low":
  return 1;
  case "Moderate":
  return 2;
  case "High":
  return 3;
  case "High (Frequent episodes of ASC)":
  return 3;
  case "High (Occasional ASCs requiring skilled intervention)":
  return 3;
  case "Severe":
  return 4;
  case "Priority":
  return 5;
  case "Priority (Coma)":
  return 5;
  case "Priority (ASC most days)":
  return 5;
  }
  }
  break;
  case "NightAlone":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "0":
  return 0;
  case "1":
  return 7;
  case "2":
  return 14;
  case "3":
  return 21;
  case "4":
  return 63;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //No 3rd column in Vlookup
  }
  break;
  case "Ongoing_Company":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "NoNeed":
  return 0;
  case "LotSupportMost":
  return 28;
  case "LittleSupportMost":
  return 7;
  case "2to3times":
  return 4;
  case "Weekly":
  return 2;
  case "None":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //No 3rd column in Vlookup
  }
  break;
  case "Ongoing_Childcare":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "NoNeed":
  return 0;
  case "LotSupportMost":
  return 28;
  case "LittleSupportMost":
  return 7;
  case "2to3times":
  return 4;
  case "Weekly":
  return 2;
  case "None":
  return 0;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //No 3rd column in Vlookup
  }
  break;
  case "Num_Sharing":
  //CHECKED
  if (c == 2) {
  switch (d) {
  case "No additional needs":
  return 0;
  case "Low":
  return 1;
  case "Moderate":
  return 2;
  case "High":
  return 3;
  case "Severe":
  return 4;
  case "Priority":
  return 5;
  default:
  return 0;
  }
  }
  if (c == 3) {
  //No 3rd Column
  }
  break;
  default:
  return "error";
  }
  }
  //#endregion
