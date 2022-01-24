/* 

NOTES

== 0 IS THE SAME AS == "" -> Replaced all == "" with ===""


Some notes here some more notes


xyz 

*/




//Functions
function HOUR(d)
{
  return d;
}
function MINUTE(d)
{
  return d;
}
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
var Homecare_30_min_minimum = 1;
//Raw Data
var rA='TCT9' ;
var rB='' ;
var rC='' ;
var rD='' ;
var rE='' ;
var rF='' ;
var rG='' ;
var rH='' ;
var rI='' ;
var rJ='' ;
var rK='' ;
var rL='' ;
var rM='' ;
var rN= "45-54";
var rO=3;
var rP= "Yes";
var rQ=1;
var rR= "Yes";
var rS= "Yes";
var rT= "No";
var rU= "Transport";
var rV= "2to3act";
var rW= "NotWorkingNotSeeking";
var rX= "FullTime";
var rY= "No";
var rZ= "Background";
var rAA= "4to5act";
var rAB= "No";
var rAC= "LotSupportMost";
var rAD= "Supp24h";
var rAE= "No";
var rAF=3;
var rAG= "Yes";
var rAH= "No";
var rAI= "No";
var rAJ=4;
var rAK=3;
var rAL= "Once a day";
var rAM=3;
var rAN= "Yes";
var rAO= "n/a";
var rAP= "Yes";
var rAQ= "Yes";
var rAR= "No";
var rAS=4;
var rAT=4;
var rAU= "No";
var rAV=4;
var rAW=4;
var rAX= "Three times a day";
var rAY= "No";
var rAZ=4;
var rBA= "Every 2-3 hours+";
var rBB= "Monitor";
var rBC= "No";
var rBD=4;
var rBE= "No";
var rBF=2;
var rBG=4;
var rBH= "No";
var rBI= "COPD";
var rBJ= "Demen";
var rBK= "DeprAnx";
var rBL= "Diabetes";
var rBM= "Monthly";
var rBN= "Supervise";
var rBO= "Less than daily";
var rBP=0;
var rBQ= "n/a";
var rBR= "RiskDaily";
var rBS=1;
var rBT= "Yes";
var rBU=2;
var rBV= "Inhaler";
var rBW= "No";
var rBX=2;
var rBY=1;
var rBZ=1;
var rCA=1;
var rCB=1;
var rCC= "No";
var rCD=1;
var rCE= "OccasChecks";
var rCF= "1visit";
var rCG= "n/a";
var rCH= "FullEff";
var rCI= "Yes";
var rCJ= "No";
var rCK= "Yes";
var rCL= "Yes";
var rCM= "Yes";
var rCN= "Yes";
var rCO= "Yes";
var rCP=5;
var rCQ=5;
var rCR=5;
var rCS=7;
var rCT= "Yes";
var rCU= "Yes";
var rCV= "";
var rCW= "Yes";
var rCX= "1act";
var rCY= "2to3act";
var rCZ= "Weekly";
var rDA= "LittleSupportMost";
var rDB= "NoConstant";
var rDC=1;
var rDD= "No";
var rDE= "No";
var rDF= "Yes";
var rDG= "Yes";
var rDH= "Yes";
var rDI= "Yes";
var rDJ= "Yes";
var rDK= "Yes";
var rDL= "Yes";
var rDM= "Yes";
var rDN= "Yes";
var rDO= "Yes";
var rDP= "Yes";
var rDQ= "Hearing";
var rDR= "Supp24h";
var rDS= "5sharing";
var rDT= "Yes";
var rDU= "";
var rDV= "";
var rDW= "";
var rDX= "";
var rDY= "";
var rDZ= "";
var rEA= "";
var rEB= "";
var rEC= "";
var rED= "";
var rEE= "";
var rEF= "";
var rEG= "";
var rEH= "Under 18";
var rEI= "Yes";
var rEJ= "NoChallenges";
var rEK= "NotDueToCaring";
var rEL= "YesLittle";
var rEM= "YesModerate";
var rEN= "YesSignificant";
var rEO= "YesSevere";
var rEP= "n/a";
var rEQ= "NoChallenges";
var rER= "MoreThanDay";
var rES= "No";
var rET=0;
var rEU=0;
var rEV= "Yes";
var rEW= "No";
var rEX= "No";
var rEY= "No";
var rEZ= "No";
var rFA= "No";
var rFB= "No";
var rFC= "No";
var rFD= "No";
var rFE= "No";
var rFF= "No";
var rFG= "No";
var rFH= "";
var rFI= "";













































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
var CHC_LD_SafetySocial_Switch = 0;
var MH_Safety_Day_Standard = 116;
var WA_Safety_Day_Standard = 116;
var Default_Social_Transport = 10;
var clG = "";
var Extracare_Homecare_rate = 0;
var SH_Homecare_rate = 0;
var Homecare_Rate = 18.38;
var LD_Homecare_Rate = 15.4;
var MH_Homecare_Rate = 15.4;
var PA_Homecare_rate = 0;
var Medication_Visit_Adjustment = 0;
var Prep_Visit_Adjustment = 0;
var FullTime_Education_switch = 1;
var Eating_addition_adj = 0.25;
var calL = 0;
var calK = 25.38;
var Housework = 1;
var Shopping = 1; 
var Paperwork_finances = 1;
var Social_2_Number_Activities = 1;
var Work_edu_1_Number_Activities = 0;
var Work_edu_Overlap = 0;
var Max_non_overlap = 5;
var Social_activity_hours = 3;
var NightOnce = 14.5;
var CHNightOnce = 14.5;
var SHNightOnce = 14.5;
var PC_Dom_respite_adj = 1.5;
var Safety_respite_adj = 3.75;
var Max_days_respite = 42;
var carcAA = 0;
var carcAE = 0;
var carcW = 58.375;
var carcZ = 0;
var carcAE = 0;
var carcAD = 0;
var carcAS = 974.14;
var carcR = 27.125;
var carcD = 1.75;
var carcJ = 0;
var carcM = 1.5;
var carcL = 0;
var carcC = 1.75;
var carcK = 0;
var Dynamic_Care_home = 0;
var WA_Respite_weekly = 571.86;
var WA_High_end_cap = 0;
var LD_High_end_cap = 0;
var MH_High_end_cap = 0;
var High_end_cap = 0;
var calAA = 3.5;
var calAB = 2;
var calAE = 974;
var calAF = 974;
var calO = 25.50;
var calZ = 25.50;
var calY = 25.50
var comQ = 974;
var comE = 468.69;
var comC = 0.00;
var comB = 468.69;
var comM = 0;
var comT = 974;
var comAD = 0;
var comAE = 55.14;
var comV = 468.69;
var comI = 0;
var supF = 469;
var supD = 0;
var supB = 469;
var supK = 468.69;
var supO = 0;
var supQ = 15;
var supC = 0;
var oalE = 2;
var oalC = 0;
var oalB = 469;
var oalI = 468.69;
var Res_Hours_PD_Rate = 0;
var Res_Hours_MH_Rate = 0;
var Res_Hours_LD_Rate = 0;
var Res_Hours_Rate = 0;
var SH_Default_Reduction = 0;
var Social_activity_output = 0;
var Care_home_FulltimeCarer_Activities = 35;
var Extend_snacks_addition_adj = 0.667;
var SafetyInfDayHalf = 5;
var SafetyInfHourHalf = 0;
var MH_Day_to_Day_multiplier = 1;
var Carer_impact_4 = 1;
var MH_Respite_weekly = 441;
var PA_Dom_Tasks_Switch = 0;
var SafetyInfDayMost = 3;
var SafetyInfHourMost = 0;
var Social_3_Number_Activities = 2;
var Full_time_education_social = 2;
var SafetyInfDayAll = 0;
var SafetyInfHourAll = 0;
var Social_4_Number_Activities = 5;
var WakingImpactLevel = 2;
var NightWaking = 130.5;
var CHNightWaking = 130.5;
var SHNightWaking = 138.6;
var Carer_impact_3 = 0.75;
var Night_hours = 9;
var Respite_DC = 0;
var LD_Safety_Day_High = 123.2;
var LD_Personal_Care_multiplier = 1;
var SafetyInfDayNone = 5;
var SafetyInfHourNone = 65;
var LD_NightWaking = 138.6;
var LD_High_respite_weekly = 0;
var MH_Safety_Day_High = 123.2;
var MH_High_respite_weekly = 0;
var LD_Safety_Day_Standard = 116;
var LD_Day_to_Day_multiplier = 1;
var LD_Respite_weekly = 441;
var MH_NightSleep_in = 94.5;
var CHNightSleep_in = 94.5;
var SHNightSleep_in = 94.5;
var Social_work_informal_2to3a_value = 2;
var Carer_impact_2 = 0.4;
var MH_Life_planning_inflator = 1;
var LD_Life_planning_inflator = 1;
var Social_1_Number_Activities = 0;
var Work_edu_4_Number_Activities = 5;
var WA_Safety_Day_High = 116;
var Dressing1 = 0.5835;
var WashingBody1 = 0.5835;
var Toileting1 = 0.5835;
var Appearance1 = 0.5835;
var SafetyInfDayQuarter = 5;
var SafetyInfHourQuarter = 16;
var WA_High_respite_weekly = 624.14;
var Second_carer_safety_rate = 116;
var NightSleep_in = 94.5;
var Extend_addition_adj = 1;
var SafetyInfDayAlmost = 1;
var SafetyInfHourAlmost = 0;
var Social_5_Number_Activities = 5;
var Night_respite_adj = 2.25;
var Work_edu_3_Number_Activities = 2;
var Work_edu_2_Number_Activities = 1;
var Default_Safety_Day_Standard = 116;
var Respite_weekly = 571.86;
var SafetyInfDayMinority = 5;
var SafetyInfHourMinority = 35;
var Default_Work_edu_Transport = 0;
var Work_edu_5_Number_Activities = 5;
var CHNightAlarm = 0;
var SHNightAlarm = 0;
var Care_Home_Psych_Increase_1 = 0;
var Care_Home_Psych_Increase_2 = 0.25;
var Care_Home_Psych_Increase_3 = 1.25; 
var Care_Home_Psych_Increase_4 = 2;
var Care_Home_PsychBlock_Under65Switch = 0;
var Care_Home_PsychBlock_Over65Switch = 0;
var Care_Home_Work_Inclusion = 1;
var Care_home_CommunicationSwitch = 1;
var Care_Home_Communication_1 = 0.25;
var Care_Home_Communication_2 = 0.5;
var Care_Home_Communication_3 = 1;
var Care_Home_Communication_4 = 1.5;
var Care_Home_Communication_5 = 2;
var Care_Home_HouseworkSwitch = 1;
var Care_home_ShoppingSwitch = 1;
var Care_home_medication = 0.125;
var Include_eating_dynamic_ch = 1;
var Care_home_15min_toileting = 0;
var Care_home_EDLMultiplier_PD = 1;
var Care_home_EDLMultiplier_MH = 1;
var Care_home_EDLMultiplier_LD = 1;
var Care_home_EDLMultiplier_Default = 1;
var Dynamic_Hours_Cap = 0;
var Hotel_Cost_Weekly_PD = 0;
var Hotel_Cost_Weekly_LD = 0;
var Hotel_Cost_Weekly_MH = 0;
var Hotel_Cost_Weekly = 0;
var Res_PD_Return_Investment = 0;
var Res_LD_Return_Investment = 0;
var Res_MH_Return_Investment = 0;
var Res_Return_Investment = 0;
var Ceiling_Res_PD = 0;
var Ceiling_Res_LD = 0;
var Ceiling_Res_MH = 0;
var Ceiling_Res_Default = 0;
var Nurs_hours_PD_Rate = 0;
var Nurs_hours_LD_Rate = 0;
var Nurs_hours_MH_Rate = 0;
var Nurs_Hours_Rate = 0;
var Hotel_Cost_Weekly_Nursing_PD = 0;
var Hotel_Cost_Weekly_Nursing_LD = 0;
var Hotel_Cost_Weekly_Nursing_MH = 0;
var Hotel_Cost_Weekly_Nursing_Default = 0;
var Nurs_PD_Return_Investment = 0;
var Nurs_LD_Return_Investment = 0;
var Nurs_MH_Return_Investment = 0;
var Nurs_Return_Investment = 0;
var Ceiling_Nurse_PD = 0;
var Ceiling_Nurse_LD = 0;
var Ceiling_Nurse_MH = 0;
var Ceiling_Nurse_Default = 0;
var Residential_home_Standard = 571.86;
var Residential_Dementia = 618.89;
var Tier2_Residential_home = 571.86;
var Tier3_Residential_home = 571.86;
var WA_Residential_home_Standard = 571.86;
var WA_Residential_Dementia = 618.89;
var LD_Residential_home_Standard = 0;
var LD_Residential_Dementia = 0;
var MH_Residential_home_Standard = 0;
var MH_Residential_Dementia = 0;
var Nursing_home_value = 624.11;
var Nursing_Dementia = 671.14;
var Tier2_Nursing_home = 624.11;
var Tier3_Nursing_home = 624.11;
var WA_Nursing_home_value = 624.11;
var WA_Nursing_Dementia = 671.14;
var LD_Nursing_home_value = 0;
var LD_Nursing_Dementia = 0;
var MH_Nursing_home_value = 0;
var MH_Nursing_Dementia = 0;
var Supported_weekly_Background = 0;
var LD_Supported_weekly_Background = 0;
var Supported_number_reduction = 4;
var Support_two_sharing_ratio = 0.5;
var Support_three_sharing_ratio = 0.3333;
var Support_four_sharing_ratio = 0.25;
var Support_five_sharing_ratio = 0.2;
var Support_six_sharing_ratio = 0.1667;
var Supported_24hr_addPCare = 0;
var Live_in_cap = 860;
var LD_Live_in_cap = 860;
var Live_in_Carer_Allocation = 1;
var Care_home_20Sharing = 0.05;
var SharedLives_Band_4 = 539;
var SharedLives_Band_3 = 490;
var SharedLives_Band_2 = 441;
var SharedLives_Band_1 = 392;
var Shared_lives_addition = 0;
var Shared_Lives_Allocation = 1;
var Mobility_DST_Severe = 1.7;
var TransfersMajorAdj = 1.7;
var TransfersMinorAdj = 1.5;
var Engagement_VerySevere = 1.25;
var Memory_VerySevere = 1.6;
var Sensory_VerySevere = 1.25;
var Engagement_Severe = 1.15;
var Memory_Severe = 1.45;
var Sensory_Severe = 1.15;
var Engagement_Moderate = 1.05;
var Memory_Moderate = 1;
var Breathing_Severe = 1;
var Breathing_Significant = 1;
var Breathing_Mild = 1;
var Pain_Severe = 1;
var Pain_Moderate = 1;
var Block_adjustments = 0;
var Care_home_allocation = 1;
var Minimum_IB_Deflator = 0;
var Minimum_IB_Inflator = 0;
var Care_home_activity_length_Under65 = 1;
var SupportHousingAdj = 1;







var clF = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!N58),NOT(ISNUMBER('Raw data'!N58))),'Raw data'!N58=""),0,
//IF('Raw data'!N58="",0,VLOOKUP('Raw data'!N58,Age_Bands,2,FALSE)))
if((ISNONTEXT(rN)&& NOT_ISNUMBER(rN))|| rN === "")
{
  clF = 0;
}
else if(rN == "")
{
  clF = 0;
}
else
{
  clF = VLOOKUP(rN,Age_Bands,2,FALSE);
}

//=IF(OR(AND(ISNONTEXT('Raw data'!N58),NOT(ISNUMBER('Raw data'!N58))),'Raw data'!N58=""),-17,0)
if((ISNONTEXT(rN)&& NOT_ISNUMBER(rN))||rN ==="")
{
    clG = -17;
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
else
{
  clJ = 0;
}


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

var clM = "";
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
  clN = "";
}
else if(rT == "No")
{
  clN = 1;
}
else if(rT == "Yes")
{
  clN = 0;
}
else
{
  clN == "";
}

var clO = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!U58),NOT(ISNUMBER('Raw data'!U58))),'Raw data'!U58=""),0,VLOOKUP('Raw data'!U58,Social_Degree,2,FALSE))
if((ISNONTEXT(rU)&& NOT_ISNUMBER(rU))||rU ==="")
{
  clO = 0;
}
else{clO = VLOOKUP(rU,Social_Degree,2, FALSE) }
 
var clP = "";
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
  clQ = VLOOKUP(rV,Social_Howoften,2,FALSE);
}

var clR = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!V58),NOT(ISNUMBER('Raw data'!V58))),'Raw data'!V58=""),-17,VLOOKUP('Raw data'!V58,Social_Howoften,2, FALSE))
if (((ISNONTEXT(rV)&& NOT_ISNUMBER(rV))||rV ===""))
{
 clR = -17;
}
else
{
 clR = VLOOKUP(rV,Social_Howoften,2,FALSE);
}

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
//IF('Raw data'!X58="None",0,""))
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
  clU = "";
}
else if (rY == "No")
{
  clU = 1;
}
else if(rY == "Yes")
{
  clU = 0;
}
else if(rY == "n/a")
{
  clU = 0;
}
else 
{
  clU = "";
}
var clV = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!Z58),NOT(ISNUMBER('Raw data'!Z58))),'Raw data'!Z58=""),0,VLOOKUP('Raw data'!Z58,Work_Degree,2,FALSE))
if (((ISNONTEXT(rZ)&& NOT_ISNUMBER(rZ))||rZ ===""))
{
  clV = 0;
}
else 
{
 clV = VLOOKUP(rZ,Work_Degree,2,FALSE);
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
else if(((ISNONTEXT(rAB)&& NOT_ISNUMBER(rAB))||rAB ===""))
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
else if(rAB == "n/a")
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
if((ModelType >= 2 && OUT_DSTNeedsProfile == 1) && (rAS == 5 || rAT == 5 || rAW == 5 || rAZ == 5))
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
  clBS = -17;
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
else if(rBN == "Remind")
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
if(((ISNONTEXT(rCF)|| NOT_ISNUMBER(rCF))&&rCF ===""))
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
else if((clAV >= 2 && rCI == "No") || ((clBA >= 2 || clBC > 2) && rCJ == "No") || (clBI >= 2 && rCK == "No"))
{
  clDV = 0;
}
else if((clAV >= 2 && rCI == "Yes") || ((clBA >= 2 || clBC >= 2) && rCJ == "Yes") || (clBI >=2 && rCK == "Yes"))   
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
else if((rCM == "Yes" || rCN == "Yes" || rCO == "Yes"))
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
  clEE = VLOOKUP(clDV, Informal_support, 2, FALSE);
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
  clEH = VLOOKUP(clDX, Informal_support, 2, FALSE);
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
  clEP = VLOOKUP(rCS, Informal_support, 2, FALSE);
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
if(rDL == "Yes")
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
if(rDP == "Yes")
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
  clFW = VLOOKUP(rDR,ALS,2,FALSE);
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
  clGR = 0;
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
  clGW = 0;
}
else if(rEQ == "YesSignificant")
{
  clGW = 1;
}
else if(rEQ == "YesSevere")
{
  clGW = 1.25;
}
else
{
  clGW = 0;
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
//=IF('Raw data'!ES59="Yes", 1, 
//IF('Raw data'!ES59="No", 0, 0))
if(rES == "Yes")
{
  clGY = 1
}
else if(rES == "No")
{
  clGY = 0;
}
else
{
  clGY = 0;
}

var clGZ = "";
//=IF('Raw data'!ET58=1, 1,
// IF('Raw data'!ET58=2, 2,
// IF('Raw data'!ET58=3, 3,
// IF('Raw data'!ET58=4, 4, 0))))
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
  clGZ = 3;
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
  // IF('Raw data'!EU58=4, 4, 0))))
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
//IF('Raw data'!EV58="No", 0, ""))
if(rEV == "Yes" )
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
if(ISNONTEXT(rCP) && NOT(ISNUMBER(rCP)|| rCP === ""))
{
  clHC = 0;
}
else if(rCP == "NoNeed")
{
  clHC = "NoNeed";
}
else if((((clAV >= 2 && rCI == "Yes") || (clBA >= 2 || clBC >= 2) && rCJ == "Yes") || clBI >= 2 && rCK == "Yes"))
{
  clHC = rCP;
}
else if((((clAV >= 2 && rCI == "No") || (clBA >= 2 || clBC > 2) && rCJ == "No") && clBI >= 2 && rCK == "No"))
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
//IF(OR(AND(AX58>=2,'Raw data'!CI58="No"),AND(BI58>=2,'Raw data'!CK58="No")),0,0))))
if(ISNONTEXT(rCR) && NOT(ISNUMBER(rCR)|| rCR === ""))
{
  clHD = 0;
}
else if(rCR == "NoNeed")
{
  clHD = "NoNeed";
}
else if((((clAX >= 2 && rCI == "Yes") || (clBA >= 2 || clBC >= 2) && rCJ == "Yes") || clBI >= 2 && rCK == "Yes"))
{
  clHD = rCR;
}
else if((clAX >= 2 && rCI == "No") || (clBI >= 2 && rCK == "No")) 
{
  clHD = 0;
}
else
{
  clHD = 0;
}

var clHE = "";
//=IF(OR(AND(ISNONTEXT(HC58),NOT(ISNUMBER(HC58))),HC58=""), 0, 
//IF(OR('Raw data'!CI58="Yes", 'Raw data'!CJ58="Yes", 'Raw data'!CK58="Yes"), VLOOKUP(HC58, Informal0to7, 2, FALSE), 0))
if(((ISNONTEXT(clHC)&& NOT_ISNUMBER(clHC) || clHC === "")))
{
  clHE = 0;
}
else if(rCI == "Yes" || rCJ == "Yes" || rCK == "Yes")
{
  clHE = VLOOKUP(clHC, Informal0to7, 2, FALSE)
}
else
{
  clHE = 0;
}

var clHF = "";
//=IF(OR(AND(ISNONTEXT(DU58),NOT(ISNUMBER(DU58))),DU58=""), 0, 
//IF(AND('Raw data'!CM58="Yes",'Raw data'!CO58="Yes"), VLOOKUP(DU58, Informal0to7, 3, FALSE)*2, 
//IF(OR('Raw data'!CM58="Yes",'Raw data'!CO58="Yes"), VLOOKUP(DU58, Informal0to7, 3, FALSE), 
//IF('Raw data'!CN58="Yes", VLOOKUP(DU58, Informal0to7, 5, FALSE), 0))))
if(((ISNONTEXT(clDU)&& NOT_ISNUMBER(clDU)|| clDU === "")))
{
  clHF = 0;
}
else if(rCM == "Yes" && rCO == "Yes")
{
  clHF = VLOOKUP(clDU, Informal0to7, 3, FALSE)*2;
}
else if(rCM == "Yes" || rCO == "Yes")
{
  clHF = VLOOKUP(clDU, Informal0to7, 3, FALSE)
}
else if(rCN == "Yes")
{
  clHF =  VLOOKUP(clDU, Informal0to7, 5, FALSE)
}
else
{
  clHF = 0;
}

var clHG = "";
//=IF(OR(AND(ISNONTEXT(DY58),NOT(ISNUMBER(DY58))),DY58=""), 0, 
//IF('Raw data'!CK58="Yes",VLOOKUP(DY58, Informal0to7, 2, FALSE),0))
if(ISNONTEXT((clDY) && NOT_ISNUMBER(clDY)|| clDY === ""))
{
  clHG = 0;
}
else if(rCK == "Yes")
{
  clHG = VLOOKUP(clDY, Informal0to7, 2, FALSE);
}
else
{
  clHG = 0;
}

var clHH = "";
//=IF(OR(AND(ISNONTEXT(DX59),NOT(ISNUMBER(DX59))),DX59=""), 0, 
//IF(AND('Raw data'!CM59="Yes",'Raw data'!CO59="Yes"), VLOOKUP(DX59, Informal0to7, 3, FALSE)*2, 
//IF(OR('Raw data'!CM59="Yes",'Raw data'!CO59="Yes"), VLOOKUP(DX59, Informal0to7, 3, FALSE), 
//IF('Raw data'!CN59="Yes", VLOOKUP(DX59, Informal0to7, 5, FALSE), 0))))
if(ISNONTEXT((clDX)&& NOT_ISNUMBER(clDX)|| clDX === ""))
{
  clHH = 0;
}
else if(rCM == "Yes" && rCO == "Yes")
{
  clHH = VLOOKUP(clDX, Informal0to7, 3, FALSE)*2;
}
else if(rCM == "Yes" || rCO == "Yes")
{
  clHH = VLOOKUP(clDX, Informal0to7, 3, FALSE);
}
else if(rCN == "Yes")
{
  clHH = VLOOKUP(clDX, Informal0to7, 5, FALSE);
}
else
{
  clHH = 0;
}

var clHI = "";
//=IF(OR(AND(ISNONTEXT(HD59),NOT(ISNUMBER(HD59))),HD59=""), 0, 
//IF(OR('Raw data'!CI59="Yes",'Raw data'!CK59="Yes"),VLOOKUP(HD59, Informal0to7, 2, FALSE),0))
if(ISNONTEXT((clHD) && NOT_ISNUMBER(clHD) || clHD === ""))
{
  clHI = 0;
}
else if(rCI == "Yes" || rCK == "Yes")
{
  clHI = VLOOKUP(clHD, Informal0to7, 2, FALSE);
}
else
{
  clHI = 0;
}

var clHJ = "";
//=IF(OR(AND(ISNONTEXT(EA59),NOT(ISNUMBER(EA59))),EA59=""), 0, 
//IF(AND('Raw data'!CM59="Yes",'Raw data'!CO59="Yes"), VLOOKUP(EA59, Informal0to7, 3, FALSE)*2, 
//IF(OR('Raw data'!CM59="Yes",'Raw data'!CO59="Yes"), VLOOKUP(EA59, Informal0to7, 3, FALSE), 
//IF('Raw data'!CN59="Yes", VLOOKUP(EA59, Informal0to7, 5, FALSE), 0))))
if(ISNONTEXT(clEA) && NOT(ISNUMBER(clEA) || clEA === ""))
{
  clHJ = 0;
}
else if(rCM == "Yes" && rCO == "Yes")
{
  clHJ = VLOOKUP(clEA, Informal0to7, 3, FALSE)*2;
}
else if(rCM == "Yes" || rCO == "Yes")
{
  clHJ = VLOOKUP(clEA, Informal0to7, 3, FALSE);
}
else if(rCN == "Yes")
{
  clHJ =  VLOOKUP(clEA, Informal0to7, 5, FALSE);
}
else
{
  clHJ = 0;
}

var clHK = "";
//=IF('Raw data'!CL59="Yes",1,0)
if(rCL == "Yes")
{
  clHK = 1;
}
else
{
  clHK = 0;
}

var clHL = ""
//=IF(OR(AND(ISNONTEXT('Raw data'!CS59),NOT(ISNUMBER('Raw data'!CS59))),'Raw data'!CS59=""), 0, VLOOKUP('Raw data'!CS59, Informal0to7, 4, FALSE))
if(ISNONTEXT(rCS) && NOT_ISNUMBER(rCS)|| rCS === "")
{
  clHL = 0;
}
else
{
  clHL = VLOOKUP(rCS, Informal0to7, 4, FALSE);
}

var clHM = "";
//=IF('Raw data'!CT59="Yes",2,0)
if(rCT == "Yes")
{
  clHM = 2;
}
else
{
  clHM = 0;
}

var clHN = "";
//=IF('Raw data'!CU59="Yes",2,0)
if(rCU == "Yes")
{
  clHN = 2;
}
else
{
  clHN = 0;
}

var clHO = "";
//=IF('Raw data'!CV59="Yes",2,0)
if(rCV == "Yes")
{
  clHO = 2;
}
else
{
  clHO = 0;
}

var clHP = "";
//=IF('Raw data'!CW59="Yes",1,0)
if(rCW == "Yes")
{
  clHP = 1;
}
else
{
  clHP = 0;
}

var clHQ = "";
//=IF('Raw data'!CX59="6to7act",21,
//IF('Raw data'!CX59="4to5act",15,
//IF('Raw data'!CX59="2to3act",6,
//IF('Raw data'!CX59="1act",3,
//IF('Raw data'!CX59="2nd carer",15,0)))))
if(rCX == "6to7act")
{
  clHQ = 21;
}
else if(rCX == "4to5act")
{
  clHQ = 15;
}
else if(rCX == "2to3act")
{
  clHQ = 6;
}
else if(rCX == "1act")
{
  clHQ = 3;
}
else if(rCX == "2nd carer")
{
  clHQ = 15;
}
else
{
  clHQ = 0;
}

var clHR = "";
//=IF('Raw data'!CY59="6to7act",21,
//IF('Raw data'!CY59="4to5act",15,
//IF('Raw data'!CY59="2to3act",6,
//IF('Raw data'!CY59="1act",3,
//IF('Raw data'!CY59="2nd carer",15,0)))))
if(rCY == "6to7act")
{
  clHR = 21;
}
else if(rCY == "4to5act")
{
  clHR = 15;
}
else if(rCY == "2to3act")
{
  clHR = 6;
}
else if(rCY == "1act")
{
  clHR = 3;
}
else if(rCY == "2nd carer")
{
  clHR = 15;
}
else
{
  clHR = 0;
}

var clHS = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!CZ59),NOT(ISNUMBER('Raw data'!CZ59))),'Raw data'!CZ59=""), 0, VLOOKUP('Raw data'!CZ59, Ongoing_Company, 2, FALSE))
if(ISNONTEXT(rCZ)&& NOT_ISNUMBER(rCZ)|| rCZ  === "")
{
  clHS = 0;
}
else
{
  clHS = VLOOKUP(rCZ, Ongoing_Company, 2, FALSE);
}

var clHT = "";
//=IF(OR(AND(ISNONTEXT('Raw data'!DA59),NOT(ISNUMBER('Raw data'!DA59))),'Raw data'!DA59=""), 0, VLOOKUP('Raw data'!DA59, Ongoing_Childcare, 2, FALSE))
if(ISNONTEXT(rDA) && NOT_ISNUMBER (rDA) || rDA === "")
{
  clHT = 0;
}
else
{
  clHT =  VLOOKUP(rDA, Ongoing_Childcare, 2, FALSE)
}

var clHU = "";
//=IF(DJ59<6,0,
//IF(FD59=100,105,
//IF(FD59=90,97,
//IF(FD59=75,81,
//IF(FD59=50,65,
//IF(FD59=25,49,
//IF(FD59=10,30,0)))))))
if(clDJ < 6)
{
  clHU = 0;
}
else if(clFD == 100)
{
  clHU = 105;
}
else if(clFD == 90)
{
  clHU = 97;
}
else if(clFD == 75)
{
  clHU = 81;
}
else if(clFD == 50)
{
  clHU = 65;
}
else if(clFD == 25)
{
  clHU = 49;
}
else if(clFD == 10)
{
  clHU = 30;
}
else
{
  clHU = 0;
}

var clHV = "";
//=IF('Raw data'!EW59="Yes", 1, 
//IF('Raw data'!EW59="No", 0, ""))
if(rEW == "Yes")
{
  clHV = 1;
}
else if(rEW == "No")
{
  clHV = 0;
}
else
{
  clHV = "";
}

var clHW = "";
//=IF('Raw data'!EX59="Yes", 1, 
//IF('Raw data'!EX59="No", 0, ""))
if(rEX == "Yes")
{
  clHW = 1;
}
else if(rEX == "No")
{
  clHW = 0;
}
else
{
  clHW = "";
}

var clHX = "";
//=IF('Raw data'!EY59="Yes", 1, 
//IF('Raw data'!EY59="No", 0, ""))
if(rEY == "Yes")
{
  clHX = 1;
}
else if(rEY == "No")
{
  clHX = 0;
}
else
{
  clHX = "";
}

var clHY = "";
//=IF('Raw data'!EZ59="Yes", 1, 
//IF('Raw data'!EZ59="No", 0, ""))
if(rEZ == "Yes")
{
  clHY = 1;
}
else if(rEZ == "No")
{
  clHY = 0;
}
else
{
  clHY = "";
}

var clHZ = "";
//=IF('Raw data'!FA59="Yes", 1, 
//IF('Raw data'!FA59="No", 0, ""))
if(rFA == "Yes")
{
  clHZ = 1;
}
else if(rFA == "No")
{
  clHZ = 0;
}
else
{
  clHZ = "";
}

var clIA = "";
//=IF('Raw data'!FB59="Yes", 1, 
//IF('Raw data'!FB59="No", 0, ""))
if(rFB == "Yes")
{
  clIA = 1;
}
else if(rFB == "No")
{
  clIA = 0;
}
else
{
  clIA = "";
}

var clIB = "";
//=IF('Raw data'!FC59="Yes", 1, 
//IF('Raw data'!FC59="No", 0, ""))
if(rFC == "Yes")
{
  clIB = 1;
}
else if(rFC == "No")
{
  clIB = 0;
}
else
{
  clIB = "";
}

var clIC = "";
//=IF('Raw data'!FD59="Yes", 1, 
//IF('Raw data'!FD59="No", 0, ""))
if(rFD == "Yes")
{
  clIC = 1;
}
else if(rFD == "No")
{
  clIC = 0;
}
else
{
  clIC = "";
}

var clID = "";
//=IF('Raw data'!FE59="Yes", 1, 
//IF('Raw data'!FE59="No", 0, ""))
if(rFE == "Yes")
{
  clID = 1;
}
else if(rFE == "No")
{
  clID = 0;
}
else
{
  clID = "";
}

var clIE = "";
//=IF('Raw data'!FF59="Yes", 1, 
//IF('Raw data'!FF59="No", 0, ""))
if(rFF == "Yes")
{
  clIE = 1;
}
else if(rFF == "No")
{
  clIE = 0;
}
else
{
  clIE = "";
}

var clIF = "";
//=IF('Raw data'!FG59="Yes",1,
//IF(OR('Raw data'!FG59="No",'Raw data'!FG59="n/a"),0,""))
if(rFG == "Yes")
{
  clIF = 1;
}
else if(rFG == "No" || rFG == "n/a")
{
  clIF = 0;
}
else
{
  clIF = "";
}




//Scores
var scB = "";
//=IF('Clean data'!FU58=7,1,
//IF('Clean data'!FU58=8,2,0))
if(clFU == 7)
{
  scB = 1;
}
else if(clFU == 8)
{
 scB = 2;
}
else
{
  scB = 0;
}

var scC = "";
//=IF(AND(B58=0,'Clean data'!F58>0,'Clean data'!F58<7),1,0)
if(scB == 0 && clFS > 0 && clFS < 7)
{
  scC = 1;
}
else
{
  scC = 0;
}


var scD = "";
//=IF(AND(ModelType>=2,NOT(OUT_DSTNeedsProfile=1), OR('Clean data'!CV58=1,'Clean data'!CT58>=3,AND('Clean data'!CE58>=5,'Clean data'!AQ58=1),'Clean data'!CW58>=4,'Clean data'!DG58=1)),2,
//IF(AND(ModelType>=2,NOT(OUT_DSTNeedsProfile=1), OR('Clean data'!CN58>=1,'Clean data'!BN58>=2,'Clean data'!AS58=1,'Clean data'!AQ58=1,'Clean data'!BT58=1,'Clean data'!BX58=1,'Clean data'!CE58>=4,'Clean data'!CT58>=2,'Clean data'!DE58>=3,'Clean data'!DA58>=4,'Clean data'!J58>=4)),1,0))
if(ModelType >= 2 && OUT_DSTNeedsProfile != 1 &&  (clCV == 1 || clCT >= 3 || (clCE >= 5 && clAQ == 1) || clCW >= 4 || clDG == 1 ))
{
  scD = 2;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile != 1 &&  (clCN >= 1 || clBN >= 2 || clAS == 1 || clAQ == 1 || clBT == 1 || clBX == 1 || clCE >= 4 || clCT >= 2 || clDE >= 3 || clDA >= 4 || clJ >= 4))
{
  scD = 1;
}
else
{
  scD = 0;
}




var scE = "";
//=IF(AND(ModelType>=2, OUT_DSTNeedsProfile=1, OR('Clean data'!GB58>=3,'Clean data'!GC58>=3,'Clean data'!GJ58>=4,'Clean data'!GK58>=4,'Clean data'!GL58>=3)),2,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,OR('Clean data'!GB58=2,'Clean data'!GC58=2,'Clean data'!GD58=2,'Clean data'!GE58>=2,'Clean data'!GF58>=2,'Clean data'!GG58=3,'Clean data'!GI58=4,'Clean data'!GJ58=3,'Clean data'!GK58=2,'Clean data'!GK58=3)),1,0))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 || clGB >= 3 || clGC >= 3 || clGJ >= 4 || clGK >= 4 || clGL >= 3)
{
  scE = 2;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 || clGB == 2 || clGC == 2 || clGD == 2 || clGE >= 2 || clGF >= 2 || clGG == 3 || clGI == 4 || clGJ == 3 || clGK == 2 || clGK == 3)
{
  scE = 1;
}
else
{
  scE = 0;
}

var scF = "";
//=IF(OR('Clean data'!FW58=12,'Clean data'!FW58=15),1,0)
if(clFW == 12 || clFW == 15)
{
  scF = 1;
}
else
{
  scF = 0;
}

var scG = "";
//=IF(OR('Clean data'!FW58=7,'Clean data'!FW58=9),1,0)
if(clFW == 7 || clFW == 9)
{
  scG = 1;
}
else
{
  scG = 0;
}


var scH = "";
//=IF(AND('Clean data'!CY58>=3,OR('Clean data'!BZ58=7,'Clean data'!CA58=7,'Clean data'!FU58=3)),1,0)
if(clCY >= 3 || clBZ == 7 || clCA == 7 || clFU == 3)
{
  scH = 1;
}
else
{
  scH = 0;
}


var scI = "";
//=IF(AND(ModelType<=2,SUM('Clean data'!FI58:FR58)<2),0,
//IF(AND(ModelType<=2,SUM('Clean data'!FI58:FR58)>1,'Clean data'!FT58=0),0,1))
if(ModelType <= 2 , (clFI + clFJ + clFK + clFL + clFM + clFN + clFO + clFP + clFQ + clFR)<2)
{
  scI = 0;
}
else if(ModelType <= 2 ,  (clFI + clFJ + clFK + clFL + clFM + clFN + clFO + clFP + clFQ + clFR && clFT == 0)>1 )
{
  scI = 0;
}
else
{
  scI = 1;
}


var scJ = "";
//=IF('Clean data'!O58=1,"Transport", 
//IF('Clean data'!O58>2,"1to1","Background"))
if(clO == 1)
{
  scJ = "Transport";
}
else if(clO > 2)
{
  scJ = "1to1";
}
else
{
  scJ = "Background";
}


var scK = "";
//=IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=1,J58="Background",OR('Clean data'!BZ58=13,'Clean data'!CA58=13,'Clean data'!BZ58=30,'Clean data'!CA58=30,'Clean data'!BZ58=3,'Clean data'!CA58=3,'Clean data'!BZ58=4,'Clean data'!CA58=4)),LD_Social_Background,
//IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=0,J58="Background",OUT_DSTNeedsProfile=1,E58=0),Default_Social_Background,
//IF(AND(J58="Background",ModelType>=2,OUT_DSTNeedsProfile=1,E58=1),Tier2_Social_Background,
//IF(AND(J58="Background",ModelType>=2,OUT_DSTNeedsProfile=1,E58=2),Tier3_Social_Background,
//IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=0,J58="Background",D58=0),Default_Social_Background,
//IF(AND(J58="Background",ModelType>=2,D58=1),Tier2_Social_Background,
//IF(AND(J58="Background",ModelType>=2,D58=2),Tier3_Social_Background,
//IF(AND(J58="Background",B58=0,C58=0),Default_Social_Background,
//IF(AND(J58="Background",B58=0,C58=1),WA_Social_Background,
//IF(AND(J58="Background",B58=1),LD_Social_Background,
//IF(AND(J58="Background",B58=2),MH_Social_Background,0)))))))))))
if(ModelType == 3 && CHC_LD_Safety_Switch == 1 && clJ == "Background"&& ( clBZ == 13 || clCA == 13 || clBZ == 30 || clCA == 30 || clBZ == 3 || clCA == 3 || clBZ == 4 || clCA == 4))
{
  scK = LD_Social_Background;
}
else if(ModelType == 3 && CHC_LD_Safety_Switch == 0 && clJ == "Background" && OUT_DSTNeedsProfile == 1 && clE == 0 )
{
  scK = Default_Social_Background;
}
else if(clJ == "Background" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clE == 1)
{
  scK = Tier2_Social_Background;
}
else if(clJ == "Background" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clE == 2)
{
  scK = Tier3_Social_Background;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && clJ == "Background" && clD == 0)
{
  scK = Default_Social_Background;
}
else if(clJ == "Background" && ModelType >= 2 && clD == 1)
{
  scK = Tier2_Social_Background;
}
else if(clJ == "Background" && ModelType >= 2 && clD == 2)
{
  scK = Tier3_Social_Background;
}
else if(clJ == "Background" && clB == 0 && clC == 0)
{
  scK = Default_Social_Background;
}
else if(clJ == "Background" && clB == 0 && clC == 1)
{
  scK = WA_Social_Background;
}
else if(clJ == "Background" && clB == 1)
{
  scK = LD_Social_Background;
}
else if(clJ == "Background" && clB == 2)
{
  scK = MH_Social_Background;
}
else
{
  scK = 0;
}

var scL = "";
//=IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=1, J58="1to1", 'Clean data'!O58>=3, OR('Clean data'!BZ58=13, 'Clean data'!CA58=13, 'Clean data'!BZ58=30, 'Clean data'!CA58=30, 'Clean data'!BZ58=3, 'Clean data'!CA58=3, 'Clean data'!BZ58=4, 'Clean data'!CA58=4)), LD_Social_1to1,
//IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=0, J58="1to1", OUT_DSTNeedsProfile=1, 'Clean data'!O58>=3,E58=0), Default_Social_1to1,
//IF(AND(J58="1to1",ModelType>=2,OUT_DSTNeedsProfile=1, 'Clean data'!O58>=3,E58=1),Tier2_Social_1to1,
//IF(AND(J58="1to1",ModelType>=2,OUT_DSTNeedsProfile=1, 'Clean data'!O58>=3,E58=2),Tier3_Social_1to1,
//IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=0, J58="1to1", 'Clean data'!O58>=3,D58=0), Default_Social_1to1,
//IF(AND(J58="1to1",ModelType>=2,'Clean data'!O58>=3,D58=1),Tier2_Social_1to1,
//IF(AND(J58="1to1",ModelType>=2,'Clean data'!O58>=3,D58=2),Tier3_Social_1to1,
//IF(AND(J58="1to1",'Clean data'!O58>=3,B58=0,C58=0),Default_Social_1to1,
//IF(AND(J58="1to1",'Clean data'!O58>=3,B58=0,C58=1),WA_Social_1to1,
//IF(AND(J58="1to1",'Clean data'!O58>=3,B58=1),LD_Social_1to1,
//IF(AND(J58="1to1",'Clean data'!O58>=3,B58=2),MH_Social_1to1,0)))))))))))
if(ModelType == 3 && CHC_LD_Safety_Switch == 1 && clJ == "1to1" && clO >= 3 (clBZ == 13 || clCA == 13 || clCA == 13 || clBZ == 30 || clCA == 30 || clBZ == 3 || clCA == 3 || clBZ == 4 || clCA == 4))
{
  scL = LD_Social_1to1;
}
else if(ModelType == 3 && CHC_LD_Safety_Switch == 0 && clJ == "1to1" && OUT_DSTNeedsProfile == 1 && clO >= 3 && clE == 0 )
{
  scL = Default_Social_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clO >= 3 && clE == 1)
{
  scL = Tier2_Social_1to1;
}
else if(clJ ==  "1to1" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clO >= 3 && clE == 2)
{
  scL= Tier3_Social_1to1;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && clJ == "1to1" && clO == 3 && clD == 0)
{
  scL = Default_Social_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && cl0 >= 3 && clD == 1)
{
  scL = Tier2_Social_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && clO >= 3 && clD == 2)
{
  scL = Tier3_Social_1to1;
}
else if(clJ == "1to1" && clO >= 3 && clB == 0 && clC == 0)
{
  scL = Default_Social_1to1;
}
else if(clJ == "1to1" && clO >= 3 && clB == 0 && clC == 1)
{
  scL = WA_Social_1to1;
}
else if(clJ == "1to1" && clO >= 3 && clB == 1)
{
  scL = LD_Social_1to1;
}
else if(clJ == "1to1" && clO >= 3 && clB == 2)
{
  scL = MH_Social_1to1
}
else
{
  scL = 0;
}


var scM = "";
//=IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=1, J58="1to1", 'Clean data'!O58=4, OR('Clean data'!BZ58=13, 'Clean data'!CA58=13, 'Clean data'!BZ58=30, 'Clean data'!CA58=30, 'Clean data'!BZ58=3, 'Clean data'!CA58=3, 'Clean data'!BZ58=4, 'Clean data'!CA58=4)),LD_Social_1to1,
//IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=0, J58="1to1", OUT_DSTNeedsProfile=1, 'Clean data'!O58=4,E58=0), Default_Social_1to1,
//IF(AND(J58="1to1",ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!O58=4,E58=1),Tier2_Social_1to1,
//IF(AND(J58="1to1",ModelType>=2,OUT_DSTNeedsProfile=1, 'Clean data'!O58=4,E58=2),Tier3_Social_1to1,
//IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=0, J58="1to1", 'Clean data'!O58=4,D58=0), Default_Social_1to1,
//IF(AND(J58="1to1",ModelType>=2,'Clean data'!O58=4,D58=1),Tier2_Social_1to1,
//IF(AND(J58="1to1",ModelType>=2,'Clean data'!O58=4,D58=2),Tier3_Social_1to1,
//IF(AND(J58="1to1",'Clean data'!O58=4,B58=0,C58=0),Default_Social_1to1,
//IF(AND(J58="1to1",'Clean data'!O58=4,B58=0,C58=1),WA_Social_1to1,
//IF(AND(J58="1to1",'Clean data'!O58=4,B58=1),LD_Social_1to1,
//IF(AND(J58="1to1",'Clean data'!O58=4,B58=2),MH_Social_1to1,0)))))))))))
if(ModelType == 3 && CHC_LD_Safety_Switch == 1 && clJ == "1to1" && clO == 4 (clBZ == 13 || clCA == 13 || clBZ == 30 || clCA == 30 || clBZ == 3 || clBZ == 3 || clCA == 3 || clBZ == 4 || clCA == 4))
{
  scM = LD_Social_1to1;
}
else if(ModelType == 3 && CHC_LD_Safety_Switch == 0 && clJ == "1to1" && OUT_DSTNeedsProfile == 1 && clO == 4 && clE == 0 )
{
  scM = Default_Social_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clO == 4 && clE == 1)
{
  scM = Tier2_Social_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clO == 4 && clE == 2)
{
  scM= Tier3_Social_1to1;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && clJ == "1to1" && clO == 4 && clD == 0)
{
  scM = Default_Social_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && cl0 >= 4 && clD == 1)
{
  scM = Tier2_Social_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && clO == 4 && clD == 2)
{
  scM = Tier3_Social_1to1;
}
else if(clJ == "1to1" && clO == 4 && clB == 0 && clC == 0)
{
  scM = Default_Social_1to1;
}
else if(clJ == "1to1" && clO == 4 && clB == 0 && clC == 1)
{
  scM = WA_Social_1to1;
}
else if(clJ == "1to1" && clO == 4 && clB == 1)
{
  scM = LD_Social_1to1;
}
else if(clJ == "1to1" && clO == 4 && clB == 2)
{
  scM = MH_Social_1to1
}
else
{
  scM = 0;
}

var scN = "";
//=IF('Clean data'!V58=1,"Transport", 
//IF('Clean data'!V58>2,"1to1","Background"))
if(clV == 1)
{
  scN = "Transport";
}
else if((clV > 2))
{
  scN = "1to1";
}
else
{
  scN = "Background";
}

var scO = "";
//=IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=1, N58="Background",OR('Clean data'!BZ58=13,'Clean data'!CA58=13,'Clean data'!BZ58=30,'Clean data'!CA58=30,'Clean data'!BZ58=3,'Clean data'!CA58=3,'Clean data'!BZ58=4,'Clean data'!CA58=4)),LD_Work_edu_Background,
//IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=0, N58="Background",OUT_DSTNeedsProfile=1,E58=0), Default_Work_edu_Background,
//IF(AND(N58="Background",ModelType>=2,OUT_DSTNeedsProfile=1,E58=1),Tier2_Work_edu_Background,
//IF(AND(N58="Background",ModelType>=2,OUT_DSTNeedsProfile=1,E58=2),Tier3_Work_edu_Background,
//IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=0, N58="Background",D58=0), Default_Work_edu_Background,
//IF(AND(N58="Background",ModelType>=2,D58=1),Tier2_Work_edu_Background,
//IF(AND(N58="Background",ModelType>=2,D58=2),Tier3_Work_edu_Background,
//IF(AND(N58="Background",B58=0,C58=0),Default_Work_edu_Background,
//IF(AND(N58="Background",B58=0,C58=1),WA_Work_edu_Background,
//IF(AND(N58="Background",B58=1),LD_Work_edu_Background,
//IF(AND(N58="Background",B58=2),MH_Work_edu_Background,0)))))))))))
if(ModelType == 3 && CHC_LD_Safety_Switch == 1 && clN == "Background" && (clBZ == 13 || clCA == 13 || clBZ == 30 || clCA == 30 || clBZ == 3 || clCA == 3 || clBZ == 4 || clCA == 4))
{
  scO = LD_Work_edu_Background;
}
else if(ModelType == 3 && CHC_LD_Safety_Switch == 0 && clN == "Background" && OUT_DSTNeedsProfile == 1 && clE == 0 )
{
  scO = Default_Work_edu_Background;
}
else if(clJ == "Background" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clE == 1)
{
  scO  = Tier2_Work_edu_Background;
}
else if(clJ == "Background" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 &&  clE == 2)
{
  scO = Tier3_Work_edu_Background;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && clN == "Background" &&  clD == 0)
{
  scO = Default_Work_edu_Background;
}
else if(clN == "Background" && ModelType >= 2 && clD == 1)
{
  scO = Tier2_Work_edu_Background;
}
else if(clN == "Background" && ModelType >= 2 &&  clD == 2)
{
  scO = Tier3_Social_1to1;
}
else if(clN == "Background" && clB == 0 && clC == 0)
{
  scO = Default_Work_edu_Background;
}

else if(clN == "Background" && clB == 0 && clC == 1)
{
  scO = WA_Work_edu_Background;
}

else if(clN == "Background" && clB == 1)
{
  scO = LD_Work_edu_Background;
}
else if(clN == "Background" && clB == 2)
{
  scO =MH_Work_edu_Background;
}
else
{
  scO = 0;
}


var scP = "";
//=IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=1, N58="1to1",'Clean data'!V58>=3, OR('Clean data'!BZ58=13, 'Clean data'!CA58=13, 'Clean data'!BZ58=30, 'Clean data'!CA58=30, 'Clean data'!BZ58=3, 'Clean data'!CA58=3, 'Clean data'!BZ58=4, 'Clean data'!CA58=4)), LD_Work_edu_1to1,
//IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=0, N58="1to1",OUT_DSTNeedsProfile=1,'Clean data'!V58>=3,E58=0), Default_Work_edu_1to1,
//IF(AND(N58="1to1",ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!V58>=3,E58=1),Tier2_Work_edu_1to1,
//IF(AND(N58="1to1",ModelType>=2,OUT_DSTNeedsProfile=1, 'Clean data'!V58>=3,E58=2),Tier3_Work_edu_1to1,
//IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=0, N58="1to1",'Clean data'!V58>=3,D58=0), Default_Work_edu_1to1,
//IF(AND(N58="1to1",ModelType>=2,'Clean data'!V58>=3,D58=1),Tier2_Work_edu_1to1,
//IF(AND(N58="1to1",ModelType>=2,'Clean data'!V58>=3,D58=2),Tier3_Work_edu_1to1,
//IF(AND(N58="1to1",'Clean data'!V58>=3,B58=0,C58=0),Default_Work_edu_1to1,
//IF(AND(N58="1to1",'Clean data'!V58>=3,B58=0,C58=1),WA_Work_edu_1to1,
//IF(AND(N58="1to1",'Clean data'!V58>=3,B58=1),LD_Work_edu_1to1,
//IF(AND(N58="1to1",'Clean data'!V58>=3,B58=2),MH_Work_edu_1to1,0)))))))))))
if(ModelType == 3 && CHC_LD_Safety_Switch == 1 && clN == "1to1" && clV > 3 ( clBZ == 13 || clCA == 13 || clBZ == 30 || clCA == 30 || clBZ == 3 || clCA == 3 || clBZ == 4 || clCA == 4))
{
  scP = LD_Work_edu_1to1;
}
else if(ModelType == 3 && CHC_LD_Safety_Switch == 0 && clN == "1to1" && OUT_DSTNeedsProfile == 1 && clV > 3 && clE == 0 )
{
  scP = Default_Work_edu_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clV > 3 && clE == 1)
{
  scP  = Tier2_Work_edu_1to1;
}
else if(clJ == "1to1" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 &&  clV > 3 && clE == 2)
{
  scP = Tier3_Work_edu_1to1;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && clN == "1to1" &&  clD == 0)
{
  scP = Default_Work_edu_1to1;
}
else if(clN == "1to1" && ModelType >= 2 && clV >= 3 && clD == 1)
{
  scP = Tier2_Work_edu_1to1;
}
else if(clN == "1to1" && ModelType >= 2 &&  clV >= 3 && clD == 2 )
{
  scP = Tier3_Work_edu_1to1;
}
else if(clN == "1to1" && clV == 3 && clB == 0 && clC == 0)
{
  scP  = Default_Work_edu_1to1;
}
else if(clN == "1to1" && clV >= 3 && clB == 0 && clC == 1)
{
  scP = WA_Work_edu_1to1;
}

else if(clN =="1to1" && clV >= 3 && clB == 1)
{
  scP = LD_Work_edu_1to1;
}
else if(clN == "1to1" && clV >= 3 && clB == 2)
{
  scP = MH_Work_edu_1to1;
}
else
{
  scP = 0;
}


var scQ = "";
//=IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=1, N58="1to1", 'Clean data'!V58=4, OR('Clean data'!BZ58=13, 'Clean data'!CA58=13, 'Clean data'!BZ58=30, 'Clean data'!CA58=30, 'Clean data'!BZ58=3, 'Clean data'!CA58=3, 'Clean data'!BZ58=4, 'Clean data'!CA58=4)),LD_Social_1to1,
//IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=0, N58="1to1", OUT_DSTNeedsProfile=1, 'Clean data'!V58=4,E58=0), Default_Work_edu_1to1,
////IF(AND(N58="1to1",ModelType>=2,OUT_DSTNeedsProfile=1, 'Clean data'!V58=4,E58=1),Tier2_Work_edu_1to1,
//IF(AND(N58="1to1",ModelType>=2,OUT_DSTNeedsProfile=1, 'Clean data'!V58=4,E58=2),Tier3_Work_edu_1to1,
//IF(AND(ModelType=3, CHC_LD_SafetySocial_Switch=0, N58="1to1", 'Clean data'!V58=4,D58=0), Default_Work_edu_1to1,
//IF(AND(N58="1to1",ModelType>=2,'Clean data'!V58=4,D58=1),Tier2_Work_edu_1to1,
//IF(AND(N58="1to1",ModelType>=2,'Clean data'!V58=4,D58=2),Tier3_Work_edu_1to1,
//IF(AND(N58="1to1",'Clean data'!V58=4,B58=0,C58=0),Default_Work_edu_1to1,
//IF(AND(N58="1to1",'Clean data'!V58=4,B58=0,C58=1),WA_Work_edu_1to1,
//IF(AND(N58="1to1",'Clean data'!V58=4,B58=1),LD_Work_edu_1to1,
//IF(AND(N58="1to1",'Clean data'!V58=4,B58=2),MH_Work_edu_1to1,0)))))))))))
if(ModelType == 3 && CHC_LD_Safety_Switch == 1 && clN == "1to1" && clV == 4 ( clBZ == 13 || clCA == 13 || clBZ == 30 || clCA == 30 || clBZ == 3 || clCA == 3 || clBZ == 4 || clCA == 4))
{
  scQ = LD_Social_1to1;
}
else if(ModelType == 3 && CHC_LD_Safety_Switch == 0 && clN == "1to1" && OUT_DSTNeedsProfile == 1 && clV == 4 && clE == 0 )
{
  scQ = Default_Work_edu_1to1;
}
else if(clN == "1to1" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 && clV == 4 && clE == 1)
{
  scQ  = Tier2_Work_edu_1to1;
}
else if(clN == "1to1" && ModelType >= 2 && OUT_DSTNeedsProfile == 1 &&  clV == 4 && clE == 2)
{
  scQ = Tier3_Work_edu_1to1;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && clN == "1to1" &&  clV == 4 && clD == 0)
{
  scQ = Default_Work_edu_1to1;
}
else if(clN == "1to1" && ModelType >= 2 && clV == 4 && clD == 1)
{
  scQ = Tier2_Work_edu_1to1;
}
else if(clN == "1to1" && ModelType >= 2 &&  clV == 4 && clD == 2 )
{
  scQ = Tier3_Work_edu_1to1;
}
else if(clN == "1to1" && clV == 4 && clB == 0 && clC == 0)
{
  scQ  = Default_Work_edu_1to1;
}
else if(clN == "1to1" && clV == 4 && clB == 0 && clC == 1)
{
  scQ = WA_Work_edu_1to1;
}
else if(clN =="1to1" && clV == 4 && clB == 1)
{
  scQ = LD_Work_edu_1to1;
}
else if(clN == "1to1" && clV == 4 && clB == 2)
{
  scQ = MH_Work_edu_1to1;
}
else
{
  scQ = 0;
}

var scR = "";
//=IF(OR('Clean data'!DJ58>=8, 'Clean data'!O58>=3), "High", "Standard")
if(clDJ >= 8 || clO >= 3)
{
  scR =  "High";
}
else
{
  scR = "Standard";
}

var scS = "";
//=IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=1,R58="Standard",OR('Clean data'!BZ58=13,'Clean data'!CA58=13,'Clean data'!BZ58=30,'Clean data'!CA58=30,'Clean data'!BZ58=3,'Clean data'!CA58=3,'Clean data'!BZ58=4,'Clean data'!CA58=4)),LD_Safety_Day_Standard,
//IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=0,R58="Standard",OUT_DSTNeedsProfile=1,E58=0),Default_Safety_Day_Standard,
//IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=0,R58="Standard",D58=0),Default_Safety_Day_Standard,
//IF(AND(R58="Standard",B58=0,C58=0),Default_Safety_Day_Standard,
//IF(AND(R58="Standard",B58=0,C58=1),WA_Safety_Day_Standard,
//IF(AND(R58="Standard",B58=1),LD_Safety_Day_Standard,
//IF(AND(R58="Standard",B58=2),MH_Safety_Day_Standard,0)))))))
if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 1 && scR == "Standard"&& (clBZ == 13 || clCA == 13 || clBZ == 30 || clCA == 30 || clBZ == 3 || clCA == 3 || clBZ == 4 || clCA == 4))
{
  scS = LD_Safety_Day_Standard;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && scR == "Standard" && OUT_DSTNeedsProfile == 1 && scE == 0 )
{
  scS = Default_Safety_Day_Standard;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && scR == "Standard" && scD == 0)
{
  scS = Default_Safety_Day_Standard;
}
else if(scR == "Standard" && scB == 0 && scC == 0)
{
  scS = Default_Safety_Day_Standard;
}
else if(scR == "Standard" && scB == 0 && scC == 1)
{
  scS = WA_Safety_Day_Standard;
}
else if(scR == "Standard" && scB == 1 )
{
  scS = LD_Safety_Day_Standard;
}
else if(scR == "Standard" && scB == 2)
{
  scS = MH_Safety_Day_Standard;
}
else
{
  scS = 0;
}


var scT = "";
//=IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=1,R58="High",OR('Clean data'!BZ58=13,'Clean data'!CA58=13,'Clean data'!BZ58=30,'Clean data'!CA58=30,'Clean data'!BZ58=3,'Clean data'!CA58=3,'Clean data'!BZ58=4,'Clean data'!CA58=4)),LD_Safety_Day_High,
//IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=0,R58="High",OUT_DSTNeedsProfile=1,E58=0),Default_Safety_Day_High,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E58=1),Enhanced_Tier2_Safety_Day,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E58=2),Enhanced_Tier3_Safety_Day,
//IF(AND(ModelType=3,CHC_LD_SafetySocial_Switch=0,R58="High",D58=0),Default_Safety_Day_High,
//IF(AND(ModelType>=2,D58=1),Enhanced_Tier2_Safety_Day,
//IF(AND(ModelType>=2,D58=2),Enhanced_Tier3_Safety_Day,
//IF(AND(R58="High",B58=0,C58=0),Default_Safety_Day_High,
//IF(AND(R58="High",B58=0,C58=1),WA_Safety_Day_High,
//IF(AND(R58="High",B58=1),LD_Safety_Day_High,
//IF(AND(R58="High",B58=2),MH_Safety_Day_High,0)))))))))))
if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 1 && scR == "High" && (clBZ == 13 || clCA == 13 || clBZ == 30 || clCA == 30 || clBZ == 3 || clCA == 3 || clBZ == 4 || clCA == 4))
{
  scT = LD_Safety_Day_High;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && scR == "High" && OUT_DSTNeedsProfile == 1 && scE == 0)
{
  scT = Default_Safety_Day_High;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && scE == 1)
{
  scT = Enhanced_Tier2_Safety_Day;
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && scE == 2)
{
  scT = Enhanced_Tier3_Safety_Day;
}
else if(ModelType == 3 && CHC_LD_SafetySocial_Switch == 0 && scR == "High" && scD == 0)
{
  scT = Default_Safety_Day_High;
}
else if(ModelType >= 2 && scD == 1)
{
  scT = Enhanced_Tier2_Safety_Day;
}
else if(ModelType >= 2 && scD == 2)
{
  scT = Enhanced_Tier3_Safety_Day;
}
else if(scR == "High" && scB == 0 && scC == 0)
{
  scT = Default_Safety_Day_High;
}
else if(scR == "High" && scB == 0 && scC == 1)
{
  scT = WA_Safety_Day_High
}
else if(scR == "High" && scB == 1)
{
  scT = LD_Safety_Day_High;
}
else if(scR == "High" && scB == 2)
{
  scT = MH_Safety_Day_High;
}
else
{
  scT = 0;
}

var scU = "";
//=IF(J58="Transport",Default_Social_Transport,MAX(K58,L58))
if(scJ == "Transport")
{
  scU = Default_Social_Transport;
}
else
{
  scU = Math.max(scK, scL)
}

 var scV = "";
//=IF(N58="Transport",Default_Work_edu_Transport,MAX(O58,P58))
if(scN == "Transport")
{
  scV = Default_Work_edu_Transport;
}
else
{
  scV = Math.max(scO, scP)
}

var scW = "";
//=MAX(S58,T58)
{
  scW = Math.max(scS, scT)
}
var scZ =  "";
//=IF(B58=1,LD_Homecare_Rate,
//IF(B58=2,MH_Homecare_Rate,Homecare_Rate))
if(scB == 1)
{
  scZ = LD_Homecare_Rate;
}
else if(scB == 2)
{
  scZ = MH_Homecare_Rate;
}
else
{
  scZ = Homecare_Rate;
}

var scX = "";
//=IF(Extracare_Homecare_rate>0,Extracare_Homecare_rate,Z58)
if(Extracare_Homecare_rate > 0 )
{
  scX = Extracare_Homecare_rate;
}
else
{
  scX = scZ;
}

var scY = "";
//=IF(SH_Homecare_rate>0,SH_Homecare_rate,Z58)
if(SH_Homecare_rate > 0 )
{
  scY = SH_Homecare_rate;
}
else
{
  scY = scZ;
}

var scAA = "";
//=IF(PA_Homecare_rate>0,PA_Homecare_rate,Z58)
if(PA_Homecare_rate > 0)
{
  scAA = PA_Homecare_rate;
}
else 
{
  scAA = scZ;
}


var scAB = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E58=2),Enhanced_Tier3_Homecare_rate,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E58=1),Enhanced_Tier2_Homecare_rate,
//IF(AND(ModelType>=2,D58=2),Enhanced_Tier3_Homecare_rate,
//IF(AND(ModelType>=2,D58=1),Enhanced_Tier2_Homecare_rate,Z58))))
if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && scE == 2)
{
  scAB = Enhanced_Tier3_Homecare_rate;
}
else if(ModelType>= 2 && OUT_DSTNeedsProfile == 1 && scE == 1)
{
  scAB = Enhanced_Tier2_Homecare_rate;
}
else if(ModelType >= 2 && scD == 2)
{
  scAB = Enhanced_Tier3_Homecare_rate;
}
else if(ModelType >=2 && scD == 1)
{
  scAB = Enhanced_Tier2_Homecare_rate;
}
else
{
  scAB = scZ;
}

var scAC = "";
//=MAX(Z58:AB58)
{
  scAC = Math.max(scZ, scAB);
}

var scAD = "";
//=IF('Clean data'!AN58=0,0,
//IF('Clean data'!AN58=2,1.5,
//IF('Clean data'!AN58=3,3,
//IF('Clean data'!AN58=4,3,
//IF('Clean data'!AN58=5,6,0)))))
if(clAN == 0)
{
  scAD = 0;
}
else if(clAN == 2)
{
  scAD = 1.5;
}
else if(clAN == 3)
{
  scAD = 3;
}
else if(clAN == 4)
{
  scAD = 3
}
else if(clAN == 5)
{
  scAD = 6
}
else
{
  scAD = 0;
}

var scAE = "";
//=IF('Clean data'!AV58=0,0,
//IF('Clean data'!AV58=2,1.5,
//IF('Clean data'!AV58=3,3,
//IF('Clean data'!AV58=4,3,
//IF('Clean data'!AV58=5,6,0)))))
if(clAV == 0)
{
  scAE = 0;
}
else if(clAV == 2)
{
  scAE = 1.5;
}
else if(clAV == 3)
{
  scAE = 3;
}
else if(clAV == 4)
{
  scAE = 3;
}
else if(clAV == 5)
{
  scAE = 6;
}
else 
{
  scAE = 0;
}

scAF = "";
//=IF('Clean data'!AX58=0,0,
//IF('Clean data'!AX58=2,1.5,
//IF('Clean data'!AX58=3,3,
//IF('Clean data'!AX58=4,3,
//IF('Clean data'!AX58=5,6,0)))))
if(clAX == 0)
{
  scAF = 0;
}
else if(clAX == 2)
{
  scAF = 1.5;
}
else if(clAX == 3)
{
  scAF = 3;
}
else if(clAX == 4)
{
  scAF = 3;
}
else if(clAX == 5)
{
  scAF = 6;
}
else
{
  scAF = 0;
}

var scAG = "";
//=IF('Clean data'!BA58=0,0,
//IF('Clean data'!BA58=2,1.5,
//IF('Clean data'!BA58=3,3,
//IF('Clean data'!BA58=4,3,
//IF('Clean data'!BA58=5,6,0)))))
if(clBA == 0)
{
  scAG = 0;
}
else if(clBA == 2)
{
  scAG = 1.5;
}
else if(clBA == 3)
{
  scAG = 3;
}
else if(clBA == 4)
{
  scAG = 3;
}
else if(clBA == 5)
{
  scAG = 6;
}
else 
{
  scAG = 0;
}

var scAH = "";
//=IF('Clean data'!DV58="NoNeed",0,
//IF('Clean data'!BC58=0,0,
//IF(AND('Clean data'!BC58>=2,'Clean data'!BF58>=6),3,
//IF(AND('Clean data'!BC58>=2,'Clean data'!BF58=0.1),0,
//IF(AND('Clean data'!BC58>=2,'Clean data'!BF58>=1,'Clean data'!BF58<6),'Clean data'!BF58/2,0)))))
if(clDV == "NoNeed" )
{
  scAH = 0;
}
else if(clBC == 0)
{
  scAH = 0;
}
else if(clBC >= 2 && clBF >= 6)
{
  scAH = 3;
}
else if(clBC >= 2 && clBF == 0.1)
{
  scAH = 0;
}
else if(clBC >= 2 && clBF >= 1 && clBF < 6)
{
  scAH = clBF/2
}
else
{
  scAH = 0;
}

var scAI = "";
//=IF('Clean data'!BI58=0,0,
//IF(AND('Clean data'!BI58>=2,'Clean data'!BL58>=7),3,
//IF(AND('Clean data'!BI58>=2,'Clean data'!BL58<7),('Clean data'!BL58/7)*3,0)))
if(clBI == 0)
{
  scAI = 0;
}
else if(clBI >= 2 && clBL >= 7)
{
  scAI = 3;
}
else if(clBI >= 2 && clBL < 7)
{
  scAI = (clBL/7)*3
}
else
{
  scAI = 0;
}

var scAJ = "";
//=IF('Clean data'!BQ58=0,0,
//IF('Clean data'!BQ58=2,1.5,
//IF('Clean data'!BQ58=3,3,
//IF('Clean data'!BQ58=4,3,
//IF('Clean data'!BQ58=5,6,0)))))
if(clBQ == 0)
{
  scAJ = 0;
}
else if(clBQ == 2)
{
  scAJ = 1.5;
}
else if(clBQ == 3)
{
  scAJ = 3;
}
else if(clBQ == 4)
{
  scAJ = 3;
}
else if(clBQ == 5)
{
  scAJ = 6;
}
else
{
  scAJ = 0;
}

var scAK = "";
///=IF(AND(OR('Clean data'!BL58>=0.05,  'Clean data'!BF58>0.05),'Clean data'!BL58<=7, 'Clean data'!BF58<=7, 'Clean data'!EI58=100, 'Clean data'!EM58=100), 1,
// IF(AND(OR('Clean data'!BL58>=0.05,  'Clean data'!BF58>0.05),'Clean data'!BL58<=7, 'Clean data'!BF58<=7, NOT(AND(AE58>=1.5, AF58>=1.5)), 'Clean data'!EE58=100, 'Clean data'!EM58=100), 2,
// IF(AND(OR('Clean data'!BL58>=0.05,  'Clean data'!BF58>0.05),'Clean data'!BL58<=7, 'Clean data'!BF58<=7, NOT(AND(AE58>=1.5, AF58>=1.5)),'Clean data'!EE58=100, 'Clean data'!EI58=100), 3, 1)))
if((clBL >= 0.05 || clBF > 0.05)&& clBL <= 7 && clBF <= 7 && clEI == 100 && clEM == 100)
{
  scAK = 1;
}
else if((clBL >= 0.05 || clBF > 0.05)&& clBL <= 7 && clBF <= 7 && ((scAE<1.5||scAF<1.5))&& clEE == 100 && clEM == 100)
{
  scAK = 2;
}
else if((clBL >= 0.05 || clBF > 0.05)&& clBL <= 7 && clBF <= 7 && ((scAE>=1.5||scAF>=1.5))&& clEE == 100 && clEM == 100)
{
  scAK = 3;
}
else
{
  scAK = 1;
}



var scAL = "";
//=IF('Clean data'!DV58="NoNeed",0,
//IF(AND(AK58=1,OR('Clean data'!AV58>=3,'Clean data'!BA58>=3,AND('Clean data'!BC58>=3,'Clean data'!BF58>=7),AND('Clean data'!BI58>=3,'Clean data'!BL58>=7))),1,
//IF(AND(AK58=1,OR('Clean data'!AV58=2,'Clean data'!BA58=2,'Clean data'!BI58=2,AND('Clean data'!BI58>=3,'Clean data'!BL58=0.1))),0.5,
///IF(AND(AK58=1,'Clean data'!BC58>=2,'Clean data'!AV58=0,'Clean data'!BA58=0,'Clean data'!BI58=0),'Clean data'!BF58/7,0))))
if(clDV == "NoNeed")
{
  scAL = 0;
}
else if(scAK == 1 && (clAV >= 3 || clBA >= 3 || (clBC >= 3 && clBF >= 7 )&& (clBI >= 3 && clBL >= 7)))
{
  scAL = 1;
}
else if(scAK == 1 && (clAV == 2 || clBA == 2 || (clBI == 2 && clBI >= 3) && clBL == 0.1))
{
  scAL = 0.5;
}
else if(scAK == 1 && (clBC >= 2 && clAV == 0 && (clBA == 0 && clBI == 0 )))
{
  scAL = clBF/7
}
else
{
  scAL = 0;
}

var scAM = "";
//=IF(OR('Clean data'!BL58>=42), 1, 0)
if(clBL >= 42)
{
  scAM = 1;
}
else
{
  scAM = 0;
}

var scAN = "";
//=IF('Clean data'!DY58="NoNeed",0,
//IF(OR('Clean data'!BL58>=21,AK58=2),1,0))
if(clDY == "NoNeed")
{
  scAN = 0;
}
else if(clBL >= 21 || scAK == 2)
{
  scAN = 1;
}
else
{
  scAN = 0;
}

var scAO = "";
//=IF(OR('Clean data'!BL58>=35), 1, 0)
if(clBL >= 35)
{
  scAO = 1;
}
else
{
  scAO = 0;
}

var scAP = "";
//=IF(OR('Clean data'!BL58>=28),1,0)
if(clBL >= 28)
{
  scAP = 1;
}
else
{
  scAP = 0;
}


var scAQ = "";
//=IF('Clean data'!EB58="NoNeed",0,
//IF(AND(AK58=3,OR('Clean data'!AX58>=3,'Clean data'!BA58>=3,'Clean data'!BC58>=3,AND('Clean data'!BI58>=3,'Clean data'!BL58>=7))),1,
//IF(AND(AK58=3,OR('Clean data'!AX58=2,'Clean data'!BA58=2,'Clean data'!BI58=2,AND('Clean data'!BI58>=3,'Clean data'!BL58=0.1))),0.5,
//IF(AND(AK58=3,'Clean data'!BC58>=2,'Clean data'!AX58=0,'Clean data'!BA58=0,'Clean data'!BI58=0),'Clean data'!BF58/7,
//IF(OR('Clean data'!AX58>=3,'Clean data'!BF58>=14,'Clean data'!BL58>=14),1,
//IF('Clean data'!AX58=2,0.5,0))))))
if(clEB == "NoNeed")
{
  scAQ = 0;
}
else if(scAK == 3 && (clAX >= 3 || clBA >= 3 || clBC >= 3 &&(clBI >= 3 && clBL >= 7)))
{
  scAQ = 1;
}
else if(scAK == 3 && (clAX == 2 || clBA == 2 || clBI == 2 &&(clBI >= 3 && clBL == 0.1)))
{
  scAQ = 0.5;
}
else if(scAK == 3 && clBC >= 2 && clAX == 0 && clBA == 0 && clBI == 0)
{
  scAQ = clBF/7;
}
else if(clAX >= 3 || clBF >= 14 || clBL >= 14)
{
  scAQ = 1;
}
else if(clAX == 2)
{
  scAQ = 0.5;
}
else
{
  scAQ = 0;
}


var scAR = "";
//=SUM(AM58:AP58)
{
  scAR = (scAM + scAN + scAO + scAP);
}

var scAS = "";
//=SUM(AQ58)
{
  scAS = scAQ;
}


var scAT = "";
//=IF('Clean data'!DV58="NoNeed",0,
//IF(AND('Clean data'!AV58>=3,'Clean data'!BA58=0,OR('Clean data'!BC58=0,'Clean data'!BF58<=0.1),'Clean data'!BI58=0),3.5,
//IF(AND('Clean data'!AV58=2,'Clean data'!BA58=0,OR('Clean data'!BC58=0,'Clean data'!BF58<=0.1),'Clean data'!BI58=0),1.5,
//IF(AND('Clean data'!AV58=0,'Clean data'!BA58>=3,OR('Clean data'!BC58=0,'Clean data'!BF58<=0.1),'Clean data'!BI58=0),3.5,
//IF(AND('Clean data'!AV58=0,'Clean data'!BA58=2,OR('Clean data'!BC58=0,'Clean data'!BF58<=0.1),'Clean data'!BI58=0),1.5,
//IF(AND('Clean data'!AV58=0,'Clean data'!BA58<=2,'Clean data'!BC58>=2,'Clean data'!BF58>=7,'Clean data'!BI58=0),3.5,
//IF(AND('Clean data'!AV58=0,'Clean data'!BA58=0,'Clean data'!BC58>=2,'Clean data'!BF58=0.1,'Clean data'!BI58=0),0,
//IF(AND('Clean data'!AV58=0,'Clean data'!BA58=0,'Clean data'!BC58>=2,'Clean data'!BF58<7,'Clean data'!BI58=0),('Clean data'!BF58/2),
//IF(AND('Clean data'!AV58=0,'Clean data'!BA58=0,OR('Clean data'!BC58=0,'Clean data'!BF58<=0.1),'Clean data'!BI58>=2,'Clean data'!BL58>=7),3.5,
//IF(AND('Clean data'!AV58=0,'Clean data'!BA58=0,OR('Clean data'!BC58=0,'Clean data'!BF58<=0.1),'Clean data'!BI58>=2,'Clean data'!BL58<7),1.5,0))))))))))
if(clDV == "NoNeed")
{
  scAT = 0;
}
else if(clAV >= 3 && clBA == 0 &&(clBC == 0 || clBF <= 0.1) && clBI == 0)
{
  scAT = 3.5;
}
else if(clAV == 2 && clBA == 0 &&(clBC == 0 || clBF <= 0.1) && clBI == 0)
{
  scAT = 1.5;
}
else if(clAV == 0 && clBA >= 3 &&(clBC == 0 || clBF <= 0.1) && clBI == 0)
{
  scAT = 3.5;
}
else if(clAV == 0 && clBA == 2 &&(clBC == 0 || clBF <= 0.1) && clBI == 0)
{
  scAT = 1.5;
}
else if(clAV == 0 && clBA <= 2 && clBC >= 2 && clBF >= 7 && clBI == 0)
{
  scAT = 3.5;
}
else if(clAV == 0 && clBA == 0 && clBC >= 2 && clBF == 0.1 && clBI == 0)
{
  scAT = 0;
}
else if(clAV == 0 && clBA == 0 && clBC >= 2 && clBF < 7 && clBI == 0 )
{
  scAT = (clBF/2)
}
else if(clAV == 0 && clBA == 0 &&(clBC == 0 || clBF <= 0.1)&& clBI >= 2 && clBL >= 7)
{
  scAT = 3.5;
}
else if(clAV == 0 && clBA == 0 && (clBC == 0 || clBF <= 0.1)&& clBI >= 2 && clBL < 7)
{
  scAT = 1.5;
}
else
{
  scAT = 0;
}

var scAU = "";
//=IF('Clean data'!EB58="NoNeed",0,
//IF(AND('Clean data'!AX58>=3,OR('Clean data'!BI58=0,'Clean data'!BL58<14)),3.5,
//IF(AND('Clean data'!AX58=2,OR('Clean data'!BI58=0,'Clean data'!BL58<14)),1.5,
//IF(AND('Clean data'!AX58=0,'Clean data'!BI58>=2,'Clean data'!BL58>=14),3.5,
//IF(AND('Clean data'!AX58=0,'Clean data'!BC58>=2,'Clean data'!BF58>=14,OR('Clean data'!BI58=0,'Clean data'!BL58<14)),3.5,0)))))
if(clEB == "NoNeed")
{
  scAU = 0;
}
else if(clAX >= 3 &&(clBI == 0 || clBL < 14))
{
  scAU = 3.5;
}
else if(clAX == 2 &&(clBI == 0 || clBL < 14))
{
  scAU = 1.5;
}
else if(clAX == 0 && clBI >= 2 && clBL >= 14)
{
  scAU = 3.5;
}
else if(clAX == 0 && clBC >= 2 && clBF >= 14 && (clBI == 0 || clBL < 14))
{
  scAU = 3.5;
}
else
{
  scAU = 0;
}


var scAV = "";
//=IF('Clean data'!DV58="NoNeed",0,
//IF(AT58>0,AT58,
//IF(OR(AE58=3,AG58=3,AH58=3,AI58=3),3.5,
//IF((Dressing1*AE58)+(WashingBody1*AH58)+(Toileting1*AI58)>3.5,3.5,
//IF(AND(AH58>0,AH58<=1.5,MAX(AE58,AG58)=1.5),1.5,
//IF(AND(AH58>1.5,MAX(AE58,AG58)=1.5),AH58,
//(Dressing1*AE58)+(WashingBody1*AH58)+(Appearance1*AG58)+(Toileting1*AI58)))))))
if(clDV == "NoNeed")
{
  scAV = 0; 
}
else if(scAT > 0)
{
  scAV = scAT;
}
else if(scAE == 3 || scAG == 3 || scAH == 3 || scAI == 3)
{
  scAV = 3.5;
}
else if(Dressing1*scAE + WashingBody1*scAH + Toileting1*scAI > 3.5)
{
  scAV = 3.5;
}
else if(scAH > 0 && scAH <= 1.5 && Math.max(scAE, scAG)== 1.5)
{
  scAV = 1.5;
}
else if(scAH > 1.5 && Math.max(scAE, scAG)== 1.5)
{
  scAV = scAH;
}
else
{
  (Dressing1*scAE)+(WashingBody1*scAH)+(Appearance1*scAG)+(Toileting1*scAI)
}

var scAW = "";
//=IF('Clean data'!EB58="NoNeed",0,
//IF(AU58>0,AU58,
//IF(AND('Clean data'!BC58>=2,'Clean data'!BF58>=14),3.5,
//IF(OR(AND(AI58=3,'Clean data'!BL58>=14),AF58=3),3.5,
//IF(AND('Clean data'!BL58>=14,"NoNeed",3.5,0)))))
if(clEB == "NoNeed")
{
  scAW = 0;
}
else if(scAU > 0)
{
  scAW = scAU;
}
else if(clBC >= 2 && clBF >= 14)
{
  scAW = 3.5;
}
else if(scAI == 3 || clBL >= 14&&(scAF == 3))
{
  scAW = 3.5;
}
else if(clBL >= 14 && "NoNeed")
{
  scAW = 3.5;
}
else
{
  scAW = 0;
}


var scAX = "";
//=IF(AND(AQ58=0.5,AL58>=0.05,AL58<=0.5),0,
//IF(AND(OR(AL58>=0.05,AL58<=1),OR(AQ58>=0.05,AQ58<=1),SUM(AL58:AQ58)>=0.05,SUM(AL58:AQ58)<=1),1,0))
if(scAQ == 0.5 && scAL >= 0.05 && scAL <= 0.5)
{
  scAX = 0;
}
else if((scAL >= 0.05 || scAL <= 1)&& ((scAQ >= 0.05 || scAQ <= 1)) &&(scAL + scAM + scAN + scAO + scAP + scAQ)<=1)
{
  scAX = 1;
}
else
{
  scAX = 0;
}

var scAY = "";
//=IF(AND(AL58>=0.05,AL58<=1,AQ58>=0.05,AQ58<=1,SUM(AL58:AQ58)>=0.1,SUM(AL58:AQ58)<=2),1,0)
if(scAL >= 0.05 && scAL <= 1 && scAQ >= 0.05 && scAQ <= 1 && (scAL + scAM + scAN + scAO + scAP + scAQ)>= 0.1 && (scAL + scAM + scAN + scAO + scAP + scAQ)<= 2)
{
  scAY = 1;
}
else
{
  scAY = 0;
}


var scAZ = "";
//=IF(AND('Clean data'!BC58>=2,'Clean data'!BF58>7),7,
//IF(AND('Clean data'!BC58>=2,'Clean data'!BF58<=7),'Clean data'!BF58,0))
if(clBC >= 2 && clBF > 7)
{
  scAZ = 7;
}
else if(clBC >= 2 && clBF <= 7)
{
  scAZ = clBF;
}
else
{
  scAZ = 0;
}

var scBA = "";
//=IF(AZ58=0,0,
//IF('Clean data'!DV58="",0,
//IF(AND(AK58=1,VLOOKUP('Clean data'!DV58,Informal_support,3,FALSE)/AZ58>1),1,
//IF(AND(AK58=2,VLOOKUP('Clean data'!DY58,Informal_support,3,FALSE)/AZ58>1),1,
//IF(AND(AK58=3,VLOOKUP('Clean data'!EB58,Informal_support,3,FALSE)/AZ58>1),1,
//IF(AK58=2,VLOOKUP('Clean data'!DY58,Informal_support,3,FALSE)/AZ58,
//IF(AK58=3,VLOOKUP('Clean data'!EB58,Informal_support,3,FALSE)/AZ58,VLOOKUP('Clean data'!DV58,Informal_support,3,FALSE)/AZ58)))))))
if(scAZ == 0)
{
  scBA = 0;
}
else if(clDV == "")
{
  scBA = 0;
}
else if(scAK == 1 && VLOOKUP(clDV,Informal_support,3,FALSE)/scAZ > 1)
{
  scBA = 1;
}
else if(scAK == 2 && VLOOKUP(clDY,Informal_support,3,FALSE)/scAZ > 1)
{
  scBA = 1;
}
else if(scAK == 3 && VLOOKUP(clEB,Informal_support,3,FALSE)/scAZ > 1)
{
  scBA = 1;
}
else if(scAK == 2)
{
  scBA = VLOOKUP(clDY,Informal_support,3,FALSE)/scAZ;
}
else if(scAK == 3)
{
  scBA = VLOOKUP(clEB,Informal_support,3,FALSE)/scAZ;
}
else
{
  scBA = VLOOKUP(clDV,Informal_support,3,FALSE)/scAZ;
}


var scBB = "";
//=IF(AND('Clean data'!BC58>=2,'Clean data'!AV58<=2,AD58=0,AF58=0,AG58=0,AI58=0,AJ58=0),1,0)
if(clBC >= 2 && clAV <= 2 && scAD == 0 && scAF == 0 && scAG == 0 && scAI == 0 && scAJ == 0)
{
  scBB = 1;
}
else
{
  scBB = 0;
}


var scBC = "";
//=IF(AND('Clean data'!AV58=2,AD58=0,AF58=0,AG58=0,AH58=0,AI58=0,AJ58=0),1,0)
if(clAV == 2 && scAD == 0 && scAF == 0 && scAG == 0 && scAH == 0 && scAI == 0 && scAJ == 0)
{
  scBC = 1;
}
else
{
  scBC = 0;
}

var scBD = "";
//=IF(OR(AND('Clean data'!AL58>=0.05, 'Clean data'!AL58<=7, 'Clean data'!EH58=100, 'Clean data'!EL58=100),AND(AL58=1,AQ58=1)), 1,
//IF(AND('Clean data'!AL58>=0.05, 'Clean data'!AL58<=7, 'Clean data'!ED58=100, 'Clean data'!EL58=100), 2,
//IF(AND('Clean data'!AL58>=0.05, 'Clean data'!AL58<=7, 'Clean data'!ED58=100, 'Clean data'!EH58=100), 3,2)))
if(clAL >=0.05 && clAL <= 7 && clEH == 100 && clEL == 0 ||(scAL == 1 && scAQ == 1))
{
  scBD = 1;
}
else if(clAL >= 0.05 && clAL <= 7 && clED == 100 && clEL == 100)
{
  scBD = 2;
}
else if(clAL >= 0.05 && clAL <= 7 && clED == 100 && clEH == 100)
{
  scBD = 3;
}
else
{
  scBD = 2;
}


var scBE = "";
//=IF(AND('Clean data'!CG58>=0.05, 'Clean data'!CG58<=7, 'Clean data'!EJ58=100,'Clean data'!EN58=100), 1, 
//IF(AND('Clean data'!CG58>=0.05, 'Clean data'!CG58<=7, 'Clean data'!EF58=100,'Clean data'!EN58=100), 2, 
//IF(AND('Clean data'!CG58>=0.05, 'Clean data'!CG58<=7, 'Clean data'!EF58=100,'Clean data'!EJ58=100), 3, 1)))
if(clCG >= 0.05 && clCG <= 7 && clEJ == 100 && clEN == 100)
{
  scBE = 1;
}
else if(clCG >= 0.05 && clCG <= 7 && clEF == 100)
{
  scBE = 2;
}
else if(clCG >= 0.05 && clCG <= 7 && clEF == 100 && clEJ == 100)
{
  scBE = 3;
}
else
{
  scBE = 1;
}


 var scBF = "";
//=IF(OR('Clean data'!AV58>=3,'Clean data'!BA58>=3,'Clean data'!BI58>=3,AND(Prep_Visit_Adjustment>0,'Clean data'!AL58>=14)),1,
//IF(OR('Clean data'!AV58=2,'Clean data'!BA58=2,'Clean data'!BI58=2,AND(Medication_Visit_Adjustment>0,'Clean data'!CE58=2,'Clean data'!AJ58=0)),0.5,
//IF(AND(Medication_Visit_Adjustment>0,'Clean data'!CE58>=3,'Clean data'!AJ58=0),1,
//IF(AND('Clean data'!BC58>=2,'Clean data'!AV58=0,'Clean data'!BA58=0,'Clean data'!BI58=0,'Clean data'!CE58=0),'Clean data'!BF58/7,0))))
if(clAV >= 3 || clBA >= 3 || clBI >= 3 &&(Prep_Visit_Adjustment >0 && clAL >= 14))
{
  scBF = 1;
}
else if(clAV == 2 || clBA == 2 || clBI == 2 &&(Medication_Visit_Adjustment>0 && clCE == 2 && clAJ == 0))
{
  scBF = 0.5;
}
else if(Medication_Visit_Adjustment >0 && clCE >= 3 && clAJ == 0)
{
  scBF = 1;
}
else if(clBC >= 2 && clAV == 0 && clBA == 0 && clBI == 0 && clCE == 0)
{
  scBF = clBF/7;
}
else
{
  scBF = 0;
}

var scBG = "";
//=IF(OR('Clean data'!BL58>=42,AND(Medication_Visit_Adjustment>0,'Clean data'!CG58>=42), AND(Prep_Visit_Adjustment>0,'Clean data'!AL58>=42)), 1, 0)
if(clBL >= 42 || (Medication_Visit_Adjustment >0 && clCG >= 42) || ((Prep_Visit_Adjustment >0 && clAL > 42)))
{
  scBG = 1;
}
else
{
  scBG = 0;
}

var scBH = "";
//=IF(OR('Clean data'!BL58>=21,AND(Medication_Visit_Adjustment>0,'Clean data'!CG58>=21),OR('Clean data'!AN58>=3,AND(Prep_Visit_Adjustment>0,'Clean data'!AL58=7), AND(Prep_Visit_Adjustment>0,'Clean data'!AL58>=21))),1,0)
if(clBL >= 21 || (Medication_Visit_Adjustment >0 && clCG >= 21) || clAN >= 3 && (Prep_Visit_Adjustment >0 && clAL == 7) && Prep_Visit_Adjustment >0 && clAL >= 21)
{
  scBH = 1;
}
else
{
  scBH = 0;
}

var scBI = "";
//=IF(OR('Clean data'!BL58>=35,AND(Medication_Visit_Adjustment>0,'Clean data'!CG58>=35), AND(Prep_Visit_Adjustment>0,'Clean data'!AL58>=35)), 1, 0)
if(clBL >= 35 || (Medication_Visit_Adjustment >0 && clCG >= 35)&& Prep_Visit_Adjustment >0 && clAL >= 35 )
{
  scBI = 1;
}
else
{
  scBI = 0;
}


var scBJ = "";
//=IF(OR('Clean data'!BL58>=28,AND(Medication_Visit_Adjustment>0,'Clean data'!CG58>=28),AND(AQ58=0,Prep_Visit_Adjustment>0,'Clean data'!AL58>=14)),1,
//IF(AND(AQ58=0,Prep_Visit_Adjustment>0,'Clean data'!AL58=14,BF58=0),1,
//IF(AND(AQ58=0,Prep_Visit_Adjustment>0,'Clean data'!AL58=14,BH58=0),1,
//IF(AND(Prep_Visit_Adjustment>0,'Clean data'!AL58>=28),1,0))))
if(clBL >= 28 || (Medication_Visit_Adjustment >0 && clCG >= 28 || (scAQ == 0 && Prep_Visit_Adjustment >0 &&clAL >= 14)))
{
  scBJ = 1;
}
else if(scAQ == 0 && Prep_Visit_Adjustment >0 && clAL == 14 && scBF == 0)
{
  scBJ = 1;
}
else if(scAQ == 0 && Prep_Visit_Adjustment >0 && clAL == 14 && clBH == 0 )
{
  scBJ = 1;
}
else if(Prep_Visit_Adjustment >0 && clAL >= 28)
{
  scBJ = 1;
}
else
{
  scBJ = 0;
}

var scBK = "";
//=IF(OR('Clean data'!AX58>=3, 'Clean data'!BF58>=14,'Clean data'!BL58>=14,AND(Medication_Visit_Adjustment>0,'Clean data'!CG58>=14),AND(Prep_Visit_Adjustment>0,'Clean data'!AL58>=28)), 1, 
//IF('Clean data'!AX58=2,0.5,0))
if(clAX >= 3 || clBF >= 14 || clBL >= 14 && (Medication_Visit_Adjustment >0 && clCG >= 14) && (Prep_Visit_Adjustment >0 && clAL >= 28))
{
  scBK = 1;
}
else if(clAX == 2)
{
  scBK = 0.5;
}
else
{
  scBK = 0;
}

var scBL = "";
//=IF('Clean data'!EE58=50, 0, 'Clean data'!EE58)
if(clEE == 50)
{
  scBL = 0;
}
else
{
  scBL = clEE;
}

var scBM = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T58=2,'Clean data'!FZ58=1,'Clean data'!DY58>=2, 'Clean data'!BL58>14, NOT('Clean data'!DY58="2nd carer")),100,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T58=2,'Clean data'!FZ58=1,'Clean data'!DY58=1, 'Clean data'!BL58>14),57.1429,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T58=2,'Clean data'!FZ58=1,'Clean data'!DY58=0,  'Clean data'!BL58>14),0,
//IF('Clean data'!EI58=50,0,'Clean data'!EI58))))
if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && clDY >= 2 && clBL > 14 && clDY != "2nd carer" )
{
  scBM = 100;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && clDY == 1 && clBL > 14)
{
  scBM = 57.1429
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && clDY == 0 && clBL > 14)
{
  scBM = 0;
}
else if(clEI == 50)
{
  scBM = 0;
}
else
{
  scBM = clEI;
}


var scBN = "";
//=IF('Clean data'!EM59=50, 0, 'Clean data'!EM59)
if(clEM == 50)
{
  scBN = 0;
}
else
{
  scBN = clEM;
}

var scBO = "";
//=IF(AK59=1,BL59,
//IF(AK59=2,BM59,
//IF(AK59=3,BN59,0)))
if(scAK == 1)
{
  scBO = scBL;
}
else if(scAK == 2)
{
  scBO = scBM;
}
else if(scAK == 3)
{
  scBO = scBN
}
else
{
  scBO = 0;
}

var scBP = "";
//=IF(AND(AR59=1,AS59<=1),((BL59*0.4)+(BM59*0.2)+(BN59*0.4))/100,
//IF(AND(AR59=2,AS59=1),((BL59*0.3333)+(BM59*0.3334)+(BN59*0.3333))/100,
//IF(AND(AR59=3,AS59=1),((BL59*0.286)+(BM59*0.428)+(BN59*0.286))/100,
//IF(AND(AR59=4,AS59=1),((BL59*0.25)+(BM59*0.5)+(BN59*0.25))/100,0))))
if(scAR == 1 && scAS <= 1)
{
  scBP = ((scBL*0.4) + (scBM*0.2) + (scBN*0.4))/100
}
else if(scAR == 2 && scAS == 1)
{
  scBP = ((scBL*0.3333) + (scBM*0.3334) + (scBN*0.3333))/100
}
else if(scAR == 3 && scAS == 1)
{
  scBP = ((scBL*0.286) + (scBM*0.428) + (scBN*0.286))/100
}
else if(scAR == 4 && scAS == 1)
{
  scBP = ((scBL*0.25) + (scBM*0.5) + (scBN*0.25))/100
}
else 
{
  scBP = 0;
}

var scBQ = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,AR59=1,AS59<=1),((BL59*0.4286)+(BM59*0.1428)+(BN59*0.4286))/100,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,AR59=2,AS59=1),((BL59*0.4048)+(BM59*0.1904)+(BN59*0.4048))/100,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,AR59=3,AS59=1),((BL59*0.3572)+(BM59*0.2856)+(BN59*0.3572))/100,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,AR59=4,AS59=1),((BL59*0.3333)+(BM59*0.3332)+(BN59*0.3333))/100,
//IF(AND(AR59=1,AS59<=1),((BL59*0.3333)+(BM59*0.3334)+(BN59*0.3333))/100,
//IF(AND(AR59=2,AS59=1),((BL59*0.25)+(BM59*0.5)+(BN59*0.25))/100,
//IF(AND(AR59=3,AS59=1),((BL59*0.2)+(BM59*0.6)+(BN59*0.2))/100,
//IF(AND(AR59=4,AS59=1),((BL59*0.167)+(BM59*0.667)+(BN59*0.167))/100,0))))))))
if(FullTime_Education_switch ==1 && clT == 2 && clFZ == 1 && scAR == 1 && scAS <= 1)
{
  scBQ = ((scBL*0.4286) + (scBM*0.1428) + (scBN*0.4286))/100;
}
else if(FullTime_Education_switch ==1 && clT == 2 && clFZ == 1 && scAR == 2 && scAS == 1)
{
  scBQ = ((scBL*0.4048) + (scBM*0.1904) + (scBN*0.4048))/100;
}
else if(FullTime_Education_switch ==1 && clT == 2 && clFZ == 1 && scAR == 3 && scAS == 1)
{
  scBQ = ((scBL*0.3572) + (scBM*0.2856) + (scBN*0.3572))/100;
}
else if(FullTime_Education_switch ==1 && clT == 2 && clFZ == 1 && scAR == 4 && scAS == 1)
{
  scBQ = ((scBL*0.3333) + (scBM*0.3332) + (scBN*0.3333))/100;
}
else if(scAR == 1 && scAS <= 1)
{
  scBQ = ((scBL*0.3333) + (scBM*0.3334) + (scBN*0.4286));
}
else if(scAR == 2 && scAS == 1)
{
  scBQ = ((scBL*0.25) + (scBM*0.5) + (scBN*0.25));
}
else if(scAR == 3 && scAS == 1)
{
  scBQ = ((scBL*0.2) + (scBM*0.6) + (scBN*0.2));
}
else if(scAR == 4 && scAS == 1)
{
  scBQ = ((scBL*0.167) + (scBM*0.667) + (scBN*0.167))/100
}
else
{
  scBQ = 0;
}

var scBR = "";
//=IF(BB59=1,BA59,
//IF(AX59=1,(BO59/100),
//IF(AND(AW59=1.5,AV59>1.5,AY59=1),((BL59*7)+(BN59*3))/1000,
//IF(AY59=1,((BL59)+(BN59))/200,
//IF(Homecare_30_min_minimum=1,BQ59,BP59)))))
if(scBB == 1)
{
  scBR = scBA;
}
else if(scAX == 1)
{
  scBR = scBO/100;
}
else if(scAW == 1.5 && scAV > 1.5 && scAY == 1)
{
  scBR = ((scBL*7)+(scBN*3))/1000;
}
else if(scAY == 1)
{
  scBR = ((scBL)+(scBN))/200
}
else if(Homecare_30_min_minimum ==1)
{
  scBR = scBQ;
}
else
{
  scBR = scBP;
}

var scBS = "";
//=IF(AND('Clean data'!DJ59>=6, OR('Clean data'!EE59=100, AL59=0),OR(AR59=0, 'Clean data'!EI59>=25),OR(AR59=0, 'Clean data'!EI59<100),OR('Clean data'!EM59=100, AQ59=0)),1,0)
if(clDJ >= 6 && (clEE == 100 || scAL == 0) && (scAR == 0 || clEI >= 25) && (scAR == 0 || clEI < 100) && (clEM == 100 || scAQ == 0))
{
  scBS = 1;
}
else
{
  scBS = 0;
}

var scBT = "";
//=IF(OR('Clean data'!AL59=7, 'Clean data'!AL59=21, 'Clean data'!AL59=28), 1, 
//IF('Clean data'!AL59=35, 2, 
//IF('Clean data'!AL59>=42, 3, 0)))
if(clAL == 7 || clAL == 21 || clAL == 28)
{
  scBT = 1;
}
else if(clAL == 35)
{
  scBT = 2;
}
else if(clAL >= 42)
{
  scBT = 3;
}
else
{
  scBT = 0;
}

var scBU = "";
//=IF(AND('Clean data'!AL59=14,'Clean data'!ED59=100,'Clean data'!EH59<100,'Clean data'!EL59<100),1,
//IF(AND('Clean data'!AL59=14,'Clean data'!ED59<100,'Clean data'!EH59=100,'Clean data'!EL59<100),2,
//IF(AND('Clean data'!AL59=14,'Clean data'!ED59<100,'Clean data'!EH59<100,'Clean data'!EL59=100),3,0)))
if(clAL == 14 && clED == 100 && clEH < 100 && clEL < 100)
{
  scBU = 1;
}
else if(clAL == 14 && clED < 100 && clEH == 100 && clEH < 100)
{
  scBU = 2;
}
else if(clAL == 14 && clED < 100 && clEH < 100 && clEL == 100)
{
  scBU = 3;
}
else
{
  scBU = 0;
}

var scBV = "";
//=IF('Clean data'!DU59="NoNeed",0,
//IF(AND(OR(AND('Clean data'!AL59=7,BD59=1),'Clean data'!AL59>=14),NOT(BU59=1),'Clean data'!AN59>=2,'Clean data'!AR59=1),3,
//IF(AND(OR(AND('Clean data'!AL59=7,BD59=1),'Clean data'!AL59>=14),NOT(BU59=1),'Clean data'!AN59>=2,'Clean data'!AR59=0),2,
//IF(AND(OR(AND('Clean data'!AL59=7,BD59=1),'Clean data'!AL59>=14),NOT(BU59=1),'Clean data'!AJ59>=2),1,0))))
if(clDU == "NoNeed")
{
  scBV = 0;
}
else if(((clAL == 7 && scBD == 1) || (clAL >= 14)) && scBU != 1 && clAN >= 2 && clAR == 1)
{
  scBV = 3;
}
else if(((clAL == 7 && scBD == 1) || (clAL >= 14)) && scBU != 1 && clAN >= 2 && clAR == 0)
{
  scBV = 2;
}
else if(((clAL == 7 && scBD == 1) || (clAL >= 14)) && scBU != 1 && clAJ >= 2)
{
  scBV = 1;
}
else
{
  scBV = 0;
}

 var scBW = "";
//=IF(AND('Clean data'!AL59>=42,'Clean data'!AN59>=2,'Clean data'!AR59=1),3,
//IF(AND('Clean data'!AL59>=42,'Clean data'!AN59>=3,'Clean data'!AR59=0),2,
//IF(AND('Clean data'!AL59>=42,'Clean data'!AJ59>=2),1,0)))
if(clAL >= 42 && clAN >= 2 && clAR == 1)
{
  scBW = 3;
}
else if(clAL >= 42 && clAN >= 3 && clAR == 0)
{
  scBW = 2;
}
else if(clAL >= 42 && clAJ >= 2)
{
  scBW = 1;
}
else
{
  scBW = 0;
}

var scBX = "";
//=IF('Clean data'!DX59="NoNeed",0,
//IF(AND(OR(AND('Clean data'!AL59=7,BD59=2),'Clean data'!AL59>=21,AND('Clean data'!AL59>=14,NOT(BU59=2))),'Clean data'!AN59>=2,'Clean data'!AR59=1),3,
//IF(AND(OR(AND('Clean data'!AL59=7,BD59=2),'Clean data'!AL59>=21,AND('Clean data'!AL59>=14,BU59=2)),NOT(BU59=2),'Clean data'!AN59>=2,'Clean data'!AR59=0),2,
//IF(AND(OR(AND('Clean data'!AL59=7,BD59=2),'Clean data'!AL59>=21,AND('Clean data'!AL59>=14,NOT(BU59=2))),NOT(BU59=2),NOT(BT59=0),'Clean data'!AJ59>=2),1,0))))
if(clDX == "NoNeed")
{
  scBX = 0;
}
else if(((clAL == 7 && scBD == 2) || clAL >= 21 || (clAL >= 14 && scBU != 2) && clAN >= 2 && clAR == 1))
{
  scBX = 3;
}
else if(((clAL == 7 && scBD == 2) || clAL >= 21 || (clAL >= 14 && scBU == 2) && scBU != 2  && clAN >=2 && clAR == 0)) 
{
  scBX = 2;
}
else if(((clAL == 7 && scBD == 2) || clAL >= 21 || (clAL >= 14 && scBU != 2) && scBU != 2 && scBT != 0 && clAJ >=2))
{
  scBX = 1;
} 
else
{
  scBX = 0;
}

var scBY = "";
//=IF('Clean data'!DX59="NoNeed",0,
//IF(AND('Clean data'!AL59>=35,'Clean data'!AN59>=2,'Clean data'!AR59=1),3,
//IF(AND('Clean data'!AL59>=35,'Clean data'!AN59>=3,'Clean data'!AR59=0),2,
//IF(AND('Clean data'!AL59>=35,'Clean data'!AJ59>=2),1,0))))
if(clDX == "NoNeed")
{
  scBY = 0;
}
else if(clAL >= 35 && clAN >= 2 && clAR == 1)
{
  scBY = 3;
}
else if(clAL >= 35 && clAN >= 3 && clAR == 0)
{
  scBY = 2;
}
else if(clAL >= 35 && clAJ >= 2)
{
  scBY = 1;
}
else
{
  scBY = 0;
}

var scBZ = "";
//=IF('Clean data'!EA59="NoNeed",0,
//IF(AND('Clean data'!AL59>=28,'Clean data'!AN59>=2,'Clean data'!AR59=1),3,
//IF(AND('Clean data'!AL59>=28,'Clean data'!AN59>=3,'Clean data'!AR59=0),2,
//IF(AND('Clean data'!AL59>=28,'Clean data'!AJ59>=2),1,0))))
if(clEA == "NoNeed")
{
  scBZ = 0;
}
else if(clAL >= 28 && clAN >= 2 && clAR == 1)
{
  scBZ = 3;
}
else if(clAL >= 28 && clAN >= 3 && clAR == 0)
{
  scBZ = 2;
}
else if(clAL >= 28 && clAJ >= 2)
{
  scBZ = 1;
}
else
{
  scBZ = 0;
}

var scCA = "";
//=IF(AND(OR(AND('Clean data'!AL59=7,BD59=3),'Clean data'!AL59>=14),NOT(BU59=3),'Clean data'!AN59>=2,'Clean data'!AR59=1),3,
//IF(AND(OR(AND('Clean data'!AL59=7,BD59=3),'Clean data'!AL59>=14),NOT(BU59=3),'Clean data'!AN59>=2,'Clean data'!AR59=0),2,
//IF(AND(OR(AND('Clean data'!AL59=7,BD59=3),'Clean data'!AL59>=14),NOT(BU59=3),'Clean data'!AJ59>=2),1,0)))
if(((clAL == 7 && scBD == 3) || clAL >= 14) && scBU != 3 && clAN >= 2 && clAR == 1)
{
  scCA = 3;
}
else if(((clAL == 7 && scBD == 3) || clAL >= 14 && scBU != 3 && clAN >= 2 && clAR == 0))
{
  scCA = 2;
}
else if(((clAL == 7 && scBD == 3) || clAL >= 14 && scBU != 3 && clAJ >= 2 ))
{
  scCA = 1;
}
else 
{
  scCA = 0;
}

var scCB = "";
//=IF(BV59=0,0,
//IF(AND(BV59=1,Prep_Visit_Adjustment<2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(BV59=1,Prep_Visit_Adjustment=2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(BV59=2,Prep_Visit_Adjustment=2,'Clean data'!AN59=2),(1*0.5)*7,
//IF(AND(BV59=2,Prep_Visit_Adjustment<2,'Clean data'!AN59=2),(1*0.375)*7,
//IF(AND(BV59=2,'Clean data'!AN59>=3),(1*0.5)*7,
//IF(AND(BV59=3),(1*0.75)*7,0)))))))
if(scBV == 0)
{
  scCB = 0;
}
else if(scBV == 1 && Prep_Visit_Adjustment <2)
{
  scCB = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scBV == 1 && Prep_Visit_Adjustment == 2 )
{
  scCB = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scBV == 2 && Prep_Visit_Adjustment == 2 && clAN == 2)
{
  scCB = (1*0.5)*7;
}
else if(scBV == 2 && Prep_Visit_Adjustment <2 && clAN == 2)
{
  scCB = (1*0.375)*7;
}
else if(scBV == 2 && clAN >= 3)
{
  scCB = (1*0.5)*7;
}
else if(scBV == 3)
{
  scCB = (1*0.75)*7;
}
else 
{
  scCB = 0;
}

var scCC = "";
//=IF(BW59=0,0,
//IF(AND(BW59=1,Prep_Visit_Adjustment<2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(BW59=1,Prep_Visit_Adjustment=2),(1*0.25)*7,
//IF(AND(BW59=2,Prep_Visit_Adjustment=2,'Clean data'!AN59=2),(1*0.25)*7,
//IF(AND(BW59=2,Prep_Visit_Adjustment<2,'Clean data'!AN59=2),(1*0.25)*7,
//IF(AND(BW59=2,'Clean data'!AN59>=3),(1*0.25)*7,
//IF(AND(BW59=3),(1*0.25)*7,0)))))))
if(scBW == 0)
{
  scCC = 0;
}
else if(scBW == 1 && Prep_Visit_Adjustment <2)
{
  scCC = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scBW == 1 && Prep_Visit_Adjustment == 2)
{
  scCC = (1*0.25)*7
}
else if(scBW == 2 && Prep_Visit_Adjustment  == 2  && clAN == 2)
{
  scCC = (1*0.25)*7;
}
else if(scBW == 2 && clAN >= 3)
{
  scCC = (1*0.25)*7;
}
else if(scBW == 3)
{
  scCC = (1*0.25)*7;
}
else
{
  scCC = 0;
}

var scCD = "";
//=IF(AND(FullTime_Education_switch=1,CC59>0,'Clean data'!T59=2,'Clean data'!FZ59=1),(CC59/7)*2,CC59)
if(FullTime_Education_switch ==1 && scCC >0 && clT == 2 && clFZ == 1)
{
  scCD = (scCC/7)*2;
}
else
{
  scCD = scCC;
}

var scCE = "";
//=IF(BX59=0,0,
//IF(AND(BX59=1,Prep_Visit_Adjustment<2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(BX59=1,Prep_Visit_Adjustment=2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(BX59=2,Prep_Visit_Adjustment=2,'Clean data'!AN59=2),(1*0.5)*7,
//IF(AND(BX59=2,Prep_Visit_Adjustment<2,'Clean data'!AN59=2),(1*0.375)*7,
//IF(AND(BX59=2,'Clean data'!AN59>=3),(1*0.5)*7,
//IF(AND(BX59=3),(1*0.75)*7,0)))))))
if(scBX == 0)
{
  scCE = 0;
}
else if(scBX == 1 && Prep_Visit_Adjustment <2)
{
  scCE = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scBX == 1 && Prep_Visit_Adjustment == 2)
{
  scCE = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scBX == 2 && Prep_Visit_Adjustment == 2 && clAN == 2)
{
  scCE = (1*0.5)*7;
}
else if(scBX == 2 && Prep_Visit_Adjustment <2 && clAN == 2)
{
  scCE = (1*0.375)*7;
}
else if(scBX == 2 && clAN >= 3)
{
  scCE = (1*0.5)*7;
}
else if(scBX == 3)
{
  scCE = (1*0.75)*7;
}
else
{
  scCE = 0;
}

var scCF = "";
//=IF(AND(FullTime_Education_switch=1,CE59>0,'Clean data'!T59=2,'Clean data'!FZ59=1),(CE59/7)*2,CE59)
if(FullTime_Education_switch ==1 && scCE > 0 && clT == 2 && clFZ == 1)
{
  scCF = (scCE/7)*2;
}
else 
{
  scCF = scCE;
}

var scCG = "";
//=IF(BY59=0,0,
//IF(AND(BY59=1,Prep_Visit_Adjustment<2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(BY59=1,Prep_Visit_Adjustment=2),(1*0.25)*7,
//IF(AND(BY59=2,Prep_Visit_Adjustment=2,'Clean data'!AN59=2),(1*0.25)*7,
//IF(AND(BY59=2,Prep_Visit_Adjustment<2,'Clean data'!AN59=2),(1*0.25)*7,
//IF(AND(BY59=2,'Clean data'!AN59>=3),(1*0.25)*7,
//IF(AND(BY59=3),(1*0.25)*7,0)))))))
if(scBY == 0)
{
  scCG = 0;
}
else if(scBY == 1 && Prep_Visit_Adjustment <2)
{
  scCG = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scBY == 1 && Prep_Visit_Adjustment ==2 )
{
  scCG = (1*0.25)*7;
}
else if(scBY == 2 && Prep_Visit_Adjustment == 2 && clAN == 2 )
{
  scCG = (1*0.25)*7;
}
else if(scBY == 2 && Prep_Visit_Adjustment <2 && clAN == 2)
{
  scCG = (1*0.25)*7;
}
else if(scBY == 2 && clAN >= 3)
{
  scCG = (1*0.25)*7;
}
else if(scBY == 3)
{
  scCG = (1*0.25)*7;
}
else
{
  scCG = 0;
}

var scCH = "";
//=IF(AND(FullTime_Education_switch=1,CG59>0,'Clean data'!T59=2,'Clean data'!FZ59=1),(CG59/7)*2,CG59)
if(FullTime_Education_switch ==1 && clT == 2 && clFZ == 1)
{
  scCH = (scCG/7)*2;
}
else
{
  scCH = scCG;
}

var scCI = "";
//=IF(BZ59=0,0,
//IF(AND(BZ59=1,Prep_Visit_Adjustment<2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(BZ59=1,Prep_Visit_Adjustment=2),(1*0.25)*7,
//IF(AND(BZ59=2,Prep_Visit_Adjustment=2,'Clean data'!AN59=2),(1*0.25)*7,
//IF(AND(BZ59=2,Prep_Visit_Adjustment<2,'Clean data'!AN59=2),(1*0.25)*7,
//IF(AND(BZ59=2,'Clean data'!AN59>=3),(1*0.25)*7,
//IF(AND(BZ59=3),(1*0.25)*7,0)))))))
if(scBZ == 0)
{
  scCI = 0;
}
else if(scBZ == 1 && Prep_Visit_Adjustment <2)
{
  scCI = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scBZ == 1 && Prep_Visit_Adjustment ==2)
{
  scCI = (1*0.25)*7;
}
else if(scBZ == 2 && Prep_Visit_Adjustment ==2 && clAN == 2)
{
  scCI = (1*0.25)*7;
}
else if(scBZ == 2 && Prep_Visit_Adjustment <2 && clAN == 2)
{
  scCI = (1*0.25)*7;
}
else if(scBZ == 2 && clAN >= 3)
{
  scCI = (1*0.25)*7;
}
else if(scBZ == 3)
{
  scCI = (1*0.25)*7;
}
else
{
  scCI = 0;
}

var scCJ = "";
//=IF(CA59=0,0,
//IF(AND(CA59=1,Prep_Visit_Adjustment<2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(CA59=1,Prep_Visit_Adjustment=2),(Prep_Visit_Adjustment*0.25)*7,
//IF(AND(CA59=2,Prep_Visit_Adjustment=2,'Clean data'!AN59=2),(1*0.5)*7,
//IF(AND(CA59=2,Prep_Visit_Adjustment<2,'Clean data'!AN59=2),(1*0.375)*7,
//IF(AND(CA59=2,'Clean data'!AN59>=3),(1*0.5)*7,
//IF(AND(CA59=3),(1*0.75)*7,0)))))))
if(scCA == 0)
{
  scCJ = 0;
}
else if(scCA == 1 && Prep_Visit_Adjustment <2 )
{
  scCJ = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scCA == 1 && Prep_Visit_Adjustment == 2 )
{
  scCJ = (Prep_Visit_Adjustment*0.25)*7;
}
else if(scCA == 2 && Prep_Visit_Adjustment == 2 && clAN == 2)
{
  scCJ = (1*0.5)*7;
}
else if(scCA == 2 && Prep_Visit_Adjustment <2 && clAN == 2)
{
  scCJ = (1*0.375)*7;
}
else if(scCA == 2 && clAN >= 3)
{
  scCJ = (1*0.5)*7;
}
else if(scCA == 3)
{
  scCJ = (1*0.75)*7;
}
else
{
  scCJ = 0;
}

var scCK = "";
//=IF(CB59=0,0,
//IF(AND(AL59>=0.5,BV59=1),CB59*Meals_addition_adj,
//IF(AND(AL59>=0.5,BV59=2),CB59*Eating_addition_adj,
//IF(AND(AL59>=0.5,BV59=3),CB59*Extend_addition_adj,CB59))))
if(scCB == 0)
{
  scCK = 0;
}
else if(scAL >= 0.5 && scBV == 1)
{
  scCK = scCB*Meals_addition_adj;
}
else if(scAL >= 0.5 && scBV == 2)
{
  scCK = scCB*Eating_addition_adj
}
else if(scAL >= 0.5 && scBV == 3)
{
  scCK = scCB*Extend_addition_adj
}
else
{
  scCK = scCB;
}

var scCL = "";
//=IF(CD59=0,0,
//IF(AND(AM59=1,BW59=1),CD59*Meals_addition_adj,
//IF(AND(AM59=1,BW59=2),CD59*Eating_addition_adj,
//IF(AND(AM59=1,BW59=3),CD59*Extend_snacks_addition_adj,CD59))))
if(scCD == 0)
{
  scCL = 0;
}
else if(scAM == 1 && scBW == 1)
{
  scCL = scCD*Meals_addition_adj;
}
else if(scAM == 1 && scBW == 2)
{
  scCL = scCD*Eating_addition_adj;
}
else if(scAM == 1 && scBW == 3)
{
  scCL = scCD*Extend_snacks_addition_adj;
}
else
{
  scCL = scCD;
}

var scCM = "";
//=IF(CF59=0,0,
//IF(AND(AN59=1,BX59=1),CF59*Meals_addition_adj,
//IF(AND(AN59=1,BX59=2),CF59*Eating_addition_adj,
//IF(AND(AN59=1,BX59=3),CF59*Extend_snacks_addition_adj,CF59))))
if(scAN == 1 && scBX == 1)
{
  scCM = scCF*Meals_addition_adj;
}
else if(scAN == 1 && scBX == 2)
{
  scCM = scCF*Eating_addition_adj;
}
else if(scAN == 1 && scBX == 3)
{
  scCM = scCF*Extend_snacks_addition_adj;
}
else
{
  scCM = scCF;
}

var scCN = "";
//=IF(CH59=0,0,
//IF(AND(AO59=1,BY59=1),CH59*Meals_addition_adj,
//IF(AND(AO59=1,BY59=2),CH59*Eating_addition_adj,
//IF(AND(AO59=1,BY59=3),CH59*Extend_snacks_addition_adj,CH59))))
if(scCH == 0)
{
  scCN = 0;
}
else if(scAO == 1 && scBY == 1)
{
  scCN = scCH*Meals_addition_adj;
}
else if(scAO == 1 && scBY == 2)
{
  scCN = scCH*Eating_addition_adj;
}
else if(scAO == 2 && scBY == 3)
{
  scCN = scCH*Extend_snacks_addition_adj;
}
else 
{
  scCN = scCH;
}

var scCO = "";
//=IF(CI59=0,0,
//IF(AND(AP59=1,BZ59=1),CI59*Meals_addition_adj,
//IF(AND(AP59=1,BZ59=2),CI59*Eating_addition_adj,
//IF(AND(AP59=1,BZ59=3),CI59*Extend_snacks_addition_adj,CI59))))
if(scCI == 0)
{
  scCO = 0;
}
else if(scAP == 1 && scBZ == 1)
{
  scCO = scCI*Meals_addition_adj;
}
else if(scAP == 1 && scBZ == 2)
{
  scCO = scCI*Eating_addition_adj;
}
else if(scAP == 1 && scBZ == 3)
{
  scCO = scCI*Extend_snacks_addition_adj;
}
else
{
  scCO = scCI;
}

var scCP = "";
//=IF(CJ59=0,0,
//IF(AND(AQ59>=0.5,CA59=1),CJ59*Meals_addition_adj,
//IF(AND(AQ59>=0.5,CA59=2),CJ59*Eating_addition_adj,
//IF(AND(AQ59>=0.5,CA59=3),CJ59*Extend_addition_adj,CJ59))))
if(scCJ == 0)
{
  scCP = 0;
}
else if(scAQ >= 0.5 && scCA == 1)
{
  scCP = scCJ*Meals_addition_adj;
}
else if(scAQ >= 0.5 && scCA == 2)
{
  scCP = scCJ*Eating_addition_adj;
}
else if(scAQ >= 0.5 && scCA == 3)
{
  scCP = scCJ*Extend_addition_adj;
}
else
{
  scCP = scCP;
}

var scCQ = "";
//=IF(AND(BV59=1,'Clean data'!DR59=1),CK59*(1-('Clean data'!ED59/100)),
//IF(AND(OR(BV59=2,BV59=3),'Clean data'!DT59=1),CK59*(1-('Clean data'!ED59/100)),CK59))
if(scBV == 1 && clDR == 1)
{
  scCQ = scCK*(1-(clED/100));
}
else if(((scBV == 2 || scBV == 3) && clDT == 1))
{
  scCQ = scCK*(1-(clED/100));
}
else
{
  scCQ = scCK;
}

var scCR = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CD59<CC59,'Clean data'!DU59>=2, NOT('Clean data'!DU59="2nd carer")),0,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CD59<CC59,OR('Clean data'!DU59=1, 'Clean data'!DU59="2nd carer")),CL59/2,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CD59<CC59,'Clean data'!DU59=0),CL59,
//IF(AND(BW59=1,'Clean data'!DS59=1),CL59*(1-('Clean data'!ED59/100)),
//IF(AND(OR(BW59=2,BW59=3),'Clean data'!DT59=1),CL59*(1-('Clean data'!ED59/100)),
//CL59)))))
if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCD < scCC && clDU >= 2 && (clDU != "2nd carer")))
{
  scCR = 0;
}
else if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCD < scCC && (clDU == 1 || clDU == "2nd carer")))
{
  scCR = scCL/2;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCD < scCC && clDU == 1 && clDU == "2nd carer")
{
  scCR = scCL;
}
else if(scBW == 1 && clDS == 1)
{
  scCR = scCL*(1-(clED/100));
}
else if(((scBW == 2 || scBW == 3) && clDT == 1))
{
  scCR = scCL*(1-(clED/100));
}
else 
{
  scCR = scCL;
}

var scCS = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CF59<CE59,'Clean data'!DX59>=2, NOT('Clean data'!DX59="2nd carer")),0,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CF59<CE59,OR('Clean data'!DX59=1,'Clean data'!DX59="2nd carer") ),CM59/2,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CF59<CE59,'Clean data'!DX59=0),CM59,
//IF(AND(BX59=1,'Clean data'!DR59=1),CM59*(1-('Clean data'!EH59/100)),
//IF(AND(OR(BX59=2,BX59=3),'Clean data'!DT59=1),CM59*(1-('Clean data'!EH59/100)),CM59)))))
if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCF < scCE && clDX >= 2 && (clDX != "2nd carer")))
{
  scCS = 0;
}
else if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCF < scCE && (clDX == 1 || clDX == "2nd carer")))
{
  scCS = scCM/2;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCF < scCE && clDX == 0)
{
  scCS = scCM;
}
else if(clBX == 1 && clDR == 1)
{
  scCS = scCM*(1-(clEH/100));
}
else if(((scBX == 2 || scBX == 3) && clDT == 1))
{
  scCS = scCM*(1-(clEH/100));
}
else
{
  scCS = scCM;
}

var scCT = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CH59<CG59,'Clean data'!DX59>=2, NOT('Clean data'!DX59="2nd carer")),0,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CH59<CG59,OR('Clean data'!DX59=1, 'Clean data'!DX59="2nd carer")),CN59/2,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CH59<CG59,'Clean data'!DX59=0),CN59,
//IF(AND(BY59=1,'Clean data'!DS59=1),CN59*(1-('Clean data'!EH59/100)),
//IF(AND(OR(BY59=2,BY59=3),'Clean data'!DT59=1),CN59*(1-('Clean data'!EH59/100)),CN59)))))
if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCH < scCG && clDX >= 2 && (clDX != "2nd carer")))
{
  scCT = 0;
}
else if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCH < scCG && (clDX == 1 || clDX == "2nd carer")))
{
  scCT = scCN/2;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCH < scCG && clDX == 0)
{
  scCT = scCN;
}
else if(scBY == 1 && clDS == 1)
{
  scCT = scCN*(1-(clEH/100));
}
else if(((scBY == 2 || scBY == 3)&& clDT == 1))
{
  scCT = scCN*(1-(clEH/100));
}
else
{
  scCT = scCN;
}

var scCU = "";
//=IF(AND(BZ59=1,'Clean data'!DR59=1),CO59*(1-('Clean data'!EL59/100)),
//IF(AND(OR(BZ59=2,BZ59=3),'Clean data'!DT59=1),CO59*(1-('Clean data'!EL59/100)),CO59))
if(scBZ == 1 && clDR == 1)
{
  scCU = scCO*(1-(clEL/100));
}
else if(((scBZ == 2 || scBZ == 3) && clDT == 1))
{
  scCU = scCO*(1-(clEL/100));
}
else
{
  scCU = scCO;
}

var scCV = "";
//=IF(AND(CA59=1,'Clean data'!DS59=1),CP59*(1-('Clean data'!EL59/100)),
//IF(AND(OR(CA59=2,CA59=3),'Clean data'!DT59=1),CP59*(1-('Clean data'!EL59/100)),CP59))
if(scCA == 1&& clDS == 1)
{
  scCV = scCP*(1-(clEL/100));
}
else if(((scCA == 2 || scCA == 3) && clDT == 1))
{
  scCV = scCP*(1-(clEL/100));
}
else
{
  scCV = scCP;
}

var scCW = "";
//=IF('Clean data'!CG59=0.1,0,
//IF(AND(OR(AND(BE59=1,'Clean data'!CG59>=7),'Clean data'!CG59>=14),'Clean data'!CE59>=2),((7*0.25)*Medication_Visit_Adjustment),0))
if(clCG == 0.1)
{
  scCW = 0;
}
else if((scBE == 1 && clCG >= 7) || clCG >= 14 && clCE >= 2)  
{
  scCW = ((7*0.25)*Medication_Visit_Adjustment)
}
else
{
  scCW = 0;
}

var scCX = "";
//=IF('Clean data'!CG59=0.1,0,
//IF(AND('Clean data'!CG59>=42,'Clean data'!CE59>=2),((7*0.25)*Medication_Visit_Adjustment),0))
if(clCG == 0.1)
{
  scCX = 0;
}
else if(clCG >= 42 && clCE >= 2)
{
  scCX = ((7*0.25)*Medication_Visit_Adjustment)
}
else
{
  scCX = 0;
}

var scCY = "";
//=IF(AND(FullTime_Education_switch=1,CX59>0,'Clean data'!T59=2,'Clean data'!FZ59=1),(CX59/7)*2,CX59)
if(FullTime_Education_switch == 1 && scCX > 0 && clT == 2 && clFZ == 1)
{
  scCY = (scCX/7)*2;
}
else
{
  scCY = scCX;
}

var scCZ = "";
//=IF('Clean data'!CG59=0.1,0, 
//IF(AND(OR(AND(BE59=2,'Clean data'!CG59>=7),'Clean data'!CG59>=21),'Clean data'!CE59>=2),((7*0.25)*Medication_Visit_Adjustment),0))
if(clCG == 0.1)
{
  scCZ = 0;
} 
else if((scBE == 2 && clCG >= 7) || clCG >= 21 && clCE >= 2)
{
  scCZ = ((7*0.25)*Medication_Visit_Adjustment);
}
else
{
  scCZ = 0;
}

var scDA = "";
//=IF(AND(FullTime_Education_switch=1,CZ59>0,'Clean data'!T59=2,'Clean data'!FZ59=1),(CZ59/7)*2,CZ59)
if(FullTime_Education_switch == 1 && scCZ > 0 && clT == 2 && clFZ == 1)
{
  scDA = (scCZ/7)*2
}
else
{
  scDA = scCZ; 
}

var scDB = "";
//=IF('Clean data'!CG59=0.1,0, 
//IF(AND('Clean data'!CG59>=35,'Clean data'!CE59>=2),((7*0.25)*Medication_Visit_Adjustment),0))
if(clCG == 0.1)
{
  scDB = 0;
}
else if(clCG >= 35 && clCE >= 2)
{
  scDB = ((7*0.25)*Medication_Visit_Adjustment);
}
else
{
  scDB = 0;
}

var scDC = "";
//=IF(AND(FullTime_Education_switch=1,DB59>0,'Clean data'!T59=2,'Clean data'!FZ59=1),(DB59/7)*2,DB59)
if(FullTime_Education_switch == 1 && scDB > 0 && clT == 2 && clFZ == 1)
{
  scDC = (scDB/7)*2
}
else
{
  scDC = scDB;
}

var scDD = "";
//=IF('Clean data'!CG59=0.1,0,
//IF(AND('Clean data'!CG59>=28,'Clean data'!CE59>=2),((7*0.25)*Medication_Visit_Adjustment),0))
if(clCG == 0.1)
{
  scDD = 0;
}
else if(clCG >= 28 && clCE >= 2)
{
  scDD = ((7*0.25)*Medication_Visit_Adjustment);
}
else
{
  scDD = 0;
}

var scDE = "";
//=IF('Clean data'!CG59=0.1,0,
//IF(AND(OR(AND(BE59=3,'Clean data'!CG59>=7),'Clean data'!CG59>=14),'Clean data'!CE59>=2),((7*0.25)*Medication_Visit_Adjustment),0))
if(clCG == 0.1)
{
  scDE = 0;
}
else if((scBE == 3 && clCG >= 7) || clCG >= 14 && clCE >= 2)
{
  scDE = ((7*0.25)*Medication_Visit_Adjustment);
}
else
{
  scDE = 0;
}

var scDF = "";
//=IF(CW59=0,0,
//IF(AND(AL59>0,AL59<1),CW59*(1-AL59),
//IF(AND(AL59=1),0,CW59)))
if(scCW == 0)
{
  scDF = 0;
}
else if(scAL > 0 && scAL < 1)
{
  scDF = scCW*(1-scAL)
}
else if(scAL == 1)
{
  scDF = 0;
}
else
{
  scDF = scCW;
}

var scDG = "";
//=IF(CY59=0,0,
//IF(AND(AM59=1),0,CY59))
if(scCY == 0)
{
  scDG = 0;
}
else if(scAM == 1)
{
  scDG = 0;
}
else
{
  scDG = scCY;
}

var scDH = "";
//=IF(DA59=0,0,
//IF(AND(AN59=1),0,DA59))
if(scDA == 0)
{
  scDH = 0;
}
else if(scAN == 1)
{
  scDH = 0;
}
else
{
  scDH = scDA;
}

var scDI = "";
//=IF(DC59=0,0,
//IF(AND(AO59=1),0,DC59))
if(scDC == 0)
{
  scDI = 0;
}
else if(scAO == 1)
{
  scDI = 0;
}
else 
{
  scDI = scDC;
}

var scDJ = "";
//=IF(DD59=0,0,
//IF(AND(AP59=1),0,DD59))
if(scDD == 0)
{
  scDJ = 0;
}
else if(scAP == 1)
{
  scDJ = 0;
}
else
{
  scDJ = scDD;
}

var scDK = "";
//=IF(DE59=0,0,
//IF(AND(AQ59=1),0,DE59))
if(scDE == 0)
{
  scDK = 0;
}
else if(scAQ == 1)
{
  scDK = 0;
}
else
{
  scDK = scDE;
}

var scDL = "";
//=IF(AND('Clean data'!DN59=1,'Clean data'!DO59=1, 'Clean data'!DP59=1,'Clean data'!DQ59=0, CW59>0), 1, 0)
if(clDN == 1 && clDO == 1 && clDP == 1 && clDQ == 0 && clCW > 0)
{
  scDL = 1;
}
else
{
  scDL = 0;
}

var scDM = "";
//=IF(AND(DL59=0,'Clean data'!DQ59=1),DF59*(1-('Clean data'!EF59/100)),
//IF(DL59=1, CW59,DF59))
if(scDL == 0 && clDQ == 1)
{
  scDM = scDF*(1-(clEF/100));
}
else if(scDL == 1)
{
  scDM = scCW;
}
else
{
  scDM = scDF;
}

var scDN = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CY59<CX59,'Clean data'!DW59>=2, NOT('Clean data'!DW59="2nd carer"), NOT(DL59=1)),0,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CY59<CX59,OR('Clean data'!DW59=1, 'Clean data'!DW59="2nd carer"), NOT(DL59=1)),DG59/2,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,CY59<CX59,'Clean data'!DW59=0, NOT(DL59=1)),DG59,
//IF(AND(DL59=0,'Clean data'!DQ59=1),DG59*(1-('Clean data'!EF59/100)),
//IF(DL59=1,CY59,DG59)))))
if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCY < scCX && clDW >= 2 && (clDW != "2nd carer") && (scDL != 1)))
{
  scDN = 0;
}
else if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCY < scCX && (clDW == 1 || clDW == "2nd carer") && (scDL == 1)))
{
  scDN = scDG/2;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scCY < scCX && clDW == 0 && scDL != 1 )
{
  scDN = scDG;
}
else if(scDL == 0 && clDQ == 1)
{
  scDN = scDG*(1-(clEF/100));
}
else if(scDL == 1)
{
  scDN = scCY;
}
else
{
  scDN = scDG;
}

var scDO = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,DA59<CZ59,'Clean data'!DZ59>=2,NOT('Clean data'!DZ59="2nd carer"), NOT(DL59=1)),0,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,DA59<CZ59,OR('Clean data'!DZ59=1,'Clean data'!DZ59="2nd carer"), NOT(DL59=1)),DH59/2,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,DA59<CZ59,'Clean data'!DZ59=0,NOT(DL59=1)),DH59,
//IF(AND(DL59=0,'Clean data'!DQ59=1),DH59*(1-('Clean data'!EJ59/100)),
//IF(DL59=1,DA59,DH59)))))
if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scDA < scCZ && clDZ >= 2 && (clDZ != "2nd carer") && scDL != 1)
{
  scDO = 0;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scDA < scCZ && (clDZ == 1 || clDZ == "2nd carer")&& scDL != 1 )
{
  scDO = scDH/2
}
else if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scDA < scCZ && (clDZ == 0 && scDL != 1)))
{
  scDO = scDH;
}
else if(scDL == 0 && clDQ == 1)
{
  scDO = scDH*(1-(clEJ/100));
}
else if(scDL == 1)
{
  scDO = scDA;
}
else
{
  scDO = scDH;
}

var scDP = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,DC59<DB59,'Clean data'!DZ59>=2,NOT('Clean data'!DZ59="2nd carer"), NOT(DL59=1)),0,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,DC59<DB59,OR('Clean data'!DZ59=1, 'Clean data'!DZ59="2nd carer"), NOT(DL59=1)),DI59/2,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,DC59<DB59,'Clean data'!DZ59=0,NOT(DL59=1)),DI59,
//IF(AND(DL59=0,'Clean data'!DQ59=1),DI59*(1-('Clean data'!EJ59/100)),
//IF(DL59=1,DC59,DI59)))))
if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scDC < scDB && clDZ >= 2 && (clDZ != "2nd carer") && (scDL != 1)))
{
  scDP = 0;
}
else if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scDC < scDB && (clDZ == 1 || clDZ == "2nd carer")&& (scDL != 1)))
{
  scDP = scDI/2;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scDC < scDB && clDZ == 0 && (scDL != 1))
{
  scDP = scDI;
}
else if(scDL == 0 && clDQ == 1)
{
  scDP = scDI*(1-(clEJ/100));
}
else if(scDL== 1)
{
  scDP = scDC;
}
else
{
  scDP = scDI;
}

var scDQ = "";
//=IF(AND(DL59=0,'Clean data'!DQ59=1),DJ59*(1-('Clean data'!EN59/100)),
//IF(DL59=1,DD59,DJ59))
if(scDL == 0 && clDQ == 1)
{
  scDQ = scDJ*(1-(clEN/100));
}
else if(scDL == 1)
{
  scDQ = scDD;
}
else 
{
  scDQ = scDJ;
}

var scDR = "";
//=IF(AND(DL59=0,'Clean data'!DQ59=1),DK59*(1-('Clean data'!EN59/100)),
//IF(DL59=1,DE59,DK59))
if(scDL == 0 && clDQ == 1)
{
  scDR = scDK*(1-(clEN/100));
}
else if(scDL = 1)
{
  scDR = scDE;
}
else
{
  scDR = scDK;
}

var scDS = "";
//=MAX(CK59,DF59)+MAX(CL59,DG59)+MAX(CM59,DH59)+MAX(CN59,DI59)+MAX(CO59,DJ59)+MAX(CP59,DK59)
 scDS = Math.max(scCK, scDF) + Math.max(scCL, scDG) + Math.max(scCM, scDH) + Math.max(scCN, scDI) + Math.max(scCO, scDJ) + Math.max(scCP, scDK);

var scDT = "";
//=IF(AND(Scores!B59=1,Scores!G59=1,'Clean data'!DJ59=6,'Clean data'!FY59>1),DS59*SH_LD_Personal_Care_multiplier,
//IF(Scores!B59=1,DS59*LD_Personal_Care_multiplier,DS59))
if(scB == 1 && scG == 1 && clDJ == 6 && clFY > 1)
{
  scDT = scDS*SH_LD_Personal_Care_multiplier;
}
else if(scB == 1)
{
  scDT = scDS*LD_Personal_Care_multiplier;
}
else
{
  scDT = scDS;
}

var scDU = "";
//=MAX(CQ59,DM59)+MAX(CR59,DN59)+MAX(CS59,DO59)+MAX(CT59,DP59)+MAX(CU59,DQ59)+MAX(CV59,DR59)
scDU = Math.max(scCQ, scDM) + Math.max(scCR, scDN) + Math.max(scCS, scDO) + Math.max(scCT, scDP) + Math.max(scCU, scDQ) + Math.max(scCV, scDR);

var scDV = "";
//=IF(Scores!BV59=3, Scores!CK59,
// IF(Scores!BV59=1, 0, 
//IF(AND(Scores!BV59=2,CB59>0), 0.25*7, 0)))
if(scBV == 3)
{
  scDV = scCK;
}
else if(scBV == 1)
{
  scDV = 0;
}
else if(scBV == 2 && scCB > 0)
{
  scDV = 0.25*7;
}
else
{
  scDV = 0;
}

var scDW = "";
//=IF(Scores!BW59=3, Scores!CL59, 
//IF(Scores!BW59=1, 0, 
//IF(AND(Scores!BW59=2, CD59>0), 7*0.0625, 0)))
if(scBW == 3)
{
  scDW = scCL;
}
else if(scBW == 1)
{
  scDW = 0;
}
else if(scBW == 2 && scCD > 0)
{
  scDW = 7*0.0625;
}
else
{
  scDW = 0;
}

var scDX = "";
//=IF(Scores!BX59=3, Scores!CM59, 
//IF(Scores!BX59=1, 0, 
//IF(AND(Scores!BX59=2), 0.25*7, 0)))
if(scBX == 3)
{
  scDX = scCM;
}
else if(scBX == 1)
{
  scDX = 0;
}
else if(scBX == 2)
{
  scDX = 0.25*7;
}
else
{
  scDX = 0;
}

var scDY = "";
//=IF(Scores!BY59=3, Scores!CN59, 
//IF(Scores!BY59=1, 0,
//IF(AND(Scores!BY59=2, CH59>0), 7*0.0625, 0)))
if(scBY == 3)
{
  scDY = scCN;
}
else if(scBY = 1)
{
  scDY = 0;
}
else if(scBY == 2 & scCH > 0)
{
  scDY = 7*0.0625;
}
else
{
  scDY = 0;
}

var scDZ = "";
//=IF(Scores!BZ59=3, Scores!CO59, 
//IF(Scores!BZ59=1, 0, 
//IF(AND(Scores!BZ59=2, CI59>0), 7*0.0625,0)))
if(scBZ == 3)
{
  scDZ = scCO;
}
else if(scBZ == 1)
{
  scDZ = 0;
}
else if(scBZ == 2 && scCI > 0)
{
  scDZ =  7*0.0625;
}
else
{
  scDZ = 0;
}

var scEA = "";
//=IF(Scores!CA59=3, Scores!CP59, 
//IF(Scores!CA59=1, 0,
//IF(AND(Scores!CA59=2,CJ59>0), 0.25*7, 0)))
if(scCA == 3)
{
  scEA = scCP;
}
else if(scCA == 1)
{
  scEA = 0;
}
else if(scCA == 2 && scCJ > 0)
{
  scEA = 0.25*7;
}
else 
{
  scEA = 0;
}

var scEB = "";
//=SUM(DV59:EA59)
scEB = (scDV + scEA)

var scEC = "";
//=IF(AND('Clean data'!BD59=1,'Clean data'!BF59>=7),3.5,
//IF(AND('Clean data'!BD59=1,'Clean data'!BF59<7),'Clean data'!BF59*0.5,0))
if(clBD == 1 && clBF >= 7)
{
  scEC = 3.5;
}
else if(clBD == 1 && clBF < 7)
{
  scEC = clBF*0.5;
}
else
{
  scEC = 0;
}

var scED = "";
//=IF(OR('Clean data'!BJ59=1,'Clean data'!BB59=1,'Clean data'!AW59=1),Scores!AV59,EC59)
if(clBJ == 1 || clBB == 1 || clAW == 1)
{
  scED = scAV;
}
else
{
  scED = scEC;
}

var scEE = "";
//=IF(OR('Clean data'!BJ59=1,'Clean data'!AY59=1),Scores!AW59,0)
if(clBJ == 1 || clAY == 1)
{
  scEE = scAW;
}
else
{
  scEE = 0;
}

var scEF = "";
//=IF('Clean data'!EE59=50, 100, 'Clean data'!EE59)
if(clEE == 50)
{
  scEF = 100;
}
else
{
  scEF = clEE;
}

var scEG = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,'Clean data'!DY59>=2,NOT('Clean data'!DY59="2nd carer"), 'Clean data'!BL59>14),100,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,'Clean data'!DY59=1,'Clean data'!BL59>14),57.1429,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,'Clean data'!DY59=0,'Clean data'!BL59>14),0,
//IF('Clean data'!EI59=50,100,'Clean data'!EI59))))
if((FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && clDY >= 2 && (clDY != "2nd carer") && clBL > 14))
{
  scEG = 100;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && clDY == 1 && clBL > 14)
{
  scEG = 57.1429;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && clDY == 0 && clBL > 14)
{
  scEG = 0;
}
else if(clEI == 50)
{
  scEG = 100;
}
else
{
  scEG = clEI;
}

var scEH = "";
//=IF('Clean data'!EM59=50, 100, 'Clean data'!EM59)
if(clEM == 50)
{
  scEH = 100;
}
else
{
  scEH = clEM;
}

var scEI = "";
//=IF(AND('Clean data'!DV59="NoNeed",'Clean data'!EB59="NoNeed"),1,
//IF(AND(EF59=100,EG59=100,EH59=100),1,
//IF(AND(ED59=0,EE59=0),0,
//IF(AND(ED59>0,EE59=0),EF59/100,
//IF(AND(ED59=0,EE59>0),EH59/100,
//IF(AND(ED59>0,EE59>0,OR('Clean data'!BJ59=0,'Clean data'!BL59=14)),((EF59)+(EH59))/200,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,AR59=1,AS59<=1),((EF59*0.4286)+(EG59*0.1428)+(EH59*0.4286))/100,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,AR59=2,AS59=1),((EF59*0.4048)+(EG59*0.1904)+(EH59*0.4048))/100,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,AR59=3,AS59=1),((EF59*0.3572)+(EG59*0.2856)+(EH59*0.3572))/100,
//IF(AND(FullTime_Education_switch=1,'Clean data'!T59=2,'Clean data'!FZ59=1,AR59=4,AS59=1),((EF59*0.3333)+(EG59*0.3332)+(EH59*0.3333))/100,
//IF(AND(AR59=1,AS59<=1),((EF59*0.3333)+(EG59*0.3334)+(EH59*0.3333))/100,
//IF(AND(AR59=2,AS59=1),((EF59*0.25)+(EG59*0.5)+(EH59*0.25))/100,
//IF(AND(AR59=3,AS59=1),((EF59*0.2)+(EG59*0.6)+(EH59*0.2))/100,
//IF(AND(AR59=4,AS59=1),((EF59*0.167)+(EG59*0.667)+(EH59*0.167))/100,Calculator!L59))))))))))))))
if(clDV == "NoNeed" && clEB == "NoNeed")
{
  scEI = 1;
}
else if(scEF == 100 && scEG == 100 && scEH == 100)
{
  scEI = 1;
}
else if(scED == 0 && scEE == 0)
{
  scEI = 0;
}
else if(scED > 0 && scEE == 0)
{
  scEI = scEF/100;
}
else if(scED == 0 && scEE > 0 )
{
  scEI = scEH/100;
}
else if(scED > 0 && scEE > 0 && (clBJ == 0 || clBL == 14 ))
{
  scEI = ((scEF)+(scEH))/200;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scAR == 1 && scAS <= 1)
{
  scEI = ((scEF*0.4286)+(scEG*0.1428)+(scEH*0.4286))/100;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scAR == 2 && scAS == 1)
{
  scEI = ((scEF*0.4048)+(scEG*0.1904)+(scEH*0.4048))/100;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scAR == 3 && scAS == 1)
{
  scEI = ((scEF*0.3572)+(scEG*0.2856)+(scEH*0.3572))/100;
}
else if(FullTime_Education_switch == 1 && clT == 2 && clFZ == 1 && scAR == 4 && scAS == 1)
{
  scEI = ((scEF*0.3333)+(scEG*0.3332)+(scEH*0.3333))/100;
}
else if(scAR == 1 && scAS <= 1 )
{
  scEI = ((scEF*0.3333)+(scEG*0.3334)+(scEH*0.3333))/100;
}
else if(scAR == 2 && scAS == 1)
{
  scEI = ((scEF*0.25)+(scEG*0.5)+(scEH*0.25))/100;
}
else if(scAR == 3 && scAS == 1)
{
  scEI = ((scEF*0.2)+(scEG*0.6)+(scEH*0.2))/100;
}
else if(scAR == 4 && scAS == 1)
{
  scEI = ((scEF*0.167)+(scEG*0.667)+(scEH*0.167))/100;
}
else
{
  scEI = calL;
}

var scEJ = "";
//=IF('Clean data'!FD59=0.5,0,
//IF('Clean data'!FD59=100,7,
//IF('Clean data'!FD59=90,7,
//IF('Clean data'!FD59=75,7,
//IF('Clean data'!FD59=50,7,
//IF('Clean data'!FD59=25,7,
//IF('Clean data'!FD59=10,4,
//IF('Clean data'!FD59=0,0,0))))))))
if(clFD == 0.5)
{
  scEJ = 0;
}
else if(clFD == 100)
{
  scEJ = 7;
}
else if(clFD == 90)
{
  scEJ = 7;
}
else if(clFD == 75)
{
  scEJ = 7;
}
else if(clFD == 50)
{
  scEJ = 7;
}
else if(clFD == 25)
{
  scEJ = 7;
}
else if(clFD == 10)
{
  scEJ = 4;
}
else if(clFD == 0)
{
  scEJ = 0;
}
else
{
  scEJ = 0;
}

var scEK = "";
//=IF('Clean data'!FD59=0.5,0,
//IF('Clean data'!FD59=100,7,
//IF('Clean data'!FD59=90,6,
//IF('Clean data'!FD59=75,4,
//IF('Clean data'!FD59=50,2,
//IF('Clean data'!FD59=25,0,
//IF('Clean data'!FD59=10,0,
//IF('Clean data'!FD59=0,0,0))))))))
if(clFD == 0.5)
{
  scEK = 0;
}
else if(clFD == 100)
{
  scEK = 7;
}
else if(clFD == 90)
{
  scEK = 6;
}
else if(clFD == 75)
{
  scEK = 4;
}
else if(clFD == 50)
{
  scEK = 2;
}
else if(clFD == 25)
{
  scEK = 0;
}
else if(clFD == 10)
{
  scEK = 0;
}
else if(clFD == 0)
{
  scEK = 0;
}
else 
{
  scEK = 0;
}

var scEL = "";
//=IF('Clean data'!FD59=0.5,0,
//IF('Clean data'!FD59=100,7,
//IF('Clean data'!FD59=90,7,
//IF('Clean data'!FD59=75,7,
//IF('Clean data'!FD59=50,7,
//IF('Clean data'!FD59=25,7,
//IF('Clean data'!FD59=10,4,
//IF('Clean data'!FD59=0,0,0))))))))
if(clFD == 0.5)
{
  scEL = 0;
}
else if(clFD == 100)
{
  scEL = 7;
}
else if(clFD == 90)
{
  scEL = 7;
}
else if(clFD == 75)
{
  scEL = 7;
}
else if(clFD == 50)
{
  scEL = 7;
}
else if(clFD == 25)
{
  scEL = 7;
}
else if(clFD == 10)
{
  scEL = 4;
}
else if(clFD == 0)
{
  scEL = 0;
}
else
{
  scEL = 0;
}

var scEM = "";
//=IF(EJ59=7, 0,
//IF(EJ59=6, 2, 
//IF(EJ59=5,4, 
//IF(EJ59=4, 6, 
//IF(EJ59=3,8, 
//IF(EJ59=2, 10,
// IF(EJ59=1, 12, 
//IF(EJ59=0, 14,0))))))))
if(scEJ == 7)
{
  scEM = 0;
}
else if(scEJ == 6)
{
  scEM = 2;
}
else if(scEJ == 5)
{
  scEM = 4;
}
else if(scEJ == 4)
{
  scEM = 6;
}
else if(scEJ == 3)
{
  scEM = 8;
}
else if(scEJ == 2)
{
  scEM = 10;
}
else if(scEJ == 1)
{
  scEM = 12;
}
else if(scEJ == 0)
{
  scEM = 14;
}
else
{
  scEM = 0;
}

var scEN = "";
//=IF(EK59=7, 0,
//IF(EK59=6, 0,
// IF(EK59=5, 0, 
//IF(EK59=4, 0, 
//IF(EK59=3, 0,
// IF(EK59=2, 0,
// IF(EK59=1, 8,
// IF(EK59=0, 16,0))))))))
if(scEK == 7)
{
  scEN = 0;
}
else if(scEK == 6)
{
  scEN = 0;
}
else if(scEK == 5)
{
  scEN = 0;
}
else if(scEK == 4)
{
  scEN = 0;
}
else if(scEK == 3)
{
  scEN = 0;
}
else if(scEK == 2)
{
  scEN = 0;
}
else if(scEK == 1)
{
  scEN = 8;
}
else if(scEK == 0)
{
  scEN = 16;
}
else
{
  scEN = 0;
}

var scEO = "";
//=IF(EL59=7, 0,
//IF(EL59=6, 5, 
//IF(EL59=5, 10,
// IF(EL59=4,15,
// IF(EL59=3, 20, 
//IF(EL59=2, 25, 
//IF(EL59=1, 30, 
//IF(EL59=0, 35,0))))))))
if(scEL == 7)
{
  scEO = 0;
}
else if(scEL == 6)
{
  scEO = 5;
}
else if(scEL == 5)
{
  scEO = 10;
}
else if(scEL == 4)
{
  scEO = 15;
}
else if(scEL == 3)
{
  scEO = 20;
}
else if(scEL == 2)
{
  scEO = 25;
}
else if(scEL == 1)
{
  scEO = 30;
}
else if(scEL == 0)
{
  scEO = 35;
}
else
{
  scEO = 0;
}

var scEP = "";
//=IF(AND('Clean data'!DJ59>5,'Clean data'!FE59=0.25),(SafetyInfDayChecks),
//IF(AND('Clean data'!DJ59>5,AND(NOT('Clean data'!FE59=0.25),'Clean data'!FD59=100)),(SafetyInfDayAll),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=90),(SafetyInfDayAlmost),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=75),(SafetyInfDayMost),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=50),(SafetyInfDayHalf),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=25),(SafetyInfDayQuarter),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=10),(SafetyInfDayMinority),
//IF(AND('Clean data'!DJ59>5,OR('Clean data'!FE59=1,'Clean data'!FD59=0.5,'Clean data'!FE59=-17)),(SafetyInfDayNone),0))))))))
if(clDJ > 5 && clFE == 0.25)
{
  scEP = (SafetyInfDayChecks);
}
else if(clDJ > 5 && (clFE != 0.25) && clFD == 100)
{
  scEP = (SafetyInfDayAll);
}
else if(clDJ > 5 && clFD == 90)
{
  scEP = (SafetyInfDayAlmost);
}
else if(clDJ > 5 && clFD == 75)
{
  scEP = (SafetyInfDayMost);
}
else if(clDJ > 5 && clFD == 50)
{
  scEP = (SafetyInfDayHalf);
}
else if(clDJ > 5 && clFD == 25)
{
  scEP = (SafetyInfDayQuarter);
}
else if(clDJ > 5 && clFD == 10)
{
  scEP = (SafetyInfDayMinority);
}
else if(clDJ > 5 && (clFE == 1 || clFD == 0.5 || clFE == -17))
{
  scEP = (SafetyInfDayNone);
}
else
{
  scEP = 0;
}

var scEQ = "";
//=IF(AND(FullTime_Education_switch=1,EP59>0,'Clean data'!FZ59=1,'Clean data'!T59=2,'Clean data'!DJ59>=6),1,0)
if(FullTime_Education_switch == 1 && scEP > 0 && clFZ == 1 && clT == 2 && clDJ >= 6)
{
  scEQ = 1;
}
else
{
  scEQ = 0;
}

var scER = "";
//=IF('Clean data'!FZ59=0, EP59, 
//IF(EQ59=1, 0, EP59))
if(clFZ == 0)
{
  scER = scEP;
}
else if(scEQ == 1)
{
  scER = 0;
}
else
{
  scER = scEP;
}

var scES = "";
//=IF(AND('Clean data'!DJ59=9,NOT('Clean data'!FD59=0.5)),ER59,0)
if(clDJ == 9 && (clFD != 0.5))
{
  scES = scER;
}
else
{
  scES = 0;
}

var scET = "";
//=IF(AND('Clean data'!DJ59>5,'Clean data'!FE59=0.25),(SafetyInfHourChecks),
//IF(AND('Clean data'!DJ59>5,AND(NOT('Clean data'!FE59=0.25),'Clean data'!FD59=100)),(SafetyInfHourAll),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=90),(SafetyInfHourAlmost),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=75),(SafetyInfHourMost),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=50),(SafetyInfHourHalf),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=25),(SafetyInfHourQuarter),
//IF(AND('Clean data'!DJ59>5,'Clean data'!FD59=10),(SafetyInfHourMinority),
//IF(AND('Clean data'!DJ59>5,OR('Clean data'!FE59=1,'Clean data'!FD59=0.5,'Clean data'!FE59=-17)),(SafetyInfHourNone),0))))))))
 if(clDJ > 5 && clFE == 0.25)
{
  scET = (SafetyInfHourChecks);
}
else if(clDJ > 5 && (clFE != 0.25) && clFD == 100)
{
  scET = (SafetyInfHourAll);
}
else if(clDJ > 5 && clFD == 90)
{
  scET = (SafetyInfHourAlmost);
}
else if(clDJ > 5 && clFD == 75)
{
  scET = (SafetyInfHourMost);
}
else if(clDJ > 5 && clFD == 50)
{
  scET = (SafetyInfHourHalf);
}
else if(clDJ > 5 && clFD == 25)
{
  scET = (SafetyInfHourQuarter);
}
else if(clDJ > 5 && clFD == 10)
{
  scET = (SafetyInfHourMinority);
}
else if(clDJ > 5 && (clFE == 1 || clFD == 0.5 || clFE == -17))
{
  scET = (SafetyInfHourNone);
}
else
{
  scET = 0;
}

var scEU = "";
//=IF(AND('Clean data'!DJ59=9,NOT('Clean data'!FD59=0.5)),ET59*2,ET59)
if(clDJ == 9 && (clFD != 0.5))
{
  scEU = scET*2;
}
else
{
  scEU = scET
}

var scEV = "";
//=IF(AND('Clean data'!DJ59>5,FullTime_Education_switch=1,'Clean data'!FZ59=1,Scores!EP59>0,'Clean data'!T59=2),0,
//IF('Clean data'!DJ59>5,5,0))
if(clDJ > 5 && FullTime_Education_switch == 1 && clFZ == 1 && scEP > 0 && clT == 2)
{
  scEV = 0;
}
else if(clDJ > 5)
{
  scEV = 5;
}
else
{
  scEV = 0;
}

var scEW = "";
//=IF(AND('Clean data'!DJ59=9,FullTime_Education_switch=1,'Clean data'!FZ59=1, Scores!EP59>0,'Clean data'!T59=2),0, 
//IF('Clean data'!DJ59=9,5,0))
if(clDJ == 9 && FullTime_Education_switch == 1 && clFZ == 1 && scEP > 0 && clT == 2)
{
  scEW = 0;
}
else if(clDJ == 9)
{
  scEW = 5;
}
else
{
  scEW = 0;
}

var scEX = "";
//=IF(AND('Clean data'!DJ59>5,FullTime_Education_switch=1,'Clean data'!FZ59=1, Scores!EP59>0,'Clean data'!T59=2),65, 
//IF('Clean data'!DJ59>5,65,0))
if(clDJ > 5 && FullTime_Education_switch == 1 && clFZ == 1 && scEP > 0 && clT == 2)
{
  scEX = 65;
}
else if(clDJ > 5)
{
  scEX = 65;
}
else
{
  scEX = 0;
}

var scEY = "";
//=IF(AND('Clean data'!DJ59=9,FullTime_Education_switch=1,'Clean data'!FZ59=1, Scores!EP59>0,'Clean data'!T59=2),65, 
//IF('Clean data'!DJ59=9,65,0))
if(clDJ == 9 && FullTime_Education_switch == 1 && clFZ == 1 && scEP > 0 && clT == 2)
{
  scEY = 65;
}
else if(clDJ == 9)
{
  scEY = 65;
}
else
{
  scEY = 0;
}

var scEZ = "";
//=IF(OR(AX59=1,AY59=1),0,
//IF(AR59=1,(0.2*Calculator!K59)*(1-('Clean data'!EI59/100)),
//IF(AR59=2,(0.167*Calculator!K59)*(1-('Clean data'!EI59/100)),
//IF(AR59>=3,(0.286*Calculator!K59)*(1-('Clean data'!EI59/100)),0))))
if(scAX == 1 || scAY == 1)
{
  scEZ = 0;
}
else if(scAR == 1)
{
  scEZ = (0.2*calK)*(1-(clEI/100));
}
else if(scAR == 2)
{
  scEZ = (0.167*calK)*(1-(clEI/100));
}
else if(scAR >= 3)
{
  scEZ = (0.286*calK)*(1-(clEI/100));
}
else
{
  scEZ = 0;
}

var scFA = "";
//=IF(AND(B59=1,SUM(ER59:ES59,EU59)>0),(EZ59+(MAX(CS59,DO59)+MAX(CT59,DP59)))/7*ER59*LD_Personal_Care_multiplier, 
//IF(AND(OR(B59=0,B59=2),SUM(ER59:ES59,EU59)>0),(EZ59+(MAX(CS59,DO59)+MAX(CT59,DP59)))/7*ER59, 0))
if(scB == 1 && (scER + scES + scEU)> 0)
{
  scFA = (scEZ + Math.max(scCS,scDO) + Math.max(scCT,scDP))/7*scER*LD_Personal_Care_multiplier;
}
else if(scB == 0 || scB == 2 && (scER + scES + scEU)> 0)
{
  scFA = (scEZ+ Math.max(scCS,scDO) + Math.max(scCT,scDP))/7*scER ;
}
else
{
  scFA = 0;
}

var scFB = "";
//=IF(AND(ER59>0, AN59=1,'Clean data'!AL59>=14,Prep_Visit_Adjustment<2,ET59>0), ((0.25*BG59) + (0.5*BH59) + (0.25*BI59))*2, 
//IF(AND(ER59>0, AN59=1,'Clean data'!AL59>=14,Prep_Visit_Adjustment<2,ET59>0), ((0.25*BG59) + (0.5*BH59) + (0.25*BI59)),
//IF(ET59>0,((0.25*BG59) + (0.25*BH59) + (0.25*BI59))*2,
//IF(ET59>0,((0.25*BG59) + (0.25*BH59) + (0.25*BI59)), 0))))
if(scER > 0 && scAN == 1 && clAL >= 14 && Prep_Visit_Adjustment <2 && scET > 0)
{
  scFB = ((0.25*scBG) + (0.5*scBH) + (0.25*scBI))*2;
}
else if(scER > 0 && scAN == 1 && clAL >= 14 && Prep_Visit_Adjustment <2 && scET > 0)
{
  scFB =  ((0.25*scBG) + (0.5*scBH) + (0.25*scBI));
}
else if(scET > 0)
{
  scFB = ((0.25*scBG) + (0.25*scBH) + (0.25*scBI))*2;
}
else if(scET > 0)
{
  scFB = ((0.25*scBG) + (0.25*scBH) + (0.25*scBI));
}
else
{
  scFB = 0;
}

var scFC = "";
//=IF(AND(ET59>0,EM59>0,EJ59=7),0,
//IF(AND(ET59>0,EM59>0,BF59=1),3.5*(1-(EJ59/7)),0))
if(scET > 0 && scEM > 0 && scEJ == 7)
{
  scFC = 0;
}
else if(scET > 0 && scEM > 0 && scBF == 1)
{
  scFC = 3.5*(1-(scEJ/7));
}
else
{
  scFC = 0;
}

var scFD = "";
//=IF(AND(ET59>0,EO59>0,EL59=100),0,
//IF(AND(ET59>0,EO59>0, AP59=1,'Clean data'!AL59>=14,Prep_Visit_Adjustment<2), ((BJ59*3.5)+(BK59*3.5))*(1-(EL59/7)),
//IF(AND(ET59>0,EO59>0),((BJ59*1.75)+(BK59*3.5))*(1-(EL59/7)),0)))
if(scET > 0 && scEO > 0 && scEL == 100)
{
  scFD = 0;
}
else if(scET > 0 && scEO > 0 && scAP == 1 && clAL >= 14 && Prep_Visit_Adjustment <2)
{
  scFD = ((scBJ*3.5)+(scBK*3.5))*(1-(scEL/7));
}
else if(scET > 0 && scEO > 0)
{
  scFD = ((scBJ*1.75)+(scBK*3.5))*(1-(scEL/7))
}
else
{
  scFD = 0;
}

var scFE = "";
//=IF(AND('Clean data'!DJ59>=6, 'Clean data'!FD59<=50),0,
//IF(AND(B59=1,'Clean data'!AE59=2),0.5*LD_Day_to_Day_multiplier*Housework,
//IF(AND(B59=1,'Clean data'!AE59>2,'Clean data'!AE59<=5),LD_Day_to_Day_multiplier*Housework,
//IF(AND(B59=2,'Clean data'!AE59=2),0.5*MH_Day_to_Day_multiplier*Housework,
//IF(AND(B59=2,'Clean data'!AE59>2,'Clean data'!AE59<=5),MH_Day_to_Day_multiplier*Housework,
//IF(AND(B59=0,'Clean data'!AE59=2),0.5*Housework,
//IF(AND(B59=0,'Clean data'!AE59>2,'Clean data'!AE59<=5),Housework,0)))))))
if(clDJ >= 6 && clFD <= 50 )
{
  scFE = 0;
}
else if(scB == 1 && clAE == 2)
{
  scFE = 0.5*LD_Day_to_Day_multiplier*Housework;
}
else if(scB == 1 && clAE > 2 && clAE <= 5)
{
  scFE = LD_Day_to_Day_multiplier*Housework;
}
else if(scB == 2 && clAE == 2)
{
  scFE = 0.5*MH_Day_to_Day_multiplier*Housework;
}
else if(scB == 2 && clAE > 2 && clAE <= 5)
{
  scFE = MH_Day_to_Day_multiplier*Housework;
}
else if(scB == 0 && clAE == 2)
{
  scFE = 0.5*Housework;
}
else if(scB == 0 && clAE > 2 && clAE <=5)
{
  scFE = Housework;
}
else
{
  scFE = 0;
}

var scFF = "";
//=IF(AND('Clean data'!DJ59>=6,'Clean data'!FD59<=50),0,
//IF(AND(B59=1,'Clean data'!AI59=2),0.5*LD_Day_to_Day_multiplier*Shopping,
//IF(AND(B59=1,'Clean data'!AI59>2,'Clean data'!AI59<=4),LD_Day_to_Day_multiplier*Shopping,
//IF(AND(B59=2,'Clean data'!AI59=2),0.5*MH_Day_to_Day_multiplier*Shopping,
//IF(AND(B59=2,'Clean data'!AI59>2,'Clean data'!AI59<=4),MH_Day_to_Day_multiplier*Shopping,
//IF(AND(B59=0,'Clean data'!AI59=2),0.5*Shopping,
//IF(AND(B59=0,'Clean data'!AI59>2,'Clean data'!AI59<=4),Shopping,
//IF(AND(B59=1,'Clean data'!AI59=5),(LD_Day_to_Day_multiplier*Shopping)*2,
//IF(AND(B59=2,'Clean data'!AI59=5),(MH_Day_to_Day_multiplier*Shopping)*2,
//IF(AND(B59=0,'Clean data'!AI59=5),Shopping*2,0))))))))))
if(clDJ >= 6 && clFD <=50)
{
  scFF = 0;
}
else if(scB == 1 && clAI == 2)
{
  scFF = 0.5*LD_Day_to_Day_multiplier*Shopping;
}
else if(scB == 1 && clAI > 2 && clAI <= 4)
{
  scFF = LD_Day_to_Day_multiplier*Shopping;
}
else if(scB == 2 && clAI == 2)
{
  scFF = 0.5*MH_Day_to_Day_multiplier*Shopping;
}
else if(scB == 2 && clAI > 2 && clAI <= 4)
{
  scFF = MH_Day_to_Day_multiplier*Shopping;
}
else if(scB == 0 && clAI == 2)
{
  scFF = 0.5*Shopping;
}
else if(scB == 0 && clAI > 2 && clAI <= 4)
{
  scFF = Shopping;
}
else if(scB == 1 && clAI ==5)
{
  scFF = (LD_Day_to_Day_multiplier*Shopping)*2;
}
else if(scB == 2 && clAI == 5)
{
  scFF = (MH_Day_to_Day_multiplier*Shopping)*2;
}
else if(scB == 0 && clAI == 5)
{
  scFF = Shopping*2;
}
else
{
  scFF = 0;
}

var scFG = "";
//=IF(AND('Clean data'!DJ59>=6,'Clean data'!FD59<=50),0,
//IF(AND(B59=1,'Clean data'!M59=1),LD_Life_planning_inflator*Appointments,
//IF(AND(B59=2,'Clean data'!M59=1),MH_Life_planning_inflator*Appointments,
//IF(AND(B59=0,'Clean data'!M59=1),Appointments,0))))
if(clDJ >= 6 && clFD <= 50)
{
  scFG = 0;
}
else if(scB == 1 && clM == 1)
{
  scFG = LD_Life_planning_inflator*Appointments;
}
else if(scB == 2 && clM == 1)
{
  scFG = MH_Life_planning_inflator*Appointments;
}
else if(scB == 0 && clM == 1)
{
  scFG = Appointments;
}
else
{
  scFG = 0;
}

var scFH = "";
//=IF(AND('Clean data'!DJ59>=6,'Clean data'!FD59<=50),0,
//IF(AND(B59=1,OR('Clean data'!AF59=1,'Clean data'!AG59=1)),LD_Life_planning_inflator*Paperwork_finances,
//IF(AND(B59=2,OR('Clean data'!AF59=1,'Clean data'!AG59=1)),MH_Life_planning_inflator*Paperwork_finances,
//IF(AND(B59=0,OR('Clean data'!AF59=1,'Clean data'!AG59=1)),Paperwork_finances,0))))
if(clDJ >= 6 && clFD <= 50)
{
  scFH = 0;
}
else if(scB == 1 && (clAF == 1 || clAG == 1))
{
  scFH = LD_Life_planning_inflator*Paperwork_finances;
}
else if(scB == 2 && (clAF == 1 || clAG == 1))
{
  scFH = MH_Life_planning_inflator*Paperwork_finances;
}
else if(scB == 0 && (clAF == 1 || clAG == 1))
{
  scFH = Paperwork_finances;
}
else
{
  scFH = 0;
}

var scFI = "";
//=(FE59-(FE59*('Clean data'!ER59/100))) + (FF59-(FF59*('Clean data'!ES59/100))) + (FG59-(FG59*('Clean data'!ET59/100)))+ (FH59-(FH59*('Clean data'!EU59/100)))
scFI = (scFE-(scFE*(clER/100))) + (scFF-(scFF*(clES/100))) + (scFG-(scFG*(clET/100))) + (scFH-(scFH*(clEU/100)));


var scFJ = "";
//=IF('Clean data'!O59=0,0,
//IF(AND(B59=2,'Clean data'!Q59=0.5,Social_gym_MH_allocation>0),Social_gym_MH_allocation,
//IF('Clean data'!Q59=0.5,Social_1_Number_Activities,
//IF('Clean data'!Q59=1,Social_2_Number_Activities,
//IF('Clean data'!Q59=2,Social_3_Number_Activities,
//IF('Clean data'!Q59=5,Social_4_Number_Activities,
//IF('Clean data'!Q59=7,Social_5_Number_Activities,0)))))))
if(clO == 0)
{
  scFJ = 0;
}
else if(scB == 2 && clQ == 0.5 && Social_gym_MH_allocation >0)
{
  scFJ = Social_gym_MH_allocation;
}
else if(clQ == 0.5)
{
  scFJ = Social_1_Number_Activities;
}
else if(clQ == 1)
{
  scFJ = Social_2_Number_Activities;
}
else if(clQ == 2)
{
  scFJ = Social_3_Number_Activities;
}
else if(clQ == 5)
{
  scFJ = Social_4_Number_Activities;
}
else if(clQ == 7)
{
  scFJ = Social_5_Number_Activities;
}
else
{
  scFJ = 0;
}

var scFK = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!FZ59=1,ET59>=65),0,
//IF(AND(FullTime_Education_switch=1,'Clean data'!FZ59=1,Scores!FJ59>Full_time_education_social),Full_time_education_social,
//IF(AND(FullTime_Education_switch=1,'Clean data'!FZ59=1,Scores!FJ59<=Full_time_education_social),Scores!FJ59,
//IF(AND(EQ59=1,'Clean data'!DJ59>=6,((FJ59*Social_activity_hours)+ET59)>65),0,Scores!FJ59))))
if(FullTime_Education_switch == 1 && clFZ == 1 && scET >= 65)
{
  scFK = 0;
}
else if(FullTime_Education_switch == 1 && clFZ == 1 && scFJ > Full_time_education_social)
{
  scFK = Full_time_education_social;
}
else if(FullTime_Education_switch == 1 && clFZ == 1 && scFJ <= Full_time_education_social)
{
  scFK = scFJ;
}
else if(scEQ == 1 && clDJ >= 6 && ((scFJ*Social_activity_hours)+scET)>65)
{
  scFK = 0;
}
else
{
  scFK = scFJ;
}

var scFL = "";
//=IF(AND('Clean data'!Q59=5,'Clean data'!EV59=2),Social_work_informal_2to3a_value,
//IF('Clean data'!EV59=0.5,Social_1_Number_Activities,
//IF('Clean data'!EV59=1,Social_2_Number_Activities,
//IF('Clean data'!EV59=2,Social_3_Number_Activities,
//IF('Clean data'!EV59=5,Social_4_Number_Activities,
//IF('Clean data'!EV59=7,Social_5_Number_Activities,0))))))
if(clQ == 5 && clEV == 2)
{
  scFL = Social_work_informal_2to3a_value;
}
else if(clEV == 0.5)
{
  scFL = Social_1_Number_Activities;
}
else if(clEV == 1)
{
  scFL = Social_2_Number_Activities;
}
else if(clEV == 2)
{
  scFL = Social_3_Number_Activities;
}
else if(clEV == 5)
{
  scFL = Social_4_Number_Activities;
}
else if(clEV == 7)
{
  scFL = Social_5_Number_Activities;
}
else
{
  scFL = 0;
}

var scFM = "";
//=IF(AND('Clean data'!Q59=7,'Clean data'!EV59<7,Social_5_Number_Activities<7,(FL59-(7-Social_5_Number_Activities))>=0),(FL59-(7-Social_5_Number_Activities)),
//IF(AND('Clean data'!Q59=7,'Clean data'!EV59<7,Social_5_Number_Activities<7,(FL59-(7-Social_5_Number_Activities))<0),0,
//IF(AND('Clean data'!Q59=5,'Clean data'!EV59<5,Social_4_Number_Activities<5,(FL59-(5-Social_4_Number_Activities))>=0),(FL59-(5-Social_4_Number_Activities)),
//IF(AND('Clean data'!Q59=5,'Clean data'!EV59<5,Social_4_Number_Activities<5,(FL59-(5-Social_4_Number_Activities))<0),0,FL59))))
if(clQ == 7 && clEV < 7 && Social_5_Number_Activities <7 && (scFL-(7-Social_5_Number_Activities))>=0)
{
  scFM = (scFL-(7-Social_5_Number_Activities));
}
else if(clQ == 7 && clEV < 7 && Social_5_Number_Activities <7 && (scFL-(7-Social_5_Number_Activities))<0)
{
  scFM = 0;
}
else if(clQ == 5 && clEV < 5 && Social_4_Number_Activities <5 && (scFL-(5-Social_4_Number_Activities))>=0)
{
  scFM = (scFL-(5-Social_4_Number_Activities));
}
else if(clQ == 5 && clEV < 5 && Social_4_Number_Activities <5 && (scFL-(5-Social_4_Number_Activities))<0)
{
  scFM = 0;
}
else
{
  scFM = scFL;
}

var scFN = "";
//=IF(FJ59>FK59,(FK59*U59),(FJ59*U59))
if(scFJ > scFK)
{
  scFN = (scFK*scU);
}
else
{
  scFN = (scFJ*scU);
}

var scFO = "";
//=IF(FJ59>FK59,FK59*M59,(FJ59*M59))
if(scFJ > scFK)
{
  scFO = scFK*scM;
}
else
{
  scFO = (scFJ*scM);
}

var scFP = "";
//=IF('Clean data'!EW59=0.25,0,
//IF(FK59-FM59<0,0,((FK59-FM59)*U59)))
if(clEW == 0.25)
{
  scFP = 0;
}
else if(scFK-scFM <0)
{
  scFP = 0;
}
else 
{
  scFP = ((scFK-scFM)*scU)
}

var scFQ = ""
//=IF('Clean data'!EW59=0.25,0,
//IF(FK59-FM59<0,0,
//IF(AND('Clean data'!O59=4,Scores!FK59>0,'Clean data'!EV59=50),0,((FK59-FM59)*M59))))
if(clEW == 0.25)
{
  scFQ = 0;
}
else if(scFK-scFM <0)
{
  scFQ = 0;
}
else if(clO == 4 && scFK > 0 && clEV == 50)
{
  scFQ = 0;
}
else
{
  scFQ = ((scFK-scFM)*scM);
}

var scFR = "";
//=IF('Clean data'!V59=0,0,
//IF('Clean data'!X59=0.5,Work_edu_1_Number_Activities,
//IF('Clean data'!X59=1,Work_edu_2_Number_Activities,
//IF('Clean data'!X59=2,Work_edu_3_Number_Activities,
//IF('Clean data'!X59=5,Work_edu_4_Number_Activities,
//IF('Clean data'!X59=7,Work_edu_5_Number_Activities,0))))))
if(clV == 0)
{
  scFR = 0;
}
else if(clX == 0.5)
{
  scFR = Work_edu_1_Number_Activities;
}
else if(clX == 1)
{
  scFR = Work_edu_2_Number_Activities;
}
else if(clX == 2)
{
  scFR = Work_edu_3_Number_Activities;
}
else if(clX == 5)
{
  scFR = Work_edu_4_Number_Activities;
}
else if(clX == 7)
{
  scFR = Work_edu_5_Number_Activities;
}
else
{
  scFR = 0;
}

var scFS = "";
//=IF(AND('Clean data'!X59=5,'Clean data'!EX59=2),Social_work_informal_2to3a_value,
//IF('Clean data'!EX59=0.5, Work_edu_1_Number_Activities, 
//IF('Clean data'!EX59=1, Work_edu_2_Number_Activities, 
//IF('Clean data'!EX59=2, Work_edu_3_Number_Activities, 
//IF('Clean data'!EX59=5, Work_edu_4_Number_Activities, 
//IF('Clean data'!EX59=7, Work_edu_5_Number_Activities, 0))))))
if(clX == 5 && clEX == 2)
{
  scFS = Social_work_informal_2to3a_value;
}
else if(clEX == 0.5)
{
  scFS = Work_edu_1_Number_Activities;
}
else if(clEX == 1)
{
  scFS = Work_edu_2_Number_Activities;
}
else if(clEX == 2)
{
  scFS = Work_edu_3_Number_Activities;
}
else if(clEX == 5)
{
  scFS = Work_edu_4_Number_Activities;
}
else if(clEX == 7)
{
  scFS = Work_edu_5_Number_Activities;
}
else
{
  scFS = 0;
}

var scFT = "";
//=IF(AND('Clean data'!X59=7,'Clean data'!EX59<7,Work_edu_5_Number_Activities<7,(FS59-(7-Work_edu_5_Number_Activities))>=0),(FS59-(7-Work_edu_5_Number_Activities)),
//IF(AND('Clean data'!X59=7,'Clean data'!EX59<7,Work_edu_5_Number_Activities<7,(FS59-(7-Work_edu_5_Number_Activities))<0),0,
//IF(AND('Clean data'!X59=5,'Clean data'!EX59<5,Work_edu_4_Number_Activities<5,(FS59-(5-Work_edu_4_Number_Activities))>=0),(FS59-(5-Work_edu_4_Number_Activities)),
//IF(AND('Clean data'!X59=5,'Clean data'!EX59<5,Work_edu_4_Number_Activities<5,(FS59-(5-Work_edu_4_Number_Activities))<0),0,FS59))))
if(clX == 7 && clEX < 7 && Work_edu_5_Number_Activities<7 && (scFS-(7-Work_edu_5_Number_Activities))>=0)
{
  scFT = (scFS-(7-Work_edu_5_Number_Activities));
}
else if(clX == 7 && clEX < 7 && Work_edu_5_Number_Activities <7 && (scFS-(7-Work_edu_5_Number_Activities))<0)
{
  scFT = 0;
}
else if(clX == 5 && clEX < 5 && Work_edu_4_Number_Activities <5 && (scFS-(5-Work_edu_4_Number_Activities))>=0)
{
  scFT = (scFS-(5-Work_edu_4_Number_Activities))
}
else if(clX == 5 && clEX < 5 && Work_edu_4_Number_Activities <5 && (scFS-(5-Work_edu_4_Number_Activities))<0)
{
  scFT = 0;
}
else
{
  scFT = scFS;
}

var scFU = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!FZ59=1),0,(FR59*V59))
if(FullTime_Education_switch == 1 && clFZ == 1)
{
  scFU = 0;
}
else
{
  scFU = (scFR*scV)
}

var scFV = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!FZ59=1),0,(FR59*Q59))
if(FullTime_Education_switch == 1 && clFZ == 1)
{
  scFV = 0;
}
else
{
  scFV = (scFR*scQ);
}

var scFW = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!FZ59=1),0,
//IF('Clean data'!EY59=0.25,0,
//IF(FR59-FT59<0,0,((FR59-FT59)*V59))))
if(FullTime_Education_switch == 1 && clFZ == 1)
{
  scFW = 0;
}
else if(clEY == 0.25)
{
  scFW = 0;
}
else if(scFR-scFT <0)
{
  scFW = 0;
}
else
{
  scFW = ((scFR-scFT)*scV);
}

var scFX = "";
//=IF(AND(FullTime_Education_switch=1,'Clean data'!FZ59=1),0,
//IF('Clean data'!EY59=0.25,0,
//IF(FR59-FT59<0,0,
//IF(AND('Clean data'!V59=4,FR59>0,'Clean data'!EX59=50),0,(FR59-FT59)*Q59))))
if(FullTime_Education_switch == 1 && clFZ == 1)
{
  scFX = 0;
}
else if(clEY == 0.25)
{
  scFX = 0;
}
else if(scFR-scFT <0)
{
  scFX = 0;
}
else if(clV == 4 && scFR > 0 && clEX == 50)
{
  scFX = 0;
}
else
{
  scFX = ((scFR-scFT)*scQ);
}

var scFY = "";
//=IF(Work_edu_Overlap=1,MAX(FP59,FW59),
//IF(AND(Work_edu_Overlap=0,(FP59+FW59)<=Max_non_overlap*(MAX((U59),(V59)))),FP59+FW59,
//IF(AND(Work_edu_Overlap=0,(FP59+FW59)>Max_non_overlap*(MAX((U59),(V59)))),Max_non_overlap*(MAX((U59),(V59))),0)))
if(Work_edu_Overlap == 1)
{
  scFY = Math.max(scFP,scFW);
}
else if(Work_edu_Overlap == 0 && (scFP+scFW)<=Max_non_overlap*(Math.max((scU),(scV))))
{
  scFY = scFP+scFW;
}
else if(Work_edu_Overlap == 0 && (scFP+scFW)>Max_non_overlap*(Math.max((scU),(scV)))) 
{
  scFY = Max_non_overlap*(Math.max((scU),(scV)))
}
else
{
  scFY = 0;
}

var scFZ = "";
//=IF(Work_edu_Overlap=1,MAX(FQ59,FX59),
//IF(AND(Work_edu_Overlap=0,(FQ59+FX59)<=Max_non_overlap*(MAX(M59,Q59))),FQ59+FX59,
//IF(AND(Work_edu_Overlap=0,(FQ59+FX59)>Max_non_overlap*(MAX(M59,Q59))),Max_non_overlap*(MAX(M59,Q59)),0)))
if(Work_edu_Overlap == 1)
{
  scFZ = Math.max(scFQ,scFX);
}
else if((Work_edu_Overlap == 0 && (scFQ+scFX)<=Max_non_overlap*(Math.max(scM,scQ))))
{
  scFZ = scFQ+scFX;
}
else if((Work_edu_Overlap == 0 && (scFQ+scFX)>Max_non_overlap*(Math.max(scM,scQ))))
{
  scFZ = Max_non_overlap*(Math.max(scM,scQ));
}
else
{
  scFZ = 0;
}

var scGA = "";
//=IF(Work_edu_Overlap=1,MAX(Scores!FN59,Scores!FU59),
//IF(AND(Work_edu_Overlap=0,(Scores!FN59+Scores!FU59)<=5*(MAX((U59),(V59)))),Scores!FN59+Scores!FU59,
//IF(AND(Work_edu_Overlap=0,(Scores!FN59+Scores!FU59)>5*(MAX((U59),(V59)))),
//5*(MAX((U59),(V59))),0)))
if(Work_edu_Overlap == 1)
{
  scGA = Math.max(scFN,scFU);
}
else if((Work_edu_Overlap == 0 && (scFN+scFU)<=5*(Math.max((scU),(scV)))))
{
  scGA = scFN+scFU;
}
else if(Work_edu_Overlap == 0 && (scFN+scFU)>5*(Math.max((scU),(scV))))
{
  scGA = 5*(Math.max((scU),(scV)));
}
else
{
  scGA = 0;
}

var scGB = "";
//=IF(Work_edu_Overlap=1,MAX(Scores!FO59,Scores!FV59),
//IF(AND(Work_edu_Overlap=0,(Scores!FO59+Scores!FV59)<=5*(MAX((M59),(Q59)))),Scores!FO59+Scores!FV59,
//IF(AND(Work_edu_Overlap=0,(Scores!FO59+Scores!FV59)>5*(MAX((M59),(Q59)))),5*(MAX((M59),(Q59))),0)))
if(Work_edu_Overlap == 1)
{
  scGB = Math.max(scFO,scFV);
}
else if(Work_edu_Overlap == 0 && (scFO + scFV)<=5*(Math.max((scM),(scQ))))
{
  scGB = scFO + scFV;
}
else if(Work_edu_Overlap == 0 && (scFO + scFV)>5*(Math.max((scM),(scQ))))
{
  scGB = 5*(Math.max((scM),(scQ)));
}
else
{
  scGB = 0;
}

var scGC = "";
//=(FY59+FZ59)-(FP59+FQ59)
scGC = ((scFY + scFZ)-(scFP + scFQ))

var scGD = "";
//=IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,OR('Clean data'!FW59=9,'Clean data'!FW59=7),'Clean data'!FY59=1),FZ59,
//IF(AND('Clean data'!DJ59=8,OR('Clean data'!FW59=9,'Clean data'!FW59=7)),FZ59,
//IF(AND('Clean data'!DJ59=9,OR('Clean data'!FW59=9,'Clean data'!FW59=7)),0,
//IF(AND('Clean data'!DJ59<9,(ER59*W59)>=FY59),FZ59,
//IF(AND('Clean data'!DJ59=9,(ER59*W59)+(ES59*Second_carer_safety_rate)>=(FY59+FZ59)),0,(FY59+FZ59)-(ER59*W59))))))
if(clDJ > 5 && clDJ < 8 && (clFW == 9 || clFW == 7) && clFY == 1)
{
  scGD = scFZ;
}
else if(clDJ == 8 && (clFW == 9 || clFW == 7))
{
  scGD = scFZ;
}
else if(clDJ == 9 && (clFW == 9 || clFW == 7))
{
  scGD = 0;
}
else if(clDJ < 9 && (scER*scW)>= scFY)
{
  scGD = scFZ;
}
else if(clDJ == 9 && (scER*scW) + (scES*Second_carer_safety_rate)>=(scFY+scFZ))
{
  scGD = 0;
}
else
{
  scGD = (scFY+scFZ)-(scER*scW);
}

var scGE = "";
//=IF(AND('Clean data'!DJ59=6,'Clean data'!V59=4,FX59>0,GD59-(FP59+FQ59)<=0,FX59-FQ59<0),0,
//IF(AND('Clean data'!DJ59<9,'Clean data'!V59=4,FX59>0,GD59-(FP59+FQ59)<=0,FX59-FQ59<0),0,
//IF(AND('Clean data'!DJ59<9,'Clean data'!V59=4,FX59>0,GD59-(FP59+FQ59)<=0),FX59-FQ59,
//IF(GD59-(FP59+FQ59)<=0,0,GD59-(FP59+FQ59)))))
if(clDJ == 6 && clV == 4 && scFX > 0 && scGD - (scFP+scFQ)<=0 && scFX - scFQ < 0)
{
  scGE = 0;
}
else if(clDJ < 9 && clV == 4 && scFX > 0 && scGD - (scFP + scFQ)<= 0 && scFX - scFQ < 0)
{
  scGE = 0;
}
else if(clDJ < 9 && clV == 4 && scFX > 0 && scGD - (scFP + scFQ)<= 0)
{
  scGE = scFX-scFQ;
}
else if(scGD - (scFP+scFQ)<=0)
{
  scGE = 0;
}
else
{
  scGE = scGD - (scFP+scFQ);
}

var scGF = "";
//=IF(GA59=0,0,
//IF(GA59=FU59,((GA59)/V59)*Social_activity_hours,((GA59)/U59)*Social_activity_hours))*Scores!AA59
if(scGA == 0)
{
  scGF = 0;
}
else if(scGA == scFU )
{
  scGF = ((scGA)/scV)*Social_activity_hours;
}
else
{
  scGF = (((scGA)/scU)*Social_activity_hours)*scAA;
}

var scGG = "";
//=IF(GB59=0,0,
//IF(GB59=FV59,((GB59)/V59)*Social_activity_hours,((GB59)/U59)*Social_activity_hours))*Scores!AA59
if(scGB == 0)
{
  scGG = 0;
}
else if(scGB == scFV)
{
  scGG = ((scGB)/scV)*Social_activity_hours;
}
else 
{
  scGG = (((scGB)/scU)*Social_activity_hours)*scAA;
}

var scGH = "";
//=IF(GE59=0,0,(((GE59/V59)*Social_activity_hours)*PA_Homecare_rate))
if(scGE == 0)
{
  scGH = 0;
}
else 
{
  scGH = (((scGE/scV)*Social_activity_hours)*PA_Homecare_rate);
}

var scGI = "";
//=IF('Clean data'!EP59=0, 0,'Clean data'!EP59/100)
if(clEP == 0)
{
  scGI = 0;
}
else
{
  scGI = clEP/100;
}

var scGJ = "";
//=IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!D59>=1),'Clean data'!DK59=0.5),NightAlarm,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=2,'Clean data'!DK59=0.5),Enhc_Tier3_NightAlarm,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=1,'Clean data'!DK59=0.5),Enhc_Tier2_NightAlarm,
//IF(AND(Scores!D59=2,'Clean data'!DK59=0.5),Enhc_Tier3_NightAlarm,
//IF(AND(Scores!D59=1,'Clean data'!DK59=0.5),Enhc_Tier2_NightAlarm,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=1,'Clean data'!DK59=0.5),LD_NightAlarm,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=2,'Clean data'!DK59=0.5),MH_NightAlarm,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=2,'Clean data'!DK59>=1,'Clean data'!DK59<=3),Enhc_Tier3_NightOnce,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=1,'Clean data'!DK59>=1,'Clean data'!DK59<=3),Enhc_Tier2_NightOnce,
//IF(AND(Scores!D59=2,'Clean data'!DK59>=1,'Clean data'!DK59<=3),Enhc_Tier3_NightOnce,
//IF(AND(Scores!D59=1,'Clean data'!DK59>=1,'Clean data'!DK59<=3),Enhc_Tier2_NightOnce,
//IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!D59>=1),'Clean data'!DK59>=1,'Clean data'!DK59<=3),NightOnce,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=1,'Clean data'!DK59>=1,'Clean data'!DK59<=3),LD_NightOnce,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=2,'Clean data'!DK59>=1,'Clean data'!DK59<=3),MH_NightOnce,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=2,'Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),Enhc_Tier3_NightSleep_in,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=1,'Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),Enhc_Tier2_NightSleep_in,
//IF(AND(Scores!D59=2,'Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),Enhc_Tier3_NightSleep_in,
//IF(AND(Scores!D59=1,'Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),Enhc_Tier2_NightSleep_in,
//IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!D59>=1),'Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),NightSleep_in,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=1,'Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),LD_NightSleep_in,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=2,'Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),MH_NightSleep_in,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=2,'Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),Enhc_Tier3_NightWaking,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=1,'Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),Enhc_Tier2_NightWaking,
//IF(AND(Scores!D59=2,'Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),Enhc_Tier3_NightWaking,
//IF(AND(Scores!D59=1,'Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),Enhc_Tier2_NightWaking,
//IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!D59>=1),'Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),NightWaking,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=1,'Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),LD_NightWaking,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=2,'Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),MH_NightWaking,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=2,'Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),Enhc_Tier3_NightSleep_in+Enhc_Tier3_NightSleep_in,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=1,'Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),Enhc_Tier2_NightSleep_in+Enhc_Tier2_NightSleep_in,
//IF(AND(Scores!D59=2,'Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),Enhc_Tier3_NightSleep_in+Enhc_Tier3_NightSleep_in,
//IF(AND(Scores!D59=1,'Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),Enhc_Tier2_NightSleep_in+Enhc_Tier2_NightSleep_in,
//IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!D59>=1),'Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),NightSleep_in+NightSleep_in,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=1,'Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),LD_NightSleep_in+LD_NightSleep_in,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=2,'Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),MH_NightSleep_in+MH_NightSleep_in,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=2,'Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),Enhc_Tier3_NightWaking+Enhc_Tier3_NightSleep_in,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=1,'Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),Enhc_Tier2_NightWaking+Enhc_Tier2_NightSleep_in,
//IF(AND(Scores!D59=2,'Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),Enhc_Tier3_NightWaking+Enhc_Tier3_NightSleep_in,
//IF(AND(Scores!D59=1,'Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),Enhc_Tier2_NightWaking+Enhc_Tier2_NightSleep_in,
//IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!D59>=1),'Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),NightWaking+NightSleep_in,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=1,'Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),LD_NightWaking+LD_NightSleep_in,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=2,'Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),MH_NightWaking+MH_NightSleep_in,0))))))))))))))))))))))))))))))))))))))))))
if((scB != 1) && (scB != 2) && (scD >= 1) && clDK == 0.5)
{
  scGJ = NightAlarm;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 2 && scDK == 0.5)
{
  scGJ = Enhc_Tier3_NightAlarm;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 1 && scDK == 0.5)
{
  scGJ = Enhc_Tier2_NightAlarm;
}
else if(scD == 2 && clDK == 0.5)
{
  scGJ = Enhc_Tier3_NightAlarm;
}
else if(scD == 1 && clDK == 0.5)
{
  scGJ = Enhc_Tier2_NightAlarm;
}
else if((scD != 1) && (scB == 1 && (clDK == 0.5)))
{
  scGJ = LD_NightAlarm;
}
else if((scD != 1) && scB == 2 && clDK == 0.5)
{
  scGJ = MH_NightAlarm;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 2 && clDK >= 1 && clDK <= 3)
{
  scGJ = Enhc_Tier3_NightOnce;
}
else if(OUT_DSTNeedsProfile=1 && scE == 1 && clDK>=1 && clDK<=3)
{
  scGJ = Enhc_Tier2_NightOnce;
}
else if(scD == 2 && clFK>=1 && clDK<=3)
{
  scGJ = Enhc_Tier3_NightOnce;
}
else if(scD == 1 && clFK>=1 && clDK<=3)
{
  scGJ = Enhc_Tier2_NightOnce;
}
else if(((scB != 1) && (scB != 2),(scD < 1) && clDK >=1 && clDK <=3))
{
  scGJ = NightOnce;
}
else if(((scD < 1) && scB == 1 && clDK>=1 && clDK <=3))
{
  scGJ = LD_NightOnce;
}
else if(((scD < 1) && scB == 2 && clDK >=1 && clDK <=3))
{
  scGJ = MH_NightOnce;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 2 && clDK == 5 && clDL < WakingImpactLevel)
{
  scGJ = Enhc_Tier3_NightSleep_in; 
}
else if(OUT_DSTNeedsProfile == 1 && scE == 1 && clDK == 5 && clDL < WakingImpactLevel)
{
  scGJ = Enhc_Tier2_NightSleep_in;
}
else if(scD == 2 && clDK == 5 && clDL < WakingImpactLevel)
{
  scGJ = Enhc_Tier3_NightSleep_in;
}
else if(scD == 1 && clDK == 5 && clDL < WakingImpactLevel)
{
  scGJ = Enhc_Tier2_NightSleep_in;
}
else if(((scB !=1) && (scB !=2) && (scD < 1) && clDK == 5 && clDL < WakingImpactLevel))
{
  scGJ = NightSleep_in;
}
else if((scD < 1) && scB == 1 && clDK == 5 && clDL < WakingImpactLevel)
{
  scGJ = LD_NightSleep_in;
}
else if((scD < 1) && scB == 2 && clDK == 5 && clDL < WakingImpactLevel)
{
  scGJ = MH_NightSleep_in;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 2 && clDK == 5 && clDL >= WakingImpactLevel)
{
  scGJ = Enhc_Tier3_NightWaking;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 1 && clDK == 5 && clDL >= WakingImpactLevel)
{
  scGJ = Enhc_Tier2_NightWaking;
}
else if(scD == 2 && clDK == 5 && clDL >= WakingImpactLevel)
{
  scGJ = Enhc_Tier3_NightWaking;
}
else if(scD == 1 && clDK == 5 && clDL >= WakingImpactLevel)
{
  scGJ = Enhc_Tier2_NightWaking;
}
else if((scB !=1) && (scB !=2) && (scD  < 1) && clDK == 5 && clDL >= WakingImpactLevel)
{
  scGJ = NightWaking;
}
else if((scD < 1) && scB == 1 && clDK == 5 && clDL >= WakingImpactLevel)
{
  scGJ = LD_NightWaking;
}
else if((scD < 1) && scB == 2 && clDK == 5 && clDL >= WakingImpactLevel)
{
  scGJ = MH_NightWaking
}
else if(OUT_DSTNeedsProfile == 1 && scE == 2 && clDK == 7 && clDL < WakingImpactLevel)
{
  scGJ = Enhc_Tier3_NightSleep_in+Enhc_Tier3_NightSleep_in;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 1 && clDK == 7 && clDL < WakingImpactLevel)
{
  scGJ = Enhc_Tier2_NightSleep_in+Enhc_Tier2_NightSleep_in;
}
else if(scD == 2 && clDK == 7 && clDL < WakingImpactLevel)
{
  scGJ = Enhc_Tier3_NightSleep_in+Enhc_Tier3_NightSleep_in;
}
else if(scD == 1 && clDK == 7 && clDL < WakingImpactLevel)
{
  scGJ = Enhc_Tier2_NightSleep_in+Enhc_Tier2_NightSleep_in;
}
else if((scB !=1) && (scB !=2) && (scD < 1) && clDK == 7 && clDL < WakingImpactLevel)
{
  scGJ = NightSleep_in+NightSleep_in;
}
else if(((scD < 1) && scB == 1 && clDK == 7 && clDL < WakingImpactLevel))
{
  scGJ = LD_NightSleep_in+LD_NightSleep_in;
}
else if(((scD < 1) && scB == 2 && clDK == 7 && clDL < WakingImpactLevel))
{
  scGJ = MH_NightSleep_in+MH_NightSleep_in;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 2 && clDK == 7 && clDL >= WakingImpactLevel)
{
  scGJ = Enhc_Tier3_NightWaking+Enhc_Tier3_NightSleep_in;
}        
else if(OUT_DSTNeedsProfile == 1 && scE == 1 && clDK == 7 && clDL >= WakingImpactLevel)
{
  scGJ = Enhc_Tier2_NightWaking+Enhc_Tier2_NightSleep_in;
}
else if(scD == 2 && clDK == 7 && clDL >= WakingImpactLevel)
{
  scGJ = Enhc_Tier3_NightWaking+Enhc_Tier3_NightSleep_in;
}
else if((scD == 1 && clDK == 7 && clDL >= WakingImpactLevel))
{
  scGJ = Enhc_Tier2_NightWaking+Enhc_Tier2_NightSleep_in;
}
else if((scB != 1) && (scB != 2) && (scD < 1) && clDK == 7 && clDL >= WakingImpactLevel)
{
  scGJ = NightWaking+NightSleep_in;
}
else if((scD < 1) && scB == 1 && clDK == 7 && clDL >= WakingImpactLevel)
{
  scGJ = LD_NightWaking+LD_NightSleep_in;
}
else if((scD < 1) && scB == 2 && clDK == 7 && clDL >= WakingImpactLevel)
{
  scGJ = MH_NightWaking+MH_NightSleep_in;
}
else
{
  scGJ = 0;
}

var scGK = "";
//=IF('Clean data'!DK59=0.5,CHNightAlarm,
//IF(AND('Clean data'!DK59>=1,'Clean data'!DK59<=3),CHNightOnce,
//IF(AND('Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),CHNightSleep_in,
//IF(AND('Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),CHNightWaking,
//IF(AND('Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),CHNightSleep_in+CHNightSleep_in,
//IF(AND('Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),CHNightWaking+CHNightSleep_in,0))))))
if(clDK == 0.5)
{
  scGK = CHNightAlarm;
}
else if(clDK >= 1 && clDK <= 3)
{
  scGK = CHNightOnce;
}
else if(clDK == 5 && clDL < WakingImpactLevel)
{
  scGK = CHNightSleep_in;
}
else if(clDK == 5 && clDL >= WakingImpactLevel)
{
  scGK = CHNightWaking;
}
else if(clDK == 7 && clDL < WakingImpactLevel)
{
  scGK = CHNightSleep_in+CHNightSleep_in;
}
else if(clDK == 7 && clDL >= WakingImpactLevel)
{
  scGK = CHNightWaking+CHNightSleep_in;
}
else
{
  scGK = 0;
}

var scGL = "";
//=IF('Clean data'!DK59=0.5,SHNightAlarm,
//IF(AND('Clean data'!DK59>=1,'Clean data'!DK59<=3),SHNightOnce,
//IF(AND('Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),SHNightSleep_in,
//IF(AND('Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),SHNightWaking,
//IF(AND('Clean data'!DK59=7,'Clean data'!DL59<WakingImpactLevel),SHNightSleep_in+SHNightSleep_in,
//IF(AND('Clean data'!DK59=7,'Clean data'!DL59>=WakingImpactLevel),SHNightWaking+SHNightSleep_in,0))))))
if(clDK == 0.5)
{
  scGL = SHNightAlarm;
}
else if(clDK >=1 && clDK <=3)
{
  scGL = SHNightOnce;
}
else if(clDK == 5 && clDL < WakingImpactLevel)
{
  scGL = SHNightSleep_in;
}
else if(clDK == 5 && clDL >= WakingImpactLevel)
{
  scGL = SHNightWaking;
}
else if(clDK == 7 && clDL<WakingImpactLevel)
{
  scGL = SHNightSleep_in+SHNightSleep_in;
}
else if(clDK == 7 && clDL>=WakingImpactLevel)
{
  scGL = SHNightWaking+SHNightSleep_in;
}
else
{
  scGL = 0;
}

var scGM = "";
//=IF('Clean data'!DK59=1,GJ59*7,
//IF('Clean data'!DK59=2,(GJ59*7)*2,
//IF('Clean data'!DK59=3,(GJ59*7)*3,GJ59*7)))
if(clDK == 1)
{
  scGM = scGJ*7;
}
else if(clDK == 2)
{
  scGM = (scGJ*7)*2;
}
else if(clDK == 3)
{
  scGM = (scGJ*7)*3;
}
else
{
  scGM = scGJ*7;
}

var scGN = "";
//=SUM('Clean data'!HF59, 'Clean data'!HE59)
scGN = (clHF + clHE);

var scGO = "";
//=SUM('Clean data'!HH59, 'Clean data'!HG59)
scGO = (clHH + clHG);

var scGP = "";
//=SUM('Clean data'!HJ59, 'Clean data'!HI59)
scGP = (clHJ + clHI);

var scGQ = "";
//='Clean data'!HU59
scGQ = clHU;

var scGR = "";
//=IF(OR('Clean data'!HQ59=21,'Clean data'!HR59=21),21,
//IF(OR('Clean data'!HQ59=15,'Clean data'!HR59=15),15,'Clean data'!HQ59+'Clean data'!HR59))
if(clHQ == 21 || clHR == 21)
{
  scGR = 21;
}
else if(clHQ == 15 || clHR == 15)
{
  scGR = 15;
}
else
{
  scGR = clHQ + clHR;
}

var scGS = "";
//='Clean data'!HO59
scGS = clHO;

var scGT = "";
//=IF('Clean data'!GO59=0, 'Clean data'!HM59 + 'Clean data'!HP59 + 'Clean data'!HN59, 0)
if(clGO == 0)
{
  scGT = clHM + clHP + clHN;
}
else
{
  scGT = 0;
}

var scGU = "";
//=IF(OR('Clean data'!GY59=0,'Clean data'!DL59<1),0,VLOOKUP('Clean data'!DL59, NightAlone,2,FALSE)*('Clean data'!HL59/63))
if(clGY == 0 || clDL < 1)
{
  scGU = 0;
}
else
{
  scGU = VLOOKUP(clDL, NightAlone,2,FALSE)*(clHL/63);
}

var scGV = "";
//='Clean data'!HS59
scGV = clHS;

var scGW = "";
//='Clean data'!HT59
scGW = clHT;

var scGX = "";
//=IF('Clean data'!FF59=2, Carer_impact_2, 
//IF('Clean data'!FF59=3, Carer_impact_3, 
//IF('Clean data'!FF59=4, Carer_impact_4, 0)))
if(clFF == 2)
{
  scGX = Carer_impact_2;
}
else if(clFF == 3)
{
  scGX = Carer_impact_3;
}
else if(clFF == 4)
{
  scGX =  Carer_impact_4;
}
else
{
  scGX = 0;
}

var scGY = "";
//=Scores!GN59+Scores!GO59+Scores!GP59+Scores!GS59+Scores!GT59+Scores!GW59
scGY = scGN + scGO + scGP + scGT + scGW;

var scGZ = "";
//=(GY59/PC_Dom_respite_adj)*GX59
scGZ = (scGY/PC_Dom_respite_adj)*scGZ;

var scHA = "";
//=IF('Clean data'!DL59=0,0,
//IF('Clean data'!DL59=1,Scores!GU59,
//IF('Clean data'!DL59=2,Scores!GU59,
//IF('Clean data'!DL59=3,Scores!GU59,
//IF('Clean data'!DL59=4,Scores!GU59/Night_respite_adj,Scores!GU59)))))
if(clDL == 0)
{
  scHA = 0;
}
else if(clDL == 1)
{
  scHA = scGU;
}
else if(clDL == 2)
{
  scHA = scGU;
}
else if(clDL == 3)
{
  scHA = scGU;
}
else if(clDL == 4)
{
  scHA = scGU/Night_respite_adj;
}
else
{
  scHA = scGU;
}

var scHB = "";
//=HA59*GX59
scHB = scHA*scGX;

var scHC = "";
//=MAX(Scores!GQ59,(MAX(Scores!GR59,Scores!GV59)+Scores!GW59))
scHC = Math.max(scGQ, (Math.max(scGR, scGV) + scGW))

var scHD = "";
//=(HC59/Safety_respite_adj)*GX59
scHD = (scHC/Safety_respite_adj)*scGX;

var scHE = "";
//=IF(AND(GZ59>=0,HB59=0,HD59=0),GZ59+HB59+HD59,
//IF(AND(GZ59>=0,HB59>=0,HD59=0),GZ59+HB59+HD59,
//IF(AND(GZ59>=0,HB59=0,HD59>=0,HC59=105),(GZ59*(GY59/56))+HB59+HD59,
//IF(AND(GZ59>=0,HB59=0,HD59>=0),GZ59+HB59+HD59,GZ59+HB59+HD59))))
if(scGZ >= 0 && scHB == 0 && scHD == 0)
{
  scHE = scGZ+scHB+scHD;
}
else if(scGZ >= 0 && scHB >= 0 && scHD == 0)
{
  scHE = scGZ+scHB+scHD;
}
else if(scGZ >= 0 && scHB == 0 && scHD >= 0 && scHC == 105)
{
  scHE = (scGZ*(scGY/56))+scHB+scHD;
}
else if(scGZ >= 0 && scHB == 0 && scHD >= 0)
{
  scHE = scGZ + scHB + scHD;
}
else
{
  scHE = scGZ + scHB + scHD;
}

var scHF= "";
//=IF(HE59>Max_days_respite,Max_days_respite,
//IF(HE59<0.5,0,HE59))
if(scHE > Max_days_respite)
{
  scHF = Max_days_respite;
}
else if(scHE < 0.5)
{
  scHF = 0;
}
else
{
  scHF = scHE;
}

var scHG = "";
//=IF(AND(Dynamic_Care_home=1,Respite_DC=1,NOT(R59="High")),HF59*('Care home calc'!AA59/7),
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E59=1,NOT(R59="High")),HF59*(Tier2_Respite_weekly/7),
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E59=2,NOT(R59="High")),HF59*(Tier3_Respite_weekly/7),
//IF(AND(ModelType>=2,D59=1,NOT(R59="High")),HF59*(Tier2_Respite_weekly/7),
//IF(AND(ModelType>=2,D59=2,NOT(R59="High")),HF59*(Tier3_Respite_weekly/7),
//IF(AND(NOT(B59=1),NOT(B59=2),NOT(C59=1),Scores!D59=0,NOT(R59="High")),HF59*(Respite_weekly/7),
//IF(AND(NOT(B59=1),NOT(B59=2),C59=1,NOT(R59="High")),HF59*(WA_Respite_weekly/7),
//IF(AND(B59=1,NOT(R59="High")),HF59*(LD_Respite_weekly/7),
//IF(AND(B59=2,NOT(R59="High")),HF59*(MH_Respite_weekly/7),0)))))))))
if(Dynamic_Care_home == 1 && Respite_DC == 1 && scR != "High")
{
  scHG = scHF*(carcAA/7);
}
else if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && scE == 1 && scR != "High")
{
  scHG = scHF*(Tier2_Respite_weekly/7);
}
else if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && scE == 2 && scR != "High")
{
  scHG = scHF*(Tier3_Respite_weekly/7);
}
else if(ModelType >=2 && scD == 1 && scR != "High")
{
  scHG = scHF*(Tier2_Respite_weekly/7);
}
else if(ModelType >=2 && scD == 2 && scR != "High")
{
  scHG = scHF*(Tier3_Respite_weekly/7);
}
else if((scB != 1) && (scB != 2) && (scC != 1) && scD == 0 && scR != "High")
{
  scHG = scHF*(Respite_weekly/7);
}
else if(scB != 1 && scB != 2 && scC == 1 && scR != "High")
{
  scHG = scHF*(WA_Respite_weekly/7);
}
else if(scB == 1 && scR != "High")
{
  scHG = scHF*(LD_Respite_weekly/7);
}
else if(scB == 2 && scR != "High" )
{
  scHG = scHF*(MH_Respite_weekly/7);
}
else
{
  scHG = 0;
}

var scHH = "";
//=IF(AND(Dynamic_Care_home=1,Respite_DC=1,R59="High"),HF59*('Care home calc'!AE59/7),
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E59=1,R59="High"),HF59*(Tier2_Respite_weekly/7),
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E59=2,R59="High"),HF59*(Tier3_Respite_weekly/7),
//IF(AND(ModelType>=2,D59=1,R59="High"),HF59*(Tier2_Respite_weekly/7),
//IF(AND(ModelType>=2,D59=2,R59="High"),HF59*(Tier3_Respite_weekly/7),
//IF(AND(NOT(B59=1),NOT(B59=2),NOT(C59=1),Scores!D59=0,R59="High"),HF59*(High_respite_weekly/7),
//IF(AND(NOT(B59=1),NOT(B59=2),C59=1,R59="High"),HF59*(WA_High_respite_weekly/7),
//IF(AND(B59=1,R59="High"),HF59*(LD_High_respite_weekly/7),
//IF(AND(B59=2,R59="High"),HF59*(MH_High_respite_weekly/7),0)))))))))
if(Dynamic_Care_home == 1 && Respite_DC == 1 && scR == "High")
{
  scHH = scHF*(carcAE/7);
}
else if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && scE == 1 && scR == "High")
{
  scHH = scHF*(Tier2_Respite_weekly/7);
}
else if(ModelType >= 2 && OUT_DSTNeedsProfile == 1 && scE == 2 && scR == "High")
{
  scHH = scHF*(Tier3_Respite_weekly/7);
}
else if(ModelType>=2  && scD == 1 && scR == "High")
{
  scHH = scHF*(Tier2_Respite_weekly/7);
}
else if(ModelType >=2 && scD == 2 && scR == "High")
{
  scHH = scHF*(Tier3_Respite_weekly/7);
}
else if(scB != 1 && scB != 2 && scC != 1 && scD == 0 && scR == "High")
{
  scHH = scHF*(High_respite_weekly/7);
}
else if(scB != 1 && scB != 2 && scC == 1 && scR == "High")
{
  scHH = scHF*(WA_High_respite_weekly/7);
}
else if(scB == 1 && scR == "High")
{
  scHH = scHF*(LD_High_respite_weekly/7);
}
else if(scB == 2 && scR == "High")
{
  scHH = scHF*(MH_High_respite_weekly/7);
}
else
{
  scHH = 0;
}

var scHI = "";
//=IF('Clean data'!FG59=0,0,(MAX(HG59,HH59)/52.14))
if(clFG == 0)
{
  scHI = 0;
}
else
{
  scHI = Math.max(scHG,scHH)/52.14;
}

var scHJ = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E59=1,F59=0,Tier2_High_end_cap>0),Tier2_High_end_cap,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,E59=2,F59=0,Tier3_High_end_cap>0),Tier3_High_end_cap,
//IF(AND(ModelType>=2,D59=1,F59=0,Tier2_High_end_cap>0),Tier2_High_end_cap,
//IF(AND(ModelType>=2,D59=2,F59=0,Tier3_High_end_cap>0),Tier3_High_end_cap,
//IF(AND(NOT(B59=1),NOT(B59=2),NOT(C59=1),F59=0,High_end_cap>0),High_end_cap,
//IF(AND(B59=1,F59=0,LD_High_end_cap>0),LD_High_end_cap,
//IF(AND(C59=1,F59=0,WA_High_end_cap>0),WA_High_end_cap,
//IF(AND(B59=2,F59=0,MH_High_end_cap>0),MH_High_end_cap,0))))))))
if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && scE == 1 && scF == 0 && Tier2_High_end_cap > 0)
{
  scHJ = Tier2_High_end_cap;
}
else if(ModelType >=2 && OUT_DSTNeedsProfile == 1 && scE == 2 && scF == 0 && Tier3_High_end_cap > 0)
{
  scHJ = Tier3_High_end_cap;
}
else if(ModelType>=2 && scD == 1 && scF == 0 && Tier2_High_end_cap > 0)
{
  scHJ = Tier2_High_end_cap;
}
else if(ModelType >=2 && scD == 2 && scF == 0 && Tier3_High_end_cap > 0)
{
  scHJ = Tier3_High_end_cap;
}
else if(scB != 1 && scB != 2 && scC != 1 && scF == 0 && High_end_cap > 0)
{
  scHJ = High_end_cap;
}
else if(scB == 1 && scF == 0 && LD_High_end_cap > 0)
{
  scHJ = LD_High_end_cap;
}
else if(scC == 1 && scF == 0 && WA_High_end_cap > 0)
{
  scHJ = WA_High_end_cap;
}
else if(scB == 2 && scF == 0 && MH_High_end_cap > 0)
{
  scHJ = MH_High_end_cap;
}
else
{
  scHJ = 0;
}

var scHK = "";
//=IF(AND(OR('Clean data'!FW59=12,'Clean data'!FW59=15),Dynamic_Care_home=1,OR(AND(Dynamic_Hours_Cap>0,'Care home calc'!W59>Dynamic_Hours_Cap))),"Capped",
//IF(OR(AND('Clean data'!FW59=12,Dynamic_Care_home=1, 'Care home calc'!AA59<'Care home calc'!Z59), AND('Clean data'!FW59=15,Dynamic_Care_home=1, 'Care home calc'!AE59<'Care home calc'!AD59)),"Capped",
//IF(OR(AND('Clean data'!FW59=12,Dynamic_Care_home=1, NOT('Care home calc'!AA59<'Care home calc'!Z59)), AND('Clean data'!FW59=15,Dynamic_Care_home=1, NOT('Care home calc'!AE59<'Care home calc'!AD59))),"",
//IF(OR(AND(OR('Clean data'!FW59=12,'Clean data'!FW59=15),Calculator!AC59<Community!Q59),AND(OR('Clean data'!FW59=12,'Clean data'!FW59=15),Care_home_allocation=0),AND('Clean data'!FW59=3,OR(Live_in_Carer_Allocation=0,Calculator!AC59<Community!Q59)),AND('Clean data'!FW59=10,OR(Shared_Lives_Allocation=0,Calculator!AC59<Community!Q59)),Calculator!AF59<Calculator!AE59),"Capped",""))))
if((clFW == 12 || clFW == 15) && Dynamic_Care_home == 1 && (Dynamic_Hours_Cap > 0 &&  carcW > Dynamic_Hours_Cap))
{
  scHK = "Capped";
}
else if((clFW == 12 && Dynamic_Care_home == 1 && carcAA < carcZ)|| (clFW == 15 && Dynamic_Care_home == 1 && carcAE < carCAD))
{
  scHK = "Capped";
}
else if((clFW == 12 && Dynamic_Care_home == 1 && carcAA >= carcZ)|| (clFW == 15 && Dynamic_Care_home == 1 && (carcAE >=carcAD)))
{
  scHK = "";
}
else if((clFW == 12 || clFW == 15)&& (calAC < comQ)&& ((clFW == 12 || clFW == 15)&&Care_home_allocation == 0 )&& (clFW == 3 && (Live_in_Carer_Allocation == 0 || calAC < comQ))&& (clFW == 10 && (Shared_Lives_Allocation == 0 || calAC < comQ))&& calAF < calAE)
{
  scHK = "Capped";
}
else
{
  scHK = "";
}

var scHL = "";
//=IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!F59<'Supp. Living'!D59+'Supp. Living'!B59),"As the service user requires constant presence/supervision, an allocation has been made for daytime safety which covers some or all of the essential daily living tasks allocation",
//IF(AND('Clean data'!FW59=9.5,'Other ALS'!E59<'Other ALS'!C59+'Other ALS'!B59),"As the service user requires constant presence/supervision, an allocation has been made for daytime safety which covers some or all of the essential daily living tasks allocation",
//IF(AND(NOT('Clean data'!FW59=7),NOT('Clean data'!FW59=9),NOT('Clean data'!FW59=9.5),Community!E59<Community!C59+Community!B59),"As the service user requires constant presence/supervision, an allocation has been made for daytime safety which covers some or all of the essential daily living tasks allocation","")))
if((clFW == 7 || clFW == 9) && supF < supD + supB)
{
  scHL = "As the service user requires constant presence/supervision, an allocation has been made for daytime safety which covers some or all of the essential daily living tasks allocation";
}
else if(clFW == 9.5 && oalE < oalC + oalB)
{
  scHL = "As the service user requires constant presence/supervision, an allocation has been made for daytime safety which covers some or all of the essential daily living tasks allocation";
}
else if((clFW != 7) && (clFW != 9) && (clFW != 9.5)&& comE < comC + comB)
{
  scHL = "As the service user requires constant presence/supervision, an allocation has been made for daytime safety which covers some or all of the essential daily living tasks allocation";
}
else
{
  scHL = "";
}

var scHM = "";
//=IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12,C59=1),(ROUND('Care home calc'!R59*4,0)/4)*Res_Hours_PD_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12,B59=1),(ROUND('Care home calc'!R59*4,0)/4)*Res_Hours_LD_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12,B59=2),(ROUND('Care home calc'!R59*4,0)/4)*Res_Hours_MH_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12,B59=0),(ROUND('Care home calc'!R59*4,0)/4)*Res_Hours_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15,C59=1),(ROUND('Care home calc'!R59*4,0)/4)*Nurs_hours_PD_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15,B59=1),(ROUND('Care home calc'!R59*4,0)/4)*Nurs_hours_LD_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15,B59=2),(ROUND('Care home calc'!R59*4,0)/4)*Nurs_hours_MH_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15,B59=0),(ROUND('Care home calc'!R59*4,0)/4)*Nurs_Hours_Rate,0))))))))
if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12  && scC == 1 )
{
  scHM = (Math.round(carcR*4,0)/4)*Res_Hours_PD_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12 && scB == 1)
{
  scHM = (Math.round(carcR*4,0)/4)*Res_Hours_LD_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12 && scB == 2)
{
  scHM = (Math.round(carcR*4,0)/4)*Res_Hours_MH_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12 && scB == 0)
{
  scHM = (Math.round(carcR*4,0)/4)*Res_Hours_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15 && scC == 1)
{
  scHM = (Math.round(carcR*4,0)/4)*Nurs_hours_PD_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15 && scB == 1)
{
  scHM = (Math.round(carcR*4,0)/4)*Nurs_hours_LD_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15 && scB == 2)
{
  scHM = (Math.round(carcR*4,0)/4)*Nurs_hours_MH_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15 && scB == 0)
{
  scHM = (Math.round(carcR*4,0)/4)*Nurs_Hours_Rate;
}
else
{
  scHM = 0;
}

var scHN = "";
//=IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12,C59=1),(ROUND('Care home calc'!T59*4,0)/4)*Res_Hours_PD_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12,B59=1),(ROUND('Care home calc'!T59*4,0)/4)*Res_Hours_LD_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12,B59=2),(ROUND('Care home calc'!T59*4,0)/4)*Res_Hours_MH_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12,B59=0),(ROUND('Care home calc'!T59*4,0)/4)*Res_Hours_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15,C59=1),(ROUND('Care home calc'!T59*4,0)/4)*Nurs_hours_PD_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15,B59=1),(ROUND('Care home calc'!T59*4,0)/4)*Nurs_hours_LD_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15,B59=2),(ROUND('Care home calc'!T59*4,0)/4)*Nurs_hours_MH_Rate,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15,B59=0),(ROUND('Care home calc'!T59*4,0)/4)*Nurs_Hours_Rate,0))))))))
if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12  && scC == 1 )
{
  scHN = (Math.round(carcT*4,0)/4)*Res_Hours_PD_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12 && scB == 1)
{
  scHN = (Math.round(carcT*4,0)/4)*Res_Hours_LD_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12 && scB == 2)
{
  scHN = (Math.round(carcT*4,0)/4)*Res_Hours_MH_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12 && scB == 0)
{
  scHN = (Math.round(carcT*4,0)/4)*Res_Hours_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15 && scC == 1)
{
  scHN = (Math.round(carcT*4,0)/4)*Nurs_hours_PD_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15 && scB == 1)
{
  scHN = (Math.round(carcT*4,0)/4)*Nurs_hours_LD_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15 && scB == 2)
{
  scHN = (Math.round(carcT*4,0)/4)*Nurs_hours_MH_Rate;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15 && scB == 0)
{
  scHN = (Math.round(carcT*4,0)/4)*Nurs_Hours_Rate;
}
else
{
  scHN = 0;
}

var scHO = "";
//=IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=12),HM59,
//IF(AND(Dynamic_Care_home=1,Scores!F59=1,'Care home calc'!AS59>0,'Clean data'!FW59=15),HM59,
//IF(AND(Scores!HK59="Capped",Calculator!AF59<Calculator!AE59),"Not relevant due to overall model cap",
//IF(AND(Scores!HK59="Capped",Calculator!AD59<Calculator!AC59),"Not relevant due to living situation cap",
//IF(OR('Clean data'!FW59=7,'Clean data'!FW59=9),ROUND('Supp. Living'!F59-'Supp. Living'!D59,2),
//IF('Clean data'!FW59=9.5,ROUND('Other ALS'!E59-'Other ALS'!C59,2),
//IF(AND(PA_Dom_Tasks_Switch=1,'Clean data'!GA59=1),ROUND(Community!V59-Community!T59,2),ROUND(Community!E59-Community!C59,2))))))))
if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 12)
{
  scHO = scHM;
}
else if(Dynamic_Care_home == 1 && scF == 1 && carcAS > 0 && clFW == 15)
{
  scHO = scHM;
}
else if(scHK == "Capped" && calAF < calAE)
{
  scHO = "Not relevant due to overall model cap";
}
else if(scHK == "Capped" && calAD < calAC)
{
  scHO = "Not relevant due to living situation cap";
}
else if(clFW == 7 || clFW == 9)
{
  scHO = Math.round(supF - supD,2)
}
else if(clFW == 9.5)
{
  scHO = Math.round(oalE - oalC,2)
}
else if(PA_Dom_Tasks_Switch == 1 && clGA == 1)
{
  scHO = Math.round(comV-comT,2)
}
else
{
  scHO = Math.round(comE-comC,2)
}

var scHP = "";
//=IF(OR(AND(Work_edu_Overlap=0,OR('Clean data'!FW59=7,'Clean data'!FW59=9),('Supp. Living'!D59+('Supp. Living'!O59-Scores!GE59))=0),AND(Work_edu_Overlap=0,'Clean data'!FW59=9.5,('Other ALS'!C59+(Community!M59-Scores!GE59))=0),AND(Work_edu_Overlap=0,(Community!C59+(Community!M59-Scores!GE59))=0)),0,
//IF(OR(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),ROUND(('Supp. Living'!D59+('Supp. Living'!O59-Scores!GE59)),2)=0),AND('Clean data'!FW59=9.5,ROUND(('Other ALS'!C59+(Community!M59-Scores!GE59)),2)=0),ROUND(Community!C59+(Community!M59-Scores!GE59),2)=0),0,
//IF(OR('Clean data'!FW59=7,'Clean data'!FW59=9),ROUND(('Supp. Living'!D59+('Supp. Living'!O59-Scores!GE59)),2),
//IF('Clean data'!FW59=9.5,ROUND(('Other ALS'!C59+(Community!M59-Scores!GE59)),2),
//IF(AND(PA_Dom_Tasks_Switch=1,'Clean data'!GA59=1),ROUND((Community!T59+(Community!AD59-Scores!GE59)),2),ROUND((Community!C59+(Community!M59-Scores!GE59)),2))))))
if(Work_edu_Overlap == 0 && (clFW == 7 || clFW == 9)&& ((supD + (supO - scGE)==0)) && (Work_edu_Overlap == 0 && clFW == 9.5)&& ((oalC + comM - scGE)== 0)&& ((Work_edu_Overlap == 0 && comC + comM - scGE)==0))
{
  scHP = 0;
}
else if((clFW == 7 || clFW == 9) && Math.round((supD+(supO-scGE)),2)== 0 && (clFW == 9.5 && Math.round((oalC+(comM-scGE)),2)== 0)&& Math.round(comC+(comM-scGE),2)== 0)
{
  scHP = 0;
}
else if((clFW == 7 || clFW == 9))
{
  scHP = Math.round(supD+(supO-scGE));
}
else if(clFW == 9.5)
{
  scHP = Math.round((oalC+(comM-scGE)),2);
}
else if(PA_Dom_Tasks_Switch == 1 && clGA == 1 && (Math.round((comT+(comAD-scGE)),2)))
{
  scHP = Math.round((comC+(comM-scGE)))
}
else
{
  scHP = 2;
}

var scHQ = "";
//=IF(AND(Scores!C59=1),('Care home calc'!D59+'Care home calc'!J59+'Care home calc'!M59)*Res_Hours_PD_Rate,
//IF(AND(Scores!B59=1),('Care home calc'!D59+'Care home calc'!J59+'Care home calc'!M59)*Res_Hours_LD_Rate,
//IF(AND(Scores!B59=2),('Care home calc'!D59+'Care home calc'!J59+'Care home calc'!M59)*Res_Hours_MH_Rate,('Care home calc'!D59+'Care home calc'!J59+'Care home calc'!M59)*Res_Hours_PD_Rate)))
if(scC == 1)
{
  scHQ = (carcD + carcJ + carcM)*Res_Hours_PD_Rate;
}
else if(scB == 1)
{
  scHQ = (carcD + carcJ + carcM)*Res_Hours_LD_Rate;
}
else if(scB == 2)
{
  scHQ = (carcD + carcJ + carcM)*Res_Hours_MH_Rate;
}
else
{
  scHQ = (carcD + carcJ + carcM)*Res_Hours_PD_Rate;
}

var scHR = "";
//=IF(AND('Care home calc'!L59>0,Scores!C59=1),'Care home calc'!L59*Res_Hours_PD_Rate,
//IF(AND('Care home calc'!L59>0,Scores!B59=1),'Care home calc'!L59*Res_Hours_LD_Rate,
//IF(AND('Care home calc'!L59>0,Scores!B59=2),'Care home calc'!L59*Res_Hours_MH_Rate,'Care home calc'!L59*Res_Hours_Rate)))
if(carcL > 0 && scC == 1)
{
  scHR = carcL*Res_Hours_PD_Rate;
}
else if(carcL > 0 && scB == 1)
{
  scHR = carcL*Res_Hours_LD_Rate;
}
else if(carcL > 0 && scB == 2)
{
  scHR = carcL*Res_Hours_MH_Rate;
}
else
{
  scHR = carcL*Res_Hours_Rate;
}

var scHS = "";
//=IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)<2),0,
//IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)>1,'Clean data'!FT59=0),0,
//IF(AND(Scores!HK59="Capped",Calculator!AF59<Calculator!AE59),"Not relevant due to overall model cap",
//IF(Scores!HK59="Capped","Not relevant due to living situation cap",
//IF(OR('Clean data'!FW59=7,'Clean data'!FW59=9),('Supp. Living'!F59-'Supp. Living'!D59)/Y59,
//IF('Clean data'!FW59=9.5,('Other ALS'!E59-'Other ALS'!C59)/X59,
//IF(AND(PA_Dom_Tasks_Switch=1,'Clean data'!GA59=1),(Community!V59-Community!T59)/AA59,(Community!E59-Community!C59)/AC59)))))))
if((ModelType <= 2 && clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR)< 2)
{
  scHS = 0;
}
else if((ModelType <= 2 &&  clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR)> 1 && clFT == 0)
{
  scHS = 0;
}
else if(scHK == "Capped" && calAF < calAE)
{
  scHS = "Not relevant due to overall model cap";
}
else if(scHK == "Capped")
{
  scHS = "Not relevant due to living situation cap";
}
else if(clFW == 7 || clFW == 9)
{
  scHS = (supF-supD)/scY
}
else if(clFW == 9.5)
{
  scHS = (oalE-oalC)/scX
}
else if(PA_Dom_Tasks_Switch == 1 && clGA == 1)
{
  scHS = (comV- comT)/scAA;
}
else
{
  scHS = (comE-comC)/scAC;
}

var scHT = "";
//=IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)<2),0,
//IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)>1, 'Clean data'!FT59=0),0,
//IF(AND(Scores!HK59="Capped",Calculator!AF59<Calculator!AE59),"Not relevant due to overall model cap",
//IF(Scores!HK59="Capped","Not relevant due to living situation cap",Calculator!AB59))))
if((ModelType <= 2 && clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR )< 2)
{
  scHT = 0;
}
else if((ModelType <= 2 && clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR )> 1 && clFT == 0)
{
  scHT = 0;
}
else if(scHK == "Capped" && calAF < calAE)
{
  scHT = "Not relevant due to overall model cap";
}
else if(scHK == "Capped")
{
  scHT = "Not relevant due to living situation cap";
}
else
{
  scHT = calAB;
}

var scHU = "";
//=IF(I59=0,0,
//IF(AND(Scores!HK59="Capped",Calculator!AF59<Calculator!AE59),"Not relevant due to overall model cap",
//IF(Scores!HK59="Capped","Not relevant due to living situation cap",
//IF(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!K59/Y59,
//IF('Clean data'!FW59=9.5,'Other ALS'!I59/X59,Community!I59/AC59)))))
if(scHK == "Capped" && calAF < calAE)
{
  scHU = "Not relevant due to overall model cap";
}
else if(scHK == "Capped")
{
  scHU = "Not relevant due to living situation cap"
}
else if(clFW == 7 || clFW == 9)
{
  scHU = supK/scY;
}
else if(clFW == 9.5)
{
  scHU = oalI/scX;
}
else
{
  scHU = comI/scAC;
}

var scHV = "";
//=IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)<2),0,
//IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)>1, 'Clean data'!FT59=0),0,
//IF(AND(Scores!HK59="Capped",Calculator!AF59<Calculator!AE59),"Not relevant due to overall model cap",
//IF(Scores!HK59="Capped","Not relevant due to living situation cap",
//IF('Clean data'!AA59="",0,'Clean data'!AA59)))))
if((ModelType <= 2 &&  clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR )< 2)
{
  scHV = 0;
}
else if((ModelType <= 2 && clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR)> 1 && clFT == 0)
{
  scHV = 0;
}
else if(scHK == "Capped" && calAF < calAE)
{
  scHV = "Not relevant due to overall model cap";
}
else if(scHK == "Capped")
{
  scHV = "Not relevant due to living situation cap";
}
else if(clAA == "")
{
  scHV = 0;
}
else
{
  scHV = clAA;
}

var scHW = "";
//=Output!M59
scHW = scM;

var scHX = "";
//=IF('Clean data'!DK59=0.5,"Alarm monitor",
//IF('Clean data'!DK59=1,"Pop-ins once per night,",
//IF('Clean data'!DK59=2,"Pop-ins twice per night,",
//IF('Clean data'!DK59=3,"Pop-ins three times per night,",
//IF(AND('Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),"Sleep-ins required",
//IF(AND('Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),"Waking nights required",
//IF('Clean data'!DK59=7,"Support of two care workers at night required","No night support")))))))
if(clDK == 0.5)
{
  scHX = "Alarm monitor";
}
else if(clDK == 1)
{
  scDK = "Pop-ins once per night,";
}
else if(clDK == 2)
{
  scDK = "Pop-ins twice per night,";
}
else if(clDK == 3)
{
  scDK = "Pop-ins three times per night,";
}
else if(clDK == 5 && clDL < WakingImpactLevel)
{
  scDK = "Sleep-ins required";
}
else if(clDK == 5 && clDL >= WakingImpactLevel)
{
  scDK = "Waking nights required";
}
else if(clDK == 7)
{
  scDK = "Support of two care workers at night required";
}
else
{
  scDK = "No night support";
}

var scHY = "";
//=IF(OR(HX59="No Night support",HX59="Alarm monitor"),0,
//IF(AND('Clean data'!DK59=7,'Clean data'!EP59=50)," for 7 nights/week, unpaid family/friend is 2nd carer",
//IF(AND('Clean data'!DK59<7,'Clean data'!EP59=50)," for 7 nights/week",
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=100)," for 0 nights/week",
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=0)," for 7 nights/week",
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=14.2857)," for 6 nights/week",
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=28.5714)," for 5 nights/week",
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=42.8571)," for 4 nights/week",
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=57.1429)," for 3 nights/week",
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=71.4286)," for 2 nights/week",
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=85.7143)," for 1 night/week",0)))))))))))
if(scHX == "No Night support" || scHX == "Alarm monitor")
{
  scHY = 0;
}
else if(clDK == 7 && clEP == 50)
{
  scHY = " for 7 nights/week, unpaid family/friend is 2nd carer";
}
else if(clDK < 7 && clEP == 50)
{
  scHY = " for 7 nights/week";
}
else if(clDK >= 0.5 && clEP == 100)
{
  scHY = " for 0 nights/week";
}
else if(clDK >= 0.5 && clEP == 0)
{
  scHY = " for 7 nights/week";
}
else if(clDK >= 0.5 && clEP == 14.2857)
{
  scHY = " for 6 nights/week";
}
else if(clDK >= 0.5 && clEP == 28.5714)
{
  scHY = " for 5 nights/week";
}
else if(clDK >= 0.5 && clEP == 42.8571)
{
  scHY = " for 4 nights/week";
}
else if(clDK >= 0.5 && clEP == 57.1429)
{
  scHY = " for 3 nights/week";
}
else if(clDK >= 0.5 && clEP == 71.4286)
{
  scHY = " for 2 nights/week";
}
else if(clDK >= 0.5 && clEP == 85.7143)
{
  scHY = " for 1 night/week";
}
else 
{
  scHY = 0;
}

var scHZ = "";
//=IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=0,'Clean data'!FY59=6),", 6 or more service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=0,'Clean data'!FY59=5),", 5 service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=0,'Clean data'!FY59=4),", 4 service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=0,'Clean data'!FY59=3),", 3 service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=0,'Clean data'!FY59=2),", 2 service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=1,Supported_number_reduction=6),", 6 or more service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=1,Supported_number_reduction=5),", 5 service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=1,Supported_number_reduction=4),", 4 service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=1,Supported_number_reduction=3),", 3 service users sharing support",
//IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!Q59<GL59,SH_Default_Reduction=1,Supported_number_reduction=2),", 2 service users sharing support",""))))))))))
if((clFW == 7 ||  clFW == 9) && supQ < scGL && SH_Default_Reduction == 0 && clFY == 6)
{
  scHZ = ", 6 or more service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 0 && clFY == 5)
{
  scHZ = ", 5 service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 0 && clFY == 4) 
{
  scHZ = ", 4 service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 0 && clFY == 3)
{
  scHZ = ", 3 service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 0 && clFY == 2)
{
  scHZ = ", 2 service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 1 && Supported_number_reduction == 6 )
{
  scHZ = ", 6 or more service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 1 && Supported_number_reduction == 5)
{
  scHZ = ", 5 service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 1 && Supported_number_reduction == 4)
{
  scHZ = ", 4 service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 1 && Supported_number_reduction == 3)
{
  scHZ = ", 3 service users sharing support";
}
else if((clFW == 7 || clFW == 9) && supQ < scGL && SH_Default_Reduction == 1 && Supported_number_reduction == 2)
{
  scHZ = ", 2 service users sharing support";
}
else 
{
  scHZ = "";
}

var scIA = "";
//=IF('Clean data'!DK59=0.5,0,
//IF(AND(GJ59>0,'Clean data'!DK59=1),0.5,
//IF(AND(GJ59>0,'Clean data'!DK59=2),1,
//IF(AND(GJ59>0,'Clean data'!DK59=3),1.5,
//IF(AND(GJ59>0,'Clean data'!DK59=5,'Clean data'!DL59<WakingImpactLevel),Night_hours,
//IF(AND(GJ59>0,'Clean data'!DK59=5,'Clean data'!DL59>=WakingImpactLevel),Night_hours,
//IF(AND(GJ59>0,'Clean data'!DK59=7),Night_hours*2,0)))))))
if(clDK == 0.5)
{
  scIA = 0;
}
else if(scGJ > 0 && clDK == 1)
{
  scIA = 0.5;
}
else if(scGJ > 0 && clDK == 2)
{
  scIA = 1;
}
else if(scGJ > 0 && clDK == 3)
{
  scIA = 1.5;
}
else if(scGJ > 0 && clDK == 5 && clDL < WakingImpactLevel)
{
  scIA = Night_hours;
}
else if(scGL > 0 && clDK == 5 && clDL >= WakingImpactLevel)
{
  scIA = Night_hours;
}
else if(scGL > 0 && clDK == 7)
{
  scIA = Night_hours*2;
}
else
{
  scIA = 0;
}

var scIB = "";
//=IF(AND('Clean data'!DK59=7,'Clean data'!EP59=50),((IA59*7)/2),
//IF(AND('Clean data'!DK59<7,'Clean data'!EP59=50),(IA59*7),
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=100),0,
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=0),IA59*7,
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=14.2857),IA59*6,
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=28.5714),IA59*5,
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=42.8571),IA59*4,
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=57.1429),IA59*3,
//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=71.4286),IA59*2,

//IF(AND('Clean data'!DK59>=0.5,'Clean data'!EP59=85.7143),IA59*1,0))))))))))
if(clDK == 7 && clEP == 50)
{
  scIB = ((scIA*7)/2);
}
else if(clDK < 7 && clEP == 50)
{
  scIB = (scIA*7);
}
else if(clDK >= 0.5 && clEP == 100)
{
  scIB = 0;
}
else if(clDK >= 0.5 && clEP == 0)
{
  scIB = scIA*7;
}
else if(clDK >= 0.5 && clEP == 14.2857)
{
  scIB = scIA*6;
}
else if(clDK >= 0.5 && clEP == 28.5714)
{
  scIB = scIA*5;
}
else if(clDK >= 0.5 && clEP == 42.8571)
{
  scIB = scIA*4;
}
else if(clDK >= 0.5 && clEP == 57.1429)
{
  scIB = scIA*3;
}
else if(clDK >= 0.5 && clEP == 71.4286)
{
  scIB = scIA*2;
}
else if(clDK >= 0.5 && clEP == 85.7143)
{
  scIB = scIA*1;
}
else
{
  scIB = 0;
}

var scIC = "";
//=IF(AND('Clean data'!FW59=9,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=2),"24h supported living arrangement – 2 service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=2),"Supported living arrangement – 2 service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=3),"24h supported living arrangement – 3 service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=3),"Supported living arrangement – 3 service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=4),"24h supported living arrangement – 4 service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=4),"Supported living arrangement – 4 service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=5),"24h supported living arrangement – 5 service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=5),"Supported living arrangement – 5 service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=6),"24h supported living arrangement – 6 or more service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=0,'Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=6),"Supported living arrangement – 6 or more service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=0,OR('Clean data'!FY59<=1,'Clean data'!FY59>=7,'Clean data'!DJ59>=8)),"24h supported living arrangement",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=2),"24h supported living arrangement – 2 service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=2),"Supported living arrangement – 2 service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=3),"24h supported living arrangement – 3 service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=3),"Supported living arrangement – 3 service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=4),"24h supported living arrangement – 4 service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=4),"Supported living arrangement – 4 service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=5),"24h supported living arrangement – 5 service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=5),"Supported living arrangement – 5 service users sharing",
//IF(AND('Clean data'!FW59=9,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=6),"24h supported living arrangement – 6 or more service users sharing",
//IF(AND('Clean data'!FW59=7,SH_Default_Reduction=1,'Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=6),"Supported living arrangement – 6 or more service users sharing","")))))))))))))))))))))
if(clFW == 9 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 2)
{
  scIC = "24h supported living arrangement – 2 service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 2)
{
  scIC = "Supported living arrangement – 2 service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 3)
{
  scIC = "24h supported living arrangement – 3 service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 3)
{
  scIC = "Supported living arrangement – 3 service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 4)
{
  scIC = "24h supported living arrangement – 4 service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 4)
{
  scIC = "Supported living arrangement – 4 service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 5)
{
  scIC = "24h supported living arrangement – 5 service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 5)
{
  scIC = "Supported living arrangement – 5 service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 6)
{
  scIC = "24h supported living arrangement – 6 or more service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 0 && clDJ > 5 && clDJ < 8 && clFY == 6)
{
  scIC = "Supported living arrangement – 6 or more service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 0 && (clFY <= 1 || clFY >= 7 || clDJ >= 8))
{
  scIC = "24h supported living arrangement";
}
else if(clFW == 9 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 2)
{
  scIC = "24h supported living arrangement – 2 service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 2)
{
  scIC = "Supported living arrangement – 2 service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 3)
{
  scIC = "24h supported living arrangement – 3 service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 3)
{
  scIC = "Supported living arrangement – 3 service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 4)
{
  scIC = "24h supported living arrangement – 4 service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 4)
{
  scIC = "Supported living arrangement – 4 service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 5)
{
  scIC = "24h supported living arrangement – 5 service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 5)
{
  scIC = "Supported living arrangement – 5 service users sharing";
}
else if(clFW == 9 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 6)
{
  scIC = "24h supported living arrangement – 6 or more service users sharing";
}
else if(clFW == 7 && SH_Default_Reduction == 1 && clDJ > 5 && clDJ < 8 && Supported_number_reduction == 6)
{
  scIC = "Supported living arrangement – 6 or more service users sharing";
}
else
{
  scIC = "";
}

var scID = "";
//=IF('Clean data'!DJ59=6,"background",
//IF('Clean data'!DJ59=8,"one care worker",
//IF(AND('Clean data'!FD59=0.5,'Clean data'!DJ59=9),"one care worker",
//IF(AND(NOT('Clean data'!FD59=0.5),'Clean data'!DJ59=9),"two care workers",0))))
if(clDJ == 6)
{
  scID = "background";
}
else if(clDJ == 8)
{
  scID = "one care worker";
}
else if(clDJ == 0.5 && clDJ == 9)
{
  scID = "one care worker";
}
else if((clFD != 0.5)&& clDJ == 9)
{
  scID = "two care workers";
}
else
{
  scID = 0;
}

var scIE = "";
//=FK59-FM59
scIE = scFK - scFM;

var scIF = "";
//=IF(U59=0,"",
//IF(AND(ER59=5,OR('Clean data'!FW59=7,'Clean data'!FW59=9),NOT('Supp. Living'!D59<'Supp. Living'!C59),FP59>0,(('Supp. Living'!O59-GE59)/(U59+M59))>0,'Clean data'!DJ59<9,OR('Clean data'!O59=4,'Clean data'!V59=4)),"",
//IF(AND(ER59=5,OR('Clean data'!FW59=7,'Clean data'!FW59=9),NOT('Supp. Living'!D59<'Supp. Living'!C59),FP59>0,(('Supp. Living'!O59-GE59)/(U59+M59))>0),"with top-up for higher social activity rate","")))
if(scER == 5 && (clFW == 7 || clFW == 9)&& (supD >= supC && scFP > 0 && ((supO-scGE)/(scU+scM))>0)&& clDJ < 9 && (clO == 4 || clV == 4))
{
  scIF = "";
}
else if(scER == 5 && (clFW == 7 || clFW == 9)&& (supD >= supC && scFP > 0 && ((supO-scGE)/(scU+scM))>0))
{
  scIF = "with top-up for higher social activity rate";
}
else
{
  scIF = "";
}

var scIG = "";
//=IF(AND(OR('Clean data'!FW59=9,'Clean data'!FW59=7),'Clean data'!DJ59>5),0,
//IF(U59=0,0,
//IF('Clean data'!EV59=50,ROUND(((Community!M59-GE59)/(U59))*2,0)/2,ROUND(((Community!M59-GE59)/(U59+M59))*2,0)/2)))
if(clFW == 9 || clFW == 7 && (clDJ > 5))
{
  scIG = 0;
}
else if(scU == 0)
{
  scIG = 0;
}
else if(clEV == 50)
{
  scIG = Math.round(((comM-scGE)/(scU))*2,0)/2;
}
else
{
  scIG = Math.round(((comM-scGE)/(scU+scM))*2,0)/2;
}

var scIH = "";
//=ROUND(IG59,0)
scIH = Math.round(scIG,0);

var scII = "";
//=IF(AND('Clean data'!O59=1,IG59=1)," transport session required",
//IF(AND('Clean data'!O59=1,IG59>1)," transport sessions required",
//IF(AND(OR('Clean data'!P59=0,'Clean data'!O59=2),IG59=1)," social activity with background support",
//IF(AND(OR('Clean data'!P59=0,'Clean data'!O59=2),IG59>1)," social activities with background support",
//IF(AND('Clean data'!O59=3,IG59=1)," social activity with support from one care worker",
//IF(AND('Clean data'!O59=3,IG59>1)," social activities with support from one care worker",
//IF(AND('Clean data'!O59=4,'Clean data'!EV59=50,Scores!FO59>0,Scores!FQ59=0,IG59=1)," social activity with support from one care worker",
//IF(AND('Clean data'!O59=4,'Clean data'!O59=4,'Clean data'!EV59=50,Scores!FO59>0,Scores!FQ59=0,IG59>1)," social activities with support from one care worker",
//IF(AND('Clean data'!O59=4,IG59=1)," social activity with support from two care workers",
//IF(AND('Clean data'!O59=4,IG59>1)," social activities with support from two care workers","No support"))))))))))
if(clO == 1 && scIG == 1)
{
  scII = " transport session required";
}
else if(clO == 1 && scIG > 1)
{
  scII = " transport sessions required";
}
else if(clP == 0 || clO == 2 && (scIG == 1))
{
  scII = " social activity with background support";
}
else if(clP == 0 || clO == 2 && (scIG > 1))
{
  scII = " social activities with background support";
}
else if(clO == 3 && scIG == 1)
{
  scII = " social activity with support from one care worker";
}
else if(clO == 3 && scIG > 1)
{
  scII = " social activities with support from one care worker";
}
else if(clO == 4 && clEV == 50 && scFO > 0 && scFQ == 0 && scIG == 1)
{
  scII = " social activity with support from one care worker";
}
else if(clO == 4 && clO == 4 && clEV == 50 && scFO > 0 && scFQ == 0 && scIG > 1)
{
  scII = " social activities with support from one care worker";
}
else if(clO == 4 && scIG == 1)
{
  scII = " social activity with support from two care workers";
}
else if(clO == 4 && scIG > 1)
{
  scII = " social activities with support from two care workers";
}
else
{
  scII = "No support";
}

var scIJ = "";
//=IF(IG59=0,"",
//IF(AND('Clean data'!O59=2),"background",
//IF(AND('Clean data'!O59=3),"one care worker",
//IF(AND('Clean data'!EV59=50,'Clean data'!O59=4),"one care worker",
//IF(AND(NOT('Clean data'!EV59=50),'Clean data'!O59=4),"two care workers",0)))))
if(scIG == 0)
{
  scIJ = "";
}
else if(clO == 2)
{
  scIJ = "background";
}
else if(clO == 3)
{
  scIJ = "one care worker";
}
else if(clEV == 50 && clO == 4)
{
  scIJ = "one care worker";
}
else if((clEV != 50) && clO == 4)
{
  scIJ = "two care workers";
}
else
{
  scIJ = 0;
}

var scIK = "";
//=IF(IG59=0,"",
//IF(AND(ID59="background",IJ59="background"),"background support",
//IF(AND(ID59="one care worker",IJ59="one care worker"),"support from one care worker",
//IF(AND(ID59="two care workers",IJ59="two care workers"),"support from two care workers",
//IF(AND(ID59="background",IJ59="two care workers"),"mixed background and support from two care workers",
//IF(AND(ID59="one care worker",IJ59="two care workers"),"mixed support from one or two care workers","mixed background and support from one care worker"))))))
if(scIG == 0)
{
  scIK = "";
}
else if(scID == "background" && scIJ == "background")
{
  scIK = "background support";
}
else if(scID == "one care worker" && scIJ == "one care worker")
{
  scIK = "support from two care workers";
}
else if(scID == "two care workers" && scIJ == "two care workers")
{
  scIK = "support from two care workers";
}
else if(scID == "background" && scIJ == "two care workers")
{
  scIK = "mixed background and support from two care workers";
}
else if(scID == "one care worker" && scIJ == "two care workers")
{
  scIK = "mixed support from one or two care workers";
}
else
{
  scIK = "mixed background and support from one care worker";
}

var scIL = "";
//=IF(ER59=5,5,
//IF(ER59+IG59>5,5,ER59+IG59))
if(scER == 5)
{
  scIL = 5;
}
else if(scER + scIG > 5)
{
  scIL = 5;
}
else
{
  scIL = scER + scIG;
}

var scIM = "";
//=ER59
scIM = scER;

var scIN = "";
//=IF(AND(IL59>1,IL59<2),"1 or 2",
//IF(AND(IL59>2,IL59<3),"2 or 3",
//IF(AND(IL59>3,IL59<4),"3 or 4",
//IF(AND(IL59>4,IL59<5),"4 or 5",IL59))))
if(scIL > 1 && scIL < 2)
{
  scIN = "1 or 2";
}
else if(scIL > 2 && scIL < 3)
{
  scIN = "2 or 3";
}
else if(scIL > 3 && scIL < 4)
{
  scIN = "3 or 4";
}
else if(scIL > 4 && scIL < 5)
{
  scIN = "4 or 5";
}
else
{
  scIN = scIL;
}

var scIO = "";
//=IF(ER59>IG59,"Safety","Social")
if(scER > scIG)
{
  scIO = "Safety";
}
else
{
  scIO = "Social";
}

var scIP = "";
//=IF(NOT(IC59=""),IC59,
//IF(AND(IL59>=1,NOT(II59="No support"),'Clean data'!DJ59>=5,'Clean data'!DJ59<=8,IJ59="two care workers"),CONCATENATE(IN59," days/activities of ",IK59,IF59),
//IF(AND(IL59>ER59,IL59>IG59),CONCATENATE(IN59," days/activities of ",IK59,IF59),
//IF(AND(IO59="Safety",ER59=1,ID59="background"),CONCATENATE(ER59," day of ",ID59," safety support",IF59),
//IF(AND(IO59="Safety",ER59=1,OR(ID59="one care worker",ID59="two care workers")),CONCATENATE(ER59," day of safety support from ",ID59,IF59),
//IF(AND(IO59="safety",IQ59>0,ID59="two care workers"),CONCATENATE(ER59," days of safety support from ",ID59,IF59),
//IF(AND(IO59="Safety",ER59>1,ID59="background"),CONCATENATE(ER59," days of ",ID59," safety support",IF59),
//IF(AND(IO59="Safety",ER59>1,OR(ID59="one care worker",ID59="two care workers")),CONCATENATE(ER59," days of safety support from ",ID59,IF59),
//IF(AND(IG59>0,IO59="Social"),CONCATENATE(IG59,II59),"")))))))))
if(scIC != "")
{
  scIP = scIC;
}
else if(scIL >= 1 && scII != "No support" && clDJ >= 5 && clDJ <= 8 && scIJ == "two care workers")
{
  scIP = (scIN + " days/activities of " + scIK + scIF);
}
else if(scIL > scER && scIL > scIG)
{
  scIP = (scIN + " days/activities of " + scIK + scIF);
}
else if(scIO == "Safety" && scER == 1 && scID == "background")
{
  scIP = (scER + " day of " + scID + " safety support" + scIF);
}
else if(scIO == "Safety" && scER == 1 && (scID == "one care worker" || scID == "two care workers"))
{
  scIP =  (scER + " day of safety support from " + scID + scIF);
}
else if(scIO == "safety" && scIQ > 0 && scID == "two care workers")
{
  scIP = (scER + " days of safety support from " + scID + scIF);
}
else if(scIO == "Safety" && scER > 1 && scID == "background")
{
  scIP = (scER + " days of " + scID + " safety support" + scIF);
}
else if(scIO == "Safety" && scER > 1 && (scID == "one care worker",scID == "two care workers"))
{
  scIP = (scER + " days of safety support from " + scID + scIF);
}
else if(scIG > 0 && scIO == "Social")
{
  scIP = (scIG + scII);
}
else
{
  scIP = "";
}

var scIQ = "";
//=IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!D59<'Supp. Living'!C59),0,
//IF(AND(NOT('Clean data'!FD59=0.5),'Clean data'!DJ59=9),ROUND((EU59)*4,0)/4,ROUND((ET59)*4,0)/4))
if((clFW == 7 || clFW == 9)&& supD < supC)
{
  scIQ = 0;
}
else if((clFD != 0.5) && clDJ == 9)
{
  scIQ = Math.round((scEU)*4,0)/4;
}
else 
{
  scIQ = Math.round((scET)*4,0)/4;
}

var scIR = "";
//=IF(AND(ID59="two care workers",IQ59>0,IP59=""),CONCATENATE((IQ59/2)," hours for support with staying safe from two care workers"),
//IF(AND(IQ59>0,IP59=""),CONCATENATE(IQ59," hours for support with staying safe from one care worker"),
//IF(AND(ID59="two care workers",IQ59>0),CONCATENATE(" plus ",(IQ59/2)," hours for support with staying safe from two care workers"),
//IF(IQ59>0,CONCATENATE(" plus ",IQ59," hours for support with staying safe from one care worker"),""))))
if(scID == "two care workers" && scIQ > 0 && scIP == "" )
{
  scIR = (scIQ/2) + " hours for support with staying safe from two care workers";
}
else if(scIQ > 0 && scIP == "")
{
  scIR = scIQ + " hours for support with staying safe from one care worker";
}
else if(scID == "two care workers" && scIQ > 0)
{
  scIR = " plus " + (scIQ/2) + " hours for support with staying safe from two care workers";
}
else if(scIQ > 0)
{
  scIR = " plus " + scIQ + " hours for support with staying safe from one care worker";
}
else
{
  scIR = "";
}

var scIS = "";
//=IF(AND('Clean data'!DJ59=9,((((ER59*8)*2)+EU59))>210),(((ER59*8)*2)+EU59)-(((((ER59*8)*2)+EU59)+IB59)-210),
//IF(AND('Clean data'!DJ59=9,'Clean data'!FD59=0.5),((ER59*8)+EU59),
//IF(AND('Clean data'!DJ59=9, NOT('Clean data'!FD59=0.5)),(((ER59*8)*2)+EU59),
//IF(AND('Clean data'!DJ59>0,'Clean data'!DJ59<9,(((ER59*8)+EU59)>105)),((ER59*8)+EU59)-((((ER59*8)+EU59)+IB59)-105),((ER59*8)+EU59)))))
if(clDJ == 9 && ((((scER*8)*2)+scEU))>210) 
{
  scIS = (((scER*8)*2)+scEU)-(((((scER*8)*2)+scEU)+scIB)-210);
}
else if(clDJ == 9 && clFD == 0.5)
{
  scIS = ((scER*8)+scEU);
}
else if(clDJ == 9 && clFD != 0.5)
{
  scIS = (((scER*8)*2)+scEU);
}
else if(clDJ > 0 && clDJ < 9 && (((scER*8)+scEU)>105))
{
  scIS = ((scER*8)+scEU)-((((scER*8)+scEU)+scIB)-105);
}
else
{
  scIS = ((scER*8)+scEU);
}

var scIT = "";
//=IF(GD59=0,0,
//IF(GD59=GE59,(GD59/V59)*Social_activity_hours,(GD59/U59)*Social_activity_hours))
if(scGD == 0)
{
  scIT = 0;
}
else if(scGD == scGE)
{
  scIT = (scGD/scV)*Social_activity_hours;
}
else
{
  scIT = (scGD/scU)*Social_activity_hours;
}

var scIU = "";
//=IF(AND(Social_activity_output=0,'Clean data'!DJ59=9,NOT('Clean data'!FD59=0.5),(ROUND((IS59+IT59)*4,0)/4)>210),210,
//IF(AND(Social_activity_output=0,'Clean data'!DJ59=9,'Clean data'!FD59=0.5,(ROUND((IS59+IT59)*4,0)/4)>210),210,
//IF(AND(Social_activity_output=0,'Clean data'!DJ59<9,(ROUND((IS59+IT59)*4,0)/4)>105),105,
//IF(AND('Clean data'!DJ59=9,NOT('Clean data'!FD59=0.5)),(ROUND((IS59+IT59)*4,0)/4),
//IF(AND('Clean data'!DJ59=9,NOT('Clean data'!FD59=0.5)),(ROUND((IS59)*4,0)/4),
//IF(AND('Clean data'!DJ59=9,'Clean data'!FD59=0.5),(ROUND((IS59+IT59)*4,0)/4),
//IF(AND('Clean data'!DJ59=9,'Clean data'!FD59=0.5),(ROUND((IS59)*4,0)/4),
//IF(AND('Clean data'!DJ59<9),(ROUND((IS59+IT59)*4,0)/4),(ROUND((IS59)*4,0)/4)))))))))
if(Social_activity_output == 0 && clDJ == 9 && (clFD != 0.5) && (Math.round((scIS+scIT)*4,0)/4)>210)
{
  scIU = 210;
}
else if(Social_activity_output == 0 && clDJ == 9 && clFD == 0.5 && (Math.round((scIS+scIT)*4,0)/4)>210) 
{
  scIU = 210;
}
else if(Social_activity_output == 0 && clDJ < 9 && (Math.round((scIS+scIT)*4,0)/4)>105)
{
  scIU = 105;
}
else if(clDJ == 9 && clFD != 0.5)
{
  scIU = (Math.round((scIS+scIT)*4,0)/4);
}
else if(clDJ == 9 && clFD != 0.5)
{
  scIU = (Math.round((scIS)*4,0)/4);
}
else if(clDJ == 9 && clFD == 0.5)
{
  scIU = (Math.round((scIS+scIT)*4,0)/4);
}
else if(clDJ == 9 && clFD == 0.5)
{
  scIU = (Math.round((scIS)*4,0)/4);
}
else if(clDJ < 9)
{
  scIU = (Math.round((scIS+scIT)*4,0)/4);
}
else 
{
  scIU = (Math.round((scIS)*4,0)/4);
}

var scIV = "";
//=IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)<2),"No allocation - not indicated as eligible",
//IF(AND(Dynamic_Care_home=1,OR('Clean data'!FW59=12,'Clean data'!FW59=15)),"Does not apply",
//IF(AND(OR(F59=1, 'Clean data'!FW59=3, 'Clean data'!FW59=10),HK59="Capped"),"Not relevant due to living situation cap",
//IF(AND(NOT(F59=1),NOT('Clean data'!FW59=3), NOT('Clean data'!FW59=10), HK59="Capped"),"Not relevant due to overall model cap",
//IF(Community!E59=Community!C59,ROUND((IU59+IB59+HT59+HU59)*4,0)/4,ROUND((IU59+IB59+HS59+HU59+HT59)*4,0)/4)))))
if(ModelType <=2 && (clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR)< 2)
{
  scIV = "No allocation - not indicated as eligible";
}
else if(Dynamic_Care_home == 1 && (clFW == 12 || clFW == 15))
{
  scIV = "Does not apply";
}
else if((scF == 1 ||  clFW == 3 || clFW == 10)&& scHK == "Capped")
{
  scIV = "Not relevant due to living situation cap";
}
else if(scF != 1 && clFW != 3 && clFW != 10 && scHK == "Capped")
{
  scIV = "Not relevant due to overall model cap";
}
else if(comE == comC)
{
  scIV = Math.round((scIU+scIB+scHT+scHU)*4,0)/4;
}
else
{
  scIV = Math.round((scIU+scIB+scHS+scHU+scHT)*4,0)/4;
}

var scIW = "";
//=IF(NOT(IC59=""),IC59,
//IF(AND(OR(IG59=0,II59="No support"),IP59="No safety"),"No Social/safety allocation",
//IF(IQ59>0,CONCATENATE(IP59,IR59),CONCATENATE(IP59))))
if(scIC != "")
{
  scIW = scIC;
}
else if((scIG == 0 || scII == "No support") && (scIP == "No safety"))
{
  scIW = "No Social/safety allocation";
}
else if(scIQ > 0)
{
  scIW = scIP + scIR;
}
else
{
  scIW = scIP;
}

var scIX = "";
//=IF(NOT(IC59=""),IC59,
//IF(AND(IL59>0,ID59="two care workers",IO59="Safety"),CONCATENATE((IL59*8)+(IQ59/2)," hours for support with staying safe from two care workers"),
//IF(AND(IL59>0,IG59>0,IJ59="two care workers",'Clean data'!DJ59<9,IO59="Safety", NOT(IT59=0)),CONCATENATE((IL59*8)+IQ59," hours for support with staying safe from one care worker and an additional allocation for ", IT59, " hours support from two care workers with activities "),
//IF(AND(IL59>0,IO59="Safety"),CONCATENATE((IL59*8)+IQ59," hours for support with staying safe from one care worker"),
//IF(AND(IL59>0,ID59="two care workers",IO59="Social",IQ59=0),CONCATENATE((IL59*Social_activity_hours)," hours for",II59),
//IF(AND(IL59>0,IO59="Social",IQ59=0,IG59=1),CONCATENATE((IL59*Social_activity_hours)+IQ59," hours for a",II59),
//IF(AND(IL59>0,IO59="Social",IQ59=0),CONCATENATE((IL59*Social_activity_hours)+IQ59," hours for",II59),
//IF(AND(IL59>0,ID59="two care workers",IO59="Social",IQ59>0),CONCATENATE((IL59*Social_activity_hours)," hours for",II59,IR59),
//IF(AND(IL59>0,IO59="Social",IQ59>0),CONCATENATE((IL59*Social_activity_hours)," hours for",II59,IR59),
//IF(AND(IL59=0,IO59="Social",FK59<=FJ59,IQ59>0),CONCATENATE(IR59),""))))))))))
if(scIC != "")
{
  scIX = scIC;
}
else if(scIL > 0 && scID == "two care workers" && scIO == "Safety")
{
  scIX = ((scIL*8)+(scIQ/2) + " hours for support with staying safe from two care workers");
}
else if(scIL > 0&& scIG > 0 && scIJ == "two care workers" && clDJ < 9 && scIO == "Safety" && (scIT != 0))
{
  scIX = ((scIL*8)+scIQ + " hours for support with staying safe from one care worker and an additional allocation for " +  scIT +  " hours support from two care workers with activities ");
}
else if(scIL > 0 && scIO == "Safety")
{
  scIX = ((scIL*8)+scIQ + " hours for support with staying safe from one care worker");
}
else if(scIL > 0 && scID == "two care workers" && scIO == "Social" && scIQ == 0)
{
  scIX = ((scIL*Social_activity_hours) + " hours for" + scII);
}
else if(scIL > 0 && scIO == "Social" && scIQ == 0 && scIG == 1)
{
  scIX = ((scIL*Social_activity_hours)+scIQ + " hours for a" + scII);
}
else if(scIL > 0 && scIO == "Social" && scIQ == 0)
{
  scIX = ((scIL*Social_activity_hours)+scIQ + " hours for" + scII);
}
else if(scIL > 0 && scID == "two care workers" && scIO == "Social" && scIQ > 0)
{
  scIX = ((scIL*Social_activity_hours) + " hours for" + scII + scIR);
}
else if(scIL > 0 && scIO == "Social" && scIQ > 0 )
{
  scIX = ((scIL*Social_activity_hours) + " hours for" + scII + scIR);
}
else if(scIL == 0 && scIO == "Social" && scFK<=scFJ,scIQ>0)
{
  scIX = scIR;
}
else
{
  scIX = "";
}

var scIY = "";
//=IF('Care home calc'!D59=0,"",
//IF('Clean data'!O59=0,"",
//IF('Care home calc'!C59=Care_home_FulltimeCarer_Activities,"",'Care home calc'!C59/24)))
if(carcD == 0)
{
  scIY = "";
}
else if(clO == 0)
{
  scIY = "";
}
else if(carcC == Care_home_FulltimeCarer_Activities )
{
  scIY = "";
}
else
{
  scIY = carcC/24;
}

var scIZ = "";
//=IF(AND('Clean data'!O59=4,(('Care home calc'!D59-'Care home calc'!C59)+'Care home calc'!J59)>=24),(('Care home calc'!D59-'Care home calc'!C59)+'Care home calc'!J59+'Care home calc'!M59)/2,
//IF((('Care home calc'!D59-'Care home calc'!C59)+'Care home calc'!J59)>=24,(('Care home calc'!D59-'Care home calc'!C59)+'Care home calc'!J59+'Care home calc'!M59),""))
if((clO == 4 && ((carcD-carcC)+carcJ)>=24))
{
  scIZ = ((carcD-carcC)+carcJ+carcM)/2;
}
else if(((carcD - carcC)+ carcJ)>= 24)
{
  scIZ = ((carcD-carcC)+carcJ+carcM);
}
else
{
  scIZ = "";
}

var scJA = "";
//=IF(IZ59="","",ROUNDDOWN(IZ59,0))
if(scIZ == "")
{
  scJA = "";
}
else
{
  scJA = Math.floor(scIZ, 0);
}

var scJB = "";
//=IF(JA59="","", (IZ59-JA59)/24)
if(scJA == "")
{
  scJB = "";
}
else
{
  scJB = (scIZ-scJA)/24;
}

var scJC = "";
//=IF(('Care home calc'!D59-'Care home calc'!C59)<=0,"",
//IF('Clean data'!O59=0,"",
//IF(AND('Clean data'!O59=4,IZ59=""),((('Care home calc'!D59-'Care home calc'!C59)/2)+'Care home calc'!J59+'Care home calc'!M59)/24,(('Care home calc'!D59-'Care home calc'!C59)+'Care home calc'!J59+'Care home calc'!M59)/24)))
if((carcD - carcC)<= 0)
{
  scJC = "";
}
else if(clO == 0)
{
  scJC = "";
}
else if(clO == 4 && scIZ == "")
{
  scJC = (((carcD-carcC)/2)+carcJ+carcM)/24;
}
else
{
  scJC = ((carcD-carcC)+carcJ+carcM)/24;
}

var scJD = "";
//=IF('Clean data'!O59=0,"",
//IF(AND(NOT('Care home calc'!C59=Care_home_FulltimeCarer_Activities),IY59=""),"",
//IF('Care home calc'!C59=Care_home_FulltimeCarer_Activities,CONCATENATE(Care_home_FulltimeCarer_Activities,"h shared support"),CONCATENATE(HOUR(IY59),"h ",MINUTE(IY59),"m shared support"))))
if(clO == 0)
{
  scJD = "";
}
else if((carcC != Care_home_FulltimeCarer_Activities)&& scIY == "")
{
  scJD = "";
}
else if(carcC == Care_home_FulltimeCarer_Activities)
{
  scJD = (Care_home_FulltimeCarer_Activities + "h shared support")
}
else
{
  scJD = (HOUR(scIY),"h ",MINUTE(scIY),"m shared support")
}

var scJE = "";
//=IF('Clean data'!O59=0,"",
//IF(OR('Care home calc'!D59=0,('Care home calc'!D59-'Care home calc'!C59)=0),"",
//IF(AND('Clean data'!O59=4,NOT(IZ59="")),CONCATENATE(" and ",JA59,"h ",MINUTE(JB59),"m support from two care workers for meaningful activities"),
//IF(AND('Clean data'!O59=4),CONCATENATE(" and ",HOUR(JC59),"h ",MINUTE(JC59),"m  support from two care workers for meaningful activities"),
//IF(NOT(IZ59=""),CONCATENATE(" and ",JA59,"h ",MINUTE(JB59),"m from one care worker for meaningful activities"),CONCATENATE(" and ",HOUR(JC59),"h ",MINUTE(JC59),"m from one care worker for meaningful activities"))))))
if(clO == 0)
{
  scJE = "";
}
else if(carcD == 0 || (carcD-carcC)== 0)
{
  scJE = "";
}
else if(clO == 4 && (scIZ != ""))
{
  scJE = (" and " + scJA + "h " + MINUTE(scJB) +  "m support from two care workers for meaningful activities");
}
else if(clO == 4)
{
  scJE = (" and " + HOUR(scJC) + "h "+ MINUTE(scJC) + "m  support from two care workers for meaningful activities")
}
else if(scIZ != "")
{
  scJE = (" and " +  scJA + "h " + MINUTE(scJB) + "m from one care worker for meaningful activities")
}
else
{
  scJE = (" and "+ HOUR(scJC) + "h "+ MINUTE(scJC)+ "m from one care worker for meaningful activities");
}

var scJF = "";
//=IF('Clean data'!V59=0,"",
//IF('Care home calc'!K59=Care_home_FulltimeCarer_Activities,"",
//IF(AND('Clean data'!V59>0,'Clean data'!X59>0), 'Care home calc'!K59/24, 'Care home calc'!K59/24)))
if(clV == 0)
{
  scJF = "";
}
else if(carcK == Care_home_FulltimeCarer_Activities)
{
  scJF = "";
}
else if(clV > 0 && clX > 0)
{
  scJF = carcK/24;
}
else
{
  scJF = carcK/24;
}

var scJG = "";
//=IF(AND('Clean data'!V59=4,('Care home calc'!L59-'Care home calc'!K59)>=24),('Care home calc'!L59-'Care home calc'!K59)/2,
//IF(('Care home calc'!L59-'Care home calc'!K59)>=24,('Care home calc'!L59-'Care home calc'!K59),""))
if((clV == 4 && carcL - carcK)>= 24)
{
  scJG = (carcL-carcK)/2;
}
else if((carcL - carcK)>= 24)
{
  scJG = (carcL-carcK)
}
else 
{
  scJG = "";
}

var scJH = "";
//=IF(JG59="","",ROUNDDOWN(JG59,0))
if(scJG == "")
{
  scJH = "";
}
else
{
  scJH = Math.floor(scJG,0);
}

var scJI = "";
//=IF(JH59="","",(JG59-JH59)/24)
if(scJH == "")
{
  scJI = "";
}
else
{
  scJI = (scJG-scJH)/24;
}

var scJJ = "";
//=IF(('Care home calc'!L59-'Care home calc'!K59)<=0,"",
//IF('Clean data'!V59=0,"",
//IF(AND(JG59="",'Clean data'!V59=4),((('Care home calc'!L59-'Care home calc'!K59)/2)/24),('Care home calc'!L59-'Care home calc'!K59)/24)))
if((carcL - carcK)<= 0)
{
  scJJ = "";
}
else if(clV == 0)
{
  scJJ = "";
}
else if(scJG && clV == 4)
{
  scJJ = (((carcL-carcK)/2)/24);
}
else
{
  scJJ = (carcL-carcK)/24;
}

var scJK = "";
//=IF('Clean data'!V59=0,"",
//IF(AND('Care home calc'!K59=0,JF59=0,'Clean data'!V59>0),"Shared support hours covered by meaningful activities allocation",
//IF('Care home calc'!K59=Care_home_FulltimeCarer_Activities,CONCATENATE(Care_home_FulltimeCarer_Activities,"h shared support"),CONCATENATE(HOUR(JF59),"h ",MINUTE(JF59),"m shared support"))))
if(clV == 0)
{
  scJK = "";
}
else if(carcK == 0 && scJF == 0 && clV > 0)
{
  scJK = "Shared support hours covered by meaningful activities allocation";
}
else if(carcK == Care_home_FulltimeCarer_Activities)
{
  scJK = (Care_home_FulltimeCarer_Activities + "h shared support");
}
else 
{
  scJK = (HOUR(scJF),"h ",MINUTE(scJF),"m shared support");
}

var scJL = "";
//=IF('Clean data'!V59=0,"",
//IF(OR('Care home calc'!L59=0,('Care home calc'!L59-'Care home calc'!K59)<=0),"",
//IF(AND('Clean data'!V59=4,NOT(JG59="")),CONCATENATE(" and ",JH59,"h ",MINUTE(JI59),"m support from two care workers for work, education or volunteering activities"),
//IF(AND('Clean data'!V59=4),CONCATENATE(" and ",HOUR(JJ59),"h ",MINUTE(JJ59),"m support from two care workers for work, education or volunteering activities"),
//IF(NOT(JG59=""),CONCATENATE(" and ",JH59,"h ",MINUTE(JI59),"m support from one care worker for work, education or volunteering activities"),CONCATENATE(" and ",HOUR(JJ59),"h ",MINUTE(JJ59),"m support from one care worker for work, education or volunteering activities"))))))
if(clV == 0)
{
  scJL = "";
}
else if(carcL == 0 || (carcL - carcK)<= 0)
{
  scJL = "";
}
else if(clV == 4 && scJG != "")
{
  scJL = (" and "+ scJH + "h "+ MINUTE(scJI)+ "m support from two care workers for work, education or volunteering activities");
}
else if(clV == 4)
{
  scJL = (" and "+ scJH + "h " + MINUTE(scJI) + "m support from two care workers for work, education or volunteering activities");
}
else if(scJG != "")
{
  scJL = (" and "+ scJH + "h " + MINUTE(scJI) + "m support from one care worker for work, education or volunteering activities");
}
else
{
  scJL = (" and "+ HOUR(scJJ)+ "h "+ MINUTE(scJJ)+ "m support from one care worker for work, education or volunteering activities");
}

var scJM = "";
//=IF(GE59=0,"",
//IF(AND('Clean data'!V59=2),"background",
//IF(AND('Clean data'!V59=3),"one care worker",
//IF(AND('Clean data'!EX59=50,'Clean data'!V59=4),"one care worker",
//IF(AND(NOT('Clean data'!EX59=50),'Clean data'!V59=4),"two care workers",0)))))
if(scGE == 0)
{
  scJM = "";
}
else if(clV == 2)
{
  scJM = "background";
}
else if(clV == 3)
{
  scJM = "one care worker";
}
else if(clEX == 50 && clV == 4)
{
  scJM = "one care worker";
}
else if((clEX != 50)&& clV == 4)
{
  scJM = "two care workers";
}
else
{
  scJM = 0;
}

var scJN = "";
//=IF(GE59=0,0,
//IF(AND(GE59>0,JM59="two care workers"),((GE59/2)/V59),(GE59/V59)))
if(scGE == 0)
{
  scJN = 0;
}
else if(scGE > 0 && scJM == "two care workers")
{
  scJN = ((scGE/2)/scV);
}
else
{
  scJN = (scGE/scV);
}

var scJO = "";
//=IF(GE59=0,0,
//IF(AND(((FJ59-FM59)=(FR59-FT59)),V59>U59),ROUNDDOWN((GE59/V59),0),
//IF(AND(ER59>=5,JN59>0),ROUNDDOWN((GE59/V59),0),
//IF(AND(GE59>0,JM59="two care workers"),ROUNDUP(((GE59/2)/V59),0),ROUNDUP((GE59/V59),0)))))
if(scGE == 0)
{
  scJO = 0;
}
else if(((scFJ - scFM) ==  (scFR - scFT)&& scV > scU))
{
  scJO = Math.floor((scGE/scV),0);
}
else if((scER >= 5 && scJN > 0))
{
  scJO = Math.floor((scGE/scV),0);
}
else if(scGE > 0 && scJM == "two care workers")
{
  scJO = Math.ceil(((scGE/2)/scV),0);
}
else
{
  scJO = Math.ceil((scGE/scV),0);
}

var scJP = "";
//=IF(AND('Clean data'!V59=1,JN59=1)," transport session required",
//IF(AND('Clean data'!V59=1,JN59>1)," transport sessions required",
//IF(AND(OR('Clean data'!W59=0,'Clean data'!V59=2),JN59>0,JN59<=1)," activity with background support",
//IF(AND(OR('Clean data'!W59=0,'Clean data'!V59=2),JN59>1)," activities with background support",
//IF(AND(JM59="one care worker",JN59>0,JN59<=1)," activity with support from one care worker",
//IF(AND(JM59="one care worker",JN59>1)," activities with support from one care worker",
//IF(AND(JM59="two care workers",JN59>0,JN59<=1)," activity with support from two care workers",
//IF(AND(JM59="two care workers",JN59>1)," activities with support from two care workers","No support"))))))))
if(clV == 1 && scJN == 1)
{
  scJP = " transport session required";
}
else if(clV == 1 && scJN > 1)
{
  scJP = " transport sessions required";
}
else if((clW == 0 || clV == 2)&& scJN > 0 && scJN <= 1)
{
  scJP = " activity with background support";
}
else if((clW == 0 || clV == 2)&& scJN > 1)
{
  scJP = " activities with background support";
}
else if(scJM == "one care worker" && scJN > 0 && scJN <= 1)
{
  scJP = " activity with support from one care worker";
}
else if(scJM == "one care worker" && scJN > 1)
{
  scJP = " activities with support from one care worker";
}
else if(scJM == "two care workers" && scJN > 0 && scJN <= 1)
{
  scJP = " activity with support from two care workers";
}
else if(scJM == "two care workers" && scJN > 1)
{
  scJP = " activities with support from two care workers";
}
else
{
  scJP = "No support";
}

var scJQ = "";
//=IF(AND('Clean data'!V59=1,JN59=1)," transport session required",
//IF(AND('Clean data'!V59=1,JN59>1)," transport sessions required",
//IF(AND('Clean data'!V59=2,JN59>0,JN59<=1)," hours with background support",
//IF(AND('Clean data'!V59=2,JN59>1)," hours with background support",
//IF(AND(JM59="one care worker",JN59>0,JN59<=1)," hours with support from one care worker",
//IF(AND(JM59="one care worker",JN59>1)," hours with support from one care worker",
//IF(AND(JM59="two care workers",JN59>0,JN59<=1)," hours with support from two care workers",
//IF(AND(JM59="two care workers",JN59>1)," hours with support from two care workers","No support"))))))))
if(clV == 1 && scJN == 1)
{
  scJQ = " transport session required";
}
else if(clV == 1 && scJN > 1)
{
  scJQ = " transport sessions required";
}
else if(clV == 2 && scJN > 0 &&   scJN <= 1)
{
  scJQ = " hours with background support";
}
else if(clV == 2 && scJN > 1)
{
  scJQ = " hours with background support";
}
else if(scJM == "one care worker" && scJN > 0 && scJN <= 1)
{
  scJQ = " hours with support from one care worker";
}
else if(scJM == "one care worker" && scJN > 1)
{
  scJQ = " hours with support from one care worker";
}
else if(scJM == "two care workers" && scJN > 0 && scJN <= 1)
{
  scJQ = " hours with support from two care workers";
}
else if(scJM == "two care workers" && scJN > 1)
{
  scJQ = " hours with support from two care workers";
}
else
{
  scJQ = "No support";
}

var scJR = "";
//=IF(OR(JP59="No support",JN59=0),"No allocation",
//IF(AND(((FJ59-FM59)=(FR59-FT59)),V59>U59),"Top up for higher work/education rate received",
//IF(AND(ER59>=5,JN59>0),"Top up for higher work/education rate received",CONCATENATE(JO59,JP59))))
if(scJP == "No support" || scJN == 0)
{
  scJR = "No allocation";
}
else if((((scFJ-scFM)==(scFR-scFT)) && scV>scU))
{
  scJR = "Top up for higher work/education rate received";
}
else if(scER >= 5 && scJN > 0)
{
  scJR = "Top up for higher work/education rate received";
}
else
{
  scJR = scJO + scJP;
}

var scJS = "";
//=IF(OR(JQ59="No support",JN59=0),"No allocation",
//IF(AND(((FJ59-FM59)=(FR59-FT59)),V59>U59),"Top up for higher work/education rate received",
//IF(AND(ER59>=5,JN59>0),"Top up for higher work/education rate received",
//IF('Clean data'!V59=1,CONCATENATE(JO59,JQ59),CONCATENATE(JO59*Social_activity_hours,JQ59)))))
if(scJQ == "No support" || scJN == 0)
{
  scJS = "No allocation";
}
else if((((scFJ-scFM)==(scFR-scFT)) && scV > scU))
{
  scJS = "Top up for higher work/education rate received";
}
else if(scER >= 5 && scJN > 0)
{
  scJS = "Top up for higher work/education rate received";
}
else if(clV == 1)
{
  scJS = scJO + scJQ;
}
else
{
  scJS = scJO*Social_activity_hours + scJQ;
}

var scJT = "";
//=IF(OR(F59=1, G59=1, 'Clean data'!FW59=3, 'Clean data'!FW59=10,HI59=0),0,HF59)
if(scF == 1 || clFW == 3 || clFW == 10 || scHI == 0 )
{
  scJT = 0;
}
else
{
  scJT = scHF;
}

var scJU = "";
//=ROUND(JT59*1,0)/1
scJU = Math.round(scJT*1,0)/1

var scJV = "";
//=IF(OR(Scores!F59=1,Scores!G59=1,'Clean data'!FW59=3,'Clean data'!FW59=10),"No allocation",
//IF(AND(JU59=1,Respite_DC=1),CONCATENATE("For residential/nursing based respite this would be equivalent to 1 night/year, requiring ",ROUND(('Care home calc'!W59*4),0)/4," hours of personalised support per week"),
//IF(AND(JU59>1,Respite_DC=1),CONCATENATE("For residential/nursing based respite this would be equivalent to ",Scores!JU59," nights/year, requiring ",ROUND(('Care home calc'!W59*4),0)/4," hours of personalised support per week"),
//IF(JU59=0,"No allocation",
//IF(JU59=1,"1 night/year",
//IF(JU59>=2,CONCATENATE(JU59," nights/year"),"No allocation"))))))
if(scF == 1 || scG == 1 || clFW == 3 || clFW == 10)
{
  scJV = "No allocation";
}
else if(scJU == 1 && Respite_DC == 1)
{
  scJV = ("For residential/nursing based respite this would be equivalent to 1 night/year +  requiring "+ Math.round((carcW*4),0)/4 + " hours of personalised support per week");
}
else if(scJU > 1 && Respite_DC == 1)
{
  scJV = ("For residential/nursing based respite this would be equivalent to "+ scJU + " nights/year, requiring " + Math.round((carcW*4),0)/4 + " hours of personalised support per week");
}
else if(scJU == 0)
{
  scJV = "No allocation";
}
else if(scJU == 1)
{
  scJV = "1 night/year";
}
else if(scJU >= 2)
{
  scJV = (scJU + " nights/year");
}
else
{
  scJV = "No allocation";
}

var xx = scAC;
var yy = calO;
var comB = "";
//=Calculator!O59*Scores!AC59
comB = calO*scAC;

var comC = "";
//=IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=0,PA_Homecare_rate>0),(Scores!ER59*Scores!W59)+(Scores!ES59*Second_carer_safety_rate)+(Scores!EU59*PA_Homecare_rate),
///IF(AND(Scores!D59=0,PA_Homecare_rate>0),(Scores!ER59*Scores!W59)+(Scores!ES59*Second_carer_safety_rate)+(Scores!EU59*PA_Homecare_rate),(Scores!ER59*Scores!W59)+(Scores!ES59*Second_carer_safety_rate)+(Scores!EU59*Scores!AC59)))
if(OUT_DSTNeedsProfile == 1 && scE == 0 && PA_Homecare_rate>0)
{
  comC = (scER*scW)+(scES*Second_carer_safety_rate)+(scEU*PA_Homecare_rate);
}
else if(scD == 0 && PA_Homecare_rate>0)
{
  comC = (scER*scW)+(scES*Second_carer_safety_rate)+(scEU*PA_Homecare_rate);
}
else
{
  comC = (scER*scW)+(scES*Second_carer_safety_rate)+(scEU*scAC);
}

var comD = "";
//=IF(AND('Clean data'!DJ59>=6,C59>0,Scores!EJ59=0,Scores!EK59=0,Scores!EL59=0),B59,
//IF(AND('Clean data'!DJ59>=6,C59>0,Scores!BS59=1,Scores!DM59=0,Scores!DR59=0,Scores!CQ59=0,Scores!CV59=0),B59,
//IF(AND(Scores!ER59>0,'Clean data'!EE59=100,'Clean data'!EM59=100,'Clean data'!EI59>=28.6,'Clean data'!EI59<100),B59,
//IF(AND(Scores!ER59>0,Calculator!M59=0,'Clean data'!ED59=100,'Clean data'!EL59=100,'Clean data'!EH59>=28.6,'Clean data'!EH59<100),B59,

//IF(EDL_Round_Output=1,((ROUND((SUM(Scores!FA59:FD59)*4),0)/4)*Scores!AC59),(SUM(Scores!FA59:FD59)*Scores!AC59))))))
if(clDJ >= 6 && comC > 0 && scEJ == 0 && scEK == 0 && scEL == 0)
{
  comD = comB;
}
else if(clDJ >= 6 && comC > 0 && scBS == 1 && scDM == 0 && scDR == 0 && scCQ == 0 && scCV == 0)
{
  comD = comB;
}
else if(scER > 0 && clEE == 100 && clEM == 100 && clEI >= 28.6 && clEI < 100)
{
  comD = comB;
}
else if(scER > 0 && calM == 0 && clED == 100 && clEL == 100 && clEH >= 28.6 && clEH < 100)
{
  comD = comB;
}
else if(EDL_Round_Output=1)
{
  comD = ((Math.round(((scFA + scFB + scFC + scFD)*4),0)/4)*scAC);
}
else
{
  comD = ((scFA + scFB + scFC + scFD)*scAC);
}

var comE = "";
//=IF(B59-D59<0,C59,C59+(B59-D59))
if((comB - comD) < 0)
{
  comE = comC;
}
else
{
  comE = comC + (comB-comD);
}

var comF = "";
//=IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=0,PA_Homecare_rate>0),(Scores!EV59*Scores!W59)+(Scores!EW59*Second_carer_safety_rate)+(Scores!EX59*PA_Homecare_rate)+(Scores!EY59*PA_Homecare_rate),
//IF(AND(Scores!D59=0,PA_Homecare_rate>0),(Scores!EV59*Scores!W59)+(Scores!EW59*Second_carer_safety_rate)+(Scores!EX59*PA_Homecare_rate)+(Scores!EY59*PA_Homecare_rate),(Scores!EV59*Scores!W59)+(Scores!EW59*Second_carer_safety_rate)+(Scores!EX59*Scores!AC59)+(Scores!EY59*Scores!AC59)))
if(OUT_DSTNeedsProfile == 1 && scE == 0 && PA_Homecare_rate>0)
{
  comF = (scEV*scW)+(scEW*Second_carer_safety_rate)+(scEX*PA_Homecare_rate)+(scEY*PA_Homecare_rate);
}
else if(scD == 0 && PA_Homecare_rate>0)
{
  comF = (scEV*scW)+(scEW*Second_carer_safety_rate)+(scEX*PA_Homecare_rate)+(scEY*PA_Homecare_rate);
}
else 
{
  comF = (scEV*scW)+(scEW*Second_carer_safety_rate)+(scEX*scAC)+(scEY*scAC);
}

var comG = "";
//=IF(AND('Clean data'!DJ59>=6,F59>0,NOT('Clean data'!FE59=0.25),EDL_Round_Output=1),((ROUND(((Calculator!K59+Scores!DT59)*4),0)/4)*Scores!AC59),
//IF(AND('Clean data'!DJ59>=6,F59>0,NOT('Clean data'!FE59=0.25)),((Calculator!K59+Scores!DT59)*Scores!AC59),
//IF(EDL_Round_Output=1,((ROUND((SUM(Scores!FA59:FD59)*4),0)/4)*Scores!AC59),SUM(Scores!FA59:FD59)*Scores!AC59)))
if(clDJ >= 6 && comF > 0 && (clFE != 0.25)&& EDL_Round_Output == 1)
{
  comG = ((Math.round(((calK+scDT)*4),0)/4)*scAC);
}
else if(clDJ >= 6 && comF > 0 && (clFE != 0.25))
{
  comG = ((calK+scDT)*scAC);
}
else if(EDL_Round_Output == 1)
{
  comG = ((Math.round(((scFA + scFB + scFC + scFD)*4),0)/4)*scAC)
}
else
{
  comG = ((scFA + scFB + scFC + scFD)*scAC);
}

var comH = "";
//=IF(((Calculator!K59+Scores!DT59)*Scores!AC59)-G59<0,F59,
//IF(EDL_Round_Output=1,(F59+((ROUND(((Calculator!K59+Scores!DT59)*4),0)/4)*Scores!AC59)-G59),F59+(((Calculator!K59+Scores!DT59)*Scores!AC59)-G59)))
if(((calK+scDT)*scAC)-comG<0)
{
  comH = comF;
}
else if(EDL_Round_Output == 1)
{
  comH = (comF+((Math.round(((calK+scDT)*4),0)/4)*scAC)-comG);
}
else
{
  comH = comF+(((calK+scDT)*scAC)-comG);
}

var comI = "";
//=Calculator!Z59*Scores!AC59
comI = calZ*scAC;

var comJ = ""
//=Calculator!Y59*Scores!AC59
comJ = calY*scAC;

var comK = "";
//=Calculator!AB59*Scores!AC59
comK = calAB*scAC;


/// Believe there is a problem with scAC

var comL = "";
//=Calculator!AA59*Scores!AC59
comL = calAA*scAC;

var comM = "";
//=Scores!GD59
comM = scGD;

var comN = "";
//=IF(AND('Clean data'!EW59=0.25,'Clean data'!EY59=0.25),0,
//IF(AND('Clean data'!DJ59=9,((5*Scores!W59)*2)>=(Scores!GA59+Scores!GB59)),0,
//IF(AND('Clean data'!DJ59=9,((5*Scores!W59)*2)<(Scores!GA59+Scores!GB59)),(Scores!GA59+Scores!GB59)-(5*Scores!W59),
///IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<9,Scores!ER59=1,(0*Scores!W59)>=Scores!GA59),Scores!GB59,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<9,Scores!EQ59=0,(5*Scores!W59)>=Scores!GA59),Scores!GB59,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<9,Scores!EQ59=1),(Scores!GA59+Scores!GB59),
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<9,Scores!EQ59=0),(Scores!GA59+Scores!GB59)-(5*Scores!W59),Scores!GA59+Scores!GB59)))))))
if(clEW == 0.25 && clEY == 0.25)
{
  comN = 0;
}
else if(clDJ == 9 &&((5*scW)*2)>=(scGA+scGB))
{
  comN = 0;
}
else if(clDJ == 9 &&((5*scW)*2)<(scGA+scGB))
{
  comN = (scGA+scGB)-(5*scW);
}
else if(clDJ > 5 && clDJ < 9 && scER == 1 &&(0*scW)>=scGA)
{
  comN = scGB;
}
else if(clDJ > 5 && clDJ < 9 && scEQ == 0 &&(5*scW)>=scGA)
{
  comN = scGB;
}
else if(clDJ > 5 && clDJ < 9 && scEQ == 1)
{
  comN = (scGA+scGB);
}
else if(clDJ > 5 && clDJ < 9 && scEQ == 0)
{
  comN = (scGA+scGB)-(5*scW);
}
else
{
  comN = scGA + scGB;
}

var comO = "";
//=IF(Scores!GI59=0,Scores!GM59,(1-Scores!GI59)*Scores!GM59)
if(scGI == 0)
{
  comO = scGM;
}
else
{
  comO = (1-scGI)*scGM;
}

var comP = "";
//=Scores!GM59
comP = scGM;

var comQ = "";
//=E59+I59+K59+M59+O59
comQ = (comE) + (comI) + (comK) + (comM) + (comO);

var comR = "";
//=IF('Clean data'!EQ59=0.25,H59+J59+L59+N59,H59+J59+L59+N59+P59)
if(clEQ == 0.25)
{
  comR = comH + comJ + comL + comN;
}
else
{
  comR = comH + comJ + comL + comN + comP;
}

var comS = "";
//=Calculator!O59*Scores!AA59
comS = calO*scAA;

var comT =  "";
//=((Scores!ER59*8)+(Scores!ES59*8)+(Scores!EU59))*Scores!AA59
comT = ((scER*8)+(scES*8)+(scEU))*scAA;

var comU = "";
//=IF(AND('Clean data'!DJ59>=6,T59>0,Scores!EJ59=0,Scores!EK59=0,Scores!EL59=0),S59,
//IF(AND('Clean data'!DJ59>=6,T59>0,Scores!BS59=1,Scores!DM59=0,Scores!DR59=0,Scores!CQ59=0,Scores!CV59=0),S59,
//IF(AND(Scores!ER59>0,'Clean data'!EE59=100,'Clean data'!EM59=100,'Clean data'!EI59>=28.6,'Clean data'!EI59<100),S59,
//IF(AND(Scores!ER59>0,Calculator!M59=0,'Clean data'!ED59=100,'Clean data'!EL59=100,'Clean data'!EH59>=28.6,'Clean data'!EH59<100),S59,
//IF(EDL_Round_Output=1,((ROUND((SUM(Scores!FA59:FD59)*4),0)/4)*Scores!AA59),(SUM(Scores!FA59:FD59)*Scores!AA59))))))
if(clDJ >= 6 && comT > 0 && scEJ == 0 ** scEK == 0 && scEL == 0)
{
  comU = comS;
}
else if(clDJ >= 6 && comT > 0 && scB == 1 && scDM == 0 && scDR == 0 && scCQ == 0 && scCV == 0)
{
  comU = comS;
}
else if(scER > 0 && clEE == 100 && clEM == 100 && clEI >= 28.6 &&clEI < 100)
{
  comU = comS;
}
else if(scER > 0 && calM == 0 && clED == 100 && clEL == 100 && clEH >= 28.6 && clEH < 100)
{
  comU = comS;
}
else if(EDL_Round_Output == 1)
{
  comU = ((Math.round(((scFA + scFB + scFC + scFD)*4),0)/4)*scAA);
}
else
{
  comU = ((scFA + scFB + scFC + scFD)*scAA);
}

var comV = "";
//=IF(S59-U59<0,T59,T59+(S59-U59))
if(comS-comU < 0)
{
  comV = comT;
}
else
{
  comV = comT+(comS-comU);
}

var comW = "";
//=((Scores!EV59*8)+(Scores!EW59*8)+Scores!EX59+Scores!EY59)*Scores!AA59
comW = ((scEV*8)+(scEW*8)+scEX+scEY)*scAA;

var comX = "";
//=IF(AND('Clean data'!DJ59>=6,W59>0,NOT('Clean data'!FE59=0.25),EDL_Round_Output=1),((ROUND(((Calculator!K59+Scores!DT59)*4),0)/4)*Scores!AA59),
//IF(AND('Clean data'!DJ59>=6,W59>0,NOT('Clean data'!FE59=0.25)),((Calculator!K59+Scores!DT59)*Scores!AA59),
//IF(EDL_Round_Output=1,((ROUND((SUM(Scores!FA59:FD59)*4),0)/4)*Scores!AA59),SUM(Scores!FA59:FD59)*Scores!AA59)))
if(clDJ >= 6 && comW > 0 && (clFE != 0.25)&& EDL_Round_Output == 1)
{
  comX = ((Math.round(((calK+scDT)*4),0)/4)*scAA);
}
else if(clDJ >= 6 && comW > 0 && (clFE != 0.25))
{
  comX = ((calK+scDT)*scAA);
}
else if(EDL_Round_Output == 1)
{
  comX = ((Math.round(((scFA + scFB + scFC + scFD)*4),0)/4)*scAA);
}
else
{
  comX = (scFA + scFB + scFC + scFD)*scAA;
}

var comY = "";
//=IF(((Calculator!K59+Scores!DT59)*Scores!AA59)-X59<0,W59,
//IF(EDL_Round_Output=1,(W59+((ROUND(((Calculator!K59+Scores!DT59)*4),0)/4)*Scores!AA59)-X59),W59+(((Calculator!K59+Scores!DT59)*Scores!AA59)-X59)))
if(((calK + scDT)*scAA)- comX <0)
{
  comY = comW;
}
else if(EDL_Round_Output == 1)
{
  comY = (comW+((Math.round(((calK + scDT)*4),0)/4)*scAA)-comX);
}
else
{
  comY = comW+((calK + scDT)*scAA)-comX;
}

var comZ = "";
//=Calculator!Z59*Scores!AA59
comZ = calZ*scAA;

var comAA = "";
//=Calculator!Y59*Scores!AA59
comAA = calY*scAA;

var comAB = "";
//=Calculator!AB59*Scores!AA59
comAB = calAB*scAA;

var comAC = "";
//=Calculator!AA59*Scores!AA59
comAC = calAA*scAA;

var comAD = "";
//=Scores!IT59*Scores!AA59
comAD = scIT*scAA;

//var comAE = "";
//=IF(AND('Clean data'!EW59=0.25,'Clean data'!EY59=0.25),0,
//IF(AND('Clean data'!DJ59=9,(((5*8)*Scores!Z59)*2)>=(Scores!GF59+Scores!GG59)),0,
//IF(AND('Clean data'!DJ59=9,(((5*8)*Scores!Z59)*2)<(Scores!GF59+Scores!GG59)),(Scores!GF59+Scores!GG59)-((5*8)*Scores!Z59),

//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<9,Scores!ER59=1,((0*8)*Scores!Z59)>=(Scores!GF59)),(Scores!GG59),
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<9,Scores!EQ59=0,((5*8)*Scores!Z59)>=(Scores!GF59)),(Scores!GG59),
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<9,Scores!EQ59=1),(Scores!GF59+Scores!GG59),
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<9,Scores!EQ59=0),(Scores!GF59+Scores!GG59)-((5*8)*Scores!Z59),Scores!GF59+Scores!GG59)))))))
//if(clEW == 0.25 && clEY == 0.25)
//{
// comAE = 0;
//}
//else if((clDJ == 9 &&((5*8)*scZ)*2)>=(scGF + scGG))
//{
//  comAE = 0;
//}
//else if((clDJ == 9 &&((5*8)*scZ)*2)<(scGF + scGG))
//{
//  comAE = (scGF+scGG)-((5*8)*scZ);
//}
////else if(clDJ > 5 && clDJ < 9 && scER == 1 && ((0*8)*scZ)>=(scGF))
//{
 // comAE = scGG;
//}
//else if(clDJ > 5 && clDJ < 9 && scEQ == 0 && ((5*8)*scZ)>=(scGF))
//{
//  comAE = scGG;
//}
//else if(clDJ > 5 && clDJ < 9 && scEQ == 1)
//{
 /// comAE = (scGF + scGG);
//}
//else if(clDJ > 5 && clDJ < 9 && scEQ == 0)
//{
//  comAE = (scGF + scGG)-((5*8)*scZ);
//}
///else
//{
 // comAE = scGF + scGG;
//}

var comAF = "";
//=Scores!IB59*Scores!AA59
comAF = scIB*scAA;

var comAG = "";
//=(Scores!IA59*7)*Scores!AA59
comAG = (scIA*7)*scAA;

var comAH = "";
//=V59+Z59+AB59+AD59+AF59
comAH = comV + comZ + comAB + comAD + comAF;

var comAI = "";
//=IF('Clean data'!EQ59=0.25,Y59+AA59+AC59+AE59,Y59+AA59+AC59+AE59+AG59)
if(clEQ == 0.25)
{
  comAI = comY + comAA + comAC + comAE;
}
else
{
  comAI = comY + comAA + comAC + comAE + comAG;
}

var caB = "";
//=IF(OR('Clean data'!FW59=12, 'Clean data'!FW59=15),"Yes", "No")
if(clFW == 12 || clFW == 15)
{
  caB = "Yes";
}
else
{
  caB = "No";
}

var caC = "";
//=IF(AND('Clean data'!FY59<7, 'Clean data'!O59>1,'Clean data'!O59<=4,'Clean data'!V59>1,'Clean data'!V59<=4), ROUND(((Care_home_FulltimeCarer_Activities*Care_home_20Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59<7,'Clean data'!O59>1,'Clean data'!O59<=4),ROUND(((Care_home_FulltimeCarer_Activities*Care_home_20Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59<7,'Clean data'!V59>1,'Clean data'!V59<=4),ROUND(((Care_home_FulltimeCarer_Activities*Care_home_20Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59=7, 'Clean data'!O59>1,'Clean data'!O59<=4,'Clean data'!V59>1,'Clean data'!V59<=4), ROUND(((Care_home_FulltimeCarer_Activities*Care_home_Under5Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59=7,'Clean data'!O59>1,'Clean data'!O59<=4), ROUND(((Care_home_FulltimeCarer_Activities*Care_home_Under5Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59=7,'Clean data'!V59>1,'Clean data'!V59<=4),ROUND(((Care_home_FulltimeCarer_Activities*Care_home_Under5Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59=8, 'Clean data'!O59>1,'Clean data'!O59<=4,'Clean data'!V59>1,'Clean data'!V59<=4), ROUND(((Care_home_FulltimeCarer_Activities*Care_home_5to9Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59=8, 'Clean data'!O59>1,'Clean data'!O59<=4), ROUND(((Care_home_FulltimeCarer_Activities*Care_home_5to9Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59=8, 'Clean data'!V59>1,'Clean data'!V59<=4),ROUND(((Care_home_FulltimeCarer_Activities*Care_home_5to9Sharing)*4),0)/4,
//IF(AND('Clean data'!FY59>=9, 'Clean data'!O59>1,'Clean data'!O59<=4,'Clean data'!V59>1,'Clean data'!V59<=4),ROUND(((Care_home_FulltimeCarer_Activities*Care_home_9orMoreSharing)*4),0)/4,
//IF(AND('Clean data'!FY59>=9, 'Clean data'!O59>1,'Clean data'!O59<=4),ROUND(((Care_home_FulltimeCarer_Activities*Care_home_9orMoreSharing)*4),0)/4,
//IF(AND('Clean data'!FY59>=9, 'Clean data'!V59>1,'Clean data'!V59<=4),ROUND(((Care_home_FulltimeCarer_Activities*Care_home_9orMoreSharing)*4),0)/4,))))))))))))
if((clFY < 7 && clO > 1 && clO <= 4 && clV > 1 && clV <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_20Sharing)*4),0)/4;
}
else if((clFY < 7 && clO > 1 && clO <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_20Sharing)*4),0)/4;
}
else if((clFY < 7 && clV > 1 && clV <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_20Sharing)*4),0)/4;
}
else if((clFY == 7 && clO > 1 && clO <= 4 && clV > 1 && clV<=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_Under5Sharing)*4),0)/4;
}
else if((clFY == 7 && clO > 1 && clO <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_Under5Sharing)*4),0)/4;
}
else if((clFY == 7 && clO > 1 && clO<=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_Under5Sharing)*4),0)/4;
}
else if((clFY == 7 && clV > 1 && clV <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_Under5Sharing)*4),0)/4;
}
else if((clFY == 8 &&  clO > 1 && clO <= 4 && clV > 1 && clV <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_5to9Sharing)*4),0)/4;
}
else if((clFY == 8 && clO > 1 && clO<=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_5to9Sharing)*4),0)/4;
}
else if((clFY == 8 && clV > 1 && clV <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_5to9Sharing)*4),0)/4;
}
else if((clFY >= 9 &&  clO > 1 && clO <= 4 && clV > 1 && clV <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_9orMoreSharing)*4),0)/4;
}
else if((clFY >= 9 && clO > 1 && clO <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_9orMoreSharing)*4),0)/4;
}
else if((clFY >= 9 && clV > 1 && clV <=4))
{
  caC = Math.round(((Care_home_FulltimeCarer_Activities*Care_home_9orMoreSharing)*4),0)/4
}

var caD = "";
//=IF(AND('Clean data'!O59>0,'Clean data'!O59<3),C59,
//IF(AND('Clean data'!O59=3,'Clean data'!Q59<1),C59,
//IF(AND(OR(Scores!B59>0, Scores!C59>0), 'Clean data'!F59<=6,'Clean data'!O59=3,'Clean data'!Q59=1),C59+Care_home_activity_length_Under65,
//IF(AND(OR(Scores!B59>0, Scores!C59>0),'Clean data'!O59=3,'Clean data'!Q59=2),C59+2*Care_home_activity_length_Under65,
//IF(AND(OR(Scores!B59>0, Scores!C59>0),'Clean data'!O59=3,'Clean data'!Q59=5),C59+5*Care_home_activity_length_Under65,
//IF(AND(OR(Scores!B59>0, Scores!C59>0),'Clean data'!O59=3,'Clean data'!Q59=7),C59+7*Care_home_activity_length_Under65,
//IF(AND('Clean data'!O59=3,'Clean data'!Q59=1),C59+Care_home_activity_length,
//IF(AND('Clean data'!O59=3,'Clean data'!Q59=2),C59+2*Care_home_activity_length,
//IF(AND('Clean data'!O59=3,'Clean data'!Q59=5),C59+5*Care_home_activity_length,
//IF(AND('Clean data'!O59=3,'Clean data'!Q59=7),C59+7*Care_home_activity_length,
//IF(AND('Clean data'!O59=4,'Clean data'!Q59<1),C59,
//IF(AND(OR(Scores!B59>0, Scores!C59>0),'Clean data'!O59=4,'Clean data'!Q59=1),C59+2*Care_home_activity_length_Under65,
//IF(AND(OR(Scores!B59>0, Scores!C59>0),'Clean data'!O59=4,'Clean data'!Q59=2),C59+4*Care_home_activity_length_Under65,
//IF(AND(OR(Scores!B59>0, Scores!C59>0),'Clean data'!O59=4,'Clean data'!Q59=5),C59+10*Care_home_activity_length_Under65,
//IF(AND(OR(Scores!B59>0, Scores!C59>0),'Clean data'!O59=4,'Clean data'!Q59=7),C59+14*Care_home_activity_length_Under65,
//IF(AND('Clean data'!O59=4,'Clean data'!Q59=1),C59+2*Care_home_activity_length,
//IF(AND('Clean data'!O59=4,'Clean data'!Q59=2),C59+4*Care_home_activity_length,
//IF(AND('Clean data'!O59=4,'Clean data'!Q59=5),C59+10*Care_home_activity_length,
//IF(AND('Clean data'!O59=4,'Clean data'!Q59=7),C59+14*Care_home_activity_length,0)))))))))))))))))))
if(clO > 0 && clO < 3)
{
  caD = caC;
}
else if(clO == 3 && clQ < 1)
{
  caD = caC;
}
else if((scB > 0 || scC > 0)&& clF<=6 && clO == 3 && clQ == 1)
{
  caD = caC+Care_home_activity_length_Under65;
}
else if((scB > 0 || scC > 0)&& clO == 3 && clQ == 2)
{
  caD = caC+2*Care_home_activity_length_Under65;
}
else if((scB > 0 || scC > 0)&& clO == 3 && clQ == 5)
{
  caD = caC+5*Care_home_activity_length_Under65;
}
else if((scB > 0 || scC > 0)&& clO == 3 && clQ == 7)
{
  caD = caC+7*Care_home_activity_length_Under65;
}
else if((clO == 3 && clQ == 1))
{
  caD = caC+Care_home_activity_length;
}
else if((clO == 3 && clQ == 2))
{
  caD = caC+2*Care_home_activity_length;
}
else if((clO == 3 && clQ == 5))
{
  caD = caC+5*Care_home_activity_length;
}
else if((clO == 3 && clQ == 7))
{
  caD = caC+7*Care_home_activity_length;
}
else if((clO == 4 && clQ < 1))
{
  caD = caC;
}
else if((scB > 0 || scC> 0)&& clO == 4 && clQ == 1)
{
  caD = caC+2*Care_home_activity_length_Under65
}
else if((scB > 0 || scC > 0)&& clO == 4 && clQ == 2)
{
  caD = caC+4*Care_home_activity_length_Under65;
}
else if((scB > 0 || scC > 0)&& clO == 4 && clQ == 5)
{
  caD = caC+10*Care_home_activity_length_Under65;
}
else if((scB > 0 || scC > 0)&& clO == 4 && clQ == 7)
{
  caD = caC+14*Care_home_activity_length_Under65;
}
else if(clO == 4 && clQ == 1)
{
  caD = caC+2*Care_home_activity_length;
}
else if(clO == 4 && clQ == 2)
{
  caD = caC+4*Care_home_activity_length;
}
else if(clO == 4 && clQ == 5)
{
  caD = caC+10*Care_home_activity_length;
}
else if(clO == 4 && clQ == 7)
{
  caD = caC+14*Care_home_activity_length;
}
else
{
  caD = 0;
}

var caE = "";
//=IF('Clean data'!CY59=1,Care_Home_Psych_Increase_1,
//IF('Clean data'!CY59=2,Care_Home_Psych_Increase_2,
//IF('Clean data'!CY59=3,Care_Home_Psych_Increase_3,
//IF('Clean data'!CY59=4,Care_Home_Psych_Increase_4,0))))
if(clCY == 1)
{
  caE = Care_Home_Psych_Increase_1;
}
else if(clCY == 2)
{
  caE = Care_Home_Psych_Increase_2;
}
else if(clCY == 3)
{
  caE = Care_Home_Psych_Increase_3;
}
else if(clCY == 4)
{
  caE = Care_Home_Psych_Increase_4;
}
else
{
  caE = 0; 
}

var caF = "";
//=IF('Clean data'!DA59=1,Care_Home_Psych_Increase_1,
//IF('Clean data'!DA59=2,Care_Home_Psych_Increase_2,
//IF('Clean data'!DA59=3,Care_Home_Psych_Increase_3,
//IF('Clean data'!DA59=4,Care_Home_Psych_Increase_4,0))))
if(clDA == 1)
{
  caF = Care_Home_Psych_Increase_1;
}
else if(clDA == 2)
{
  caF = Care_Home_Psych_Increase_2;
}
else if(clDA == 3)
{
  caF = Care_Home_Psych_Increase_3;
}
else if(clDA == 4)
{
  caF = Care_Home_Psych_Increase_4;
}
else
{
  caF = 0;
}

var caG = "";
//=IF('Clean data'!DC59=1,Care_Home_Psych_Increase_1,
//IF('Clean data'!DC59=2,Care_Home_Psych_Increase_2,
//IF('Clean data'!DC59=3,Care_Home_Psych_Increase_3,
//IF('Clean data'!DC59=4,Care_Home_Psych_Increase_4,0))))
if(clDC == 1)
{
  caG = Care_Home_Psych_Increase_1;
}
else if(clDC == 2)
{
  caG = Care_Home_Psych_Increase_2
}
else if(clDC == 3)
{
  caG = Care_Home_Psych_Increase_3;
}
else if(clDC == 4)
{
  caG = Care_Home_Psych_Increase_4;
}
else
{
  caG = 0;
}

var caH = "";
//=IF('Clean data'!DE59=1,Care_Home_Psych_Increase_1,
//IF('Clean data'!DE59=2,Care_Home_Psych_Increase_2,
//IF('Clean data'!DE59=3,Care_Home_Psych_Increase_3,
//IF('Clean data'!DE59=4,Care_Home_Psych_Increase_4,0))))
if(clDE == 1)
{
  caH = Care_Home_Psych_Increase_1;
}
else if(clDE == 2)
{
  caH = Care_Home_Psych_Increase_2;
}
else if(clDE == 3)
{
  caH = Care_Home_Psych_Increase_3;
}
else if(clDE == 4)
{
  caH = Care_Home_Psych_Increase_4;
}
else
{
  caH = 0;
}

var caI = "";
//=SUM(E59:H59)
caI = caE + caH;

var caJ = "";
//=IF(AND(Scores!B59=0,Scores!C59=0,Care_Home_PsychBlock_Over65Switch=0),0,
//IF(AND(OR(Scores!B59>0,Scores!C59>0),Care_Home_PsychBlock_Under65Switch=0),0,
//IF('Clean data'!DH59=1,I59*Care_Home_Impact_Mood_1,
//IF('Clean data'!DH59=2,I59*Care_Home_Impact_Mood_2,
//IF('Clean data'!DH59=3,I59*Care_Home_Impact_Mood_3,
//IF('Clean data'!DH59=4,I59*Care_Home_Impact_Mood_4,I59))))))
if((scB == 0 && scC == 0 && Care_Home_PsychBlock_Over65Switch == 0))
{
  caJ = 0;
}
else if((scB > 0 || scC > 0)&& Care_Home_PsychBlock_Under65Switch == 0)
{
  caJ = 0;
}
else if(clDH == 1)
{
  caJ = caI*Care_Home_Impact_Mood_1;
}
else if(clDH == 2)
{
  caJ = caI*Care_Home_Impact_Mood_2;
}
else if(clDH == 3)
{
  caJ = caI*Care_Home_Impact_Mood_3;
}
else if(clDH == 4)
{
  caJ = caI*Care_Home_Impact_Mood_4;
}
else
{
  caJ = caI;
}

var caK = "";
//=IF(AND(C59>0,D59=0),C59,0)
if(caC > 0 && caD == 0)
{
  caK = caC;
}
else
{
  caK = 0;
}

var caL = "";
//=IF(AND(Scores!B59=0,Scores!C59=0),0,
//IF(Care_Home_Work_Inclusion=0,0,
//IF(AND('Clean data'!V59>0,'Clean data'!V59<3),K59,
//IF(AND('Clean data'!V59=3,'Clean data'!X59<1),K59,
//IF(AND('Clean data'!V59=3,'Clean data'!X59=1),K59+Care_home_activity_length_Under65,
//IF(AND('Clean data'!V59=3,'Clean data'!X59=2),K59+2*Care_home_activity_length_Under65,
//IF(AND('Clean data'!V59=3,'Clean data'!X59=5),K59+5*Care_home_activity_length_Under65,
//IF(AND('Clean data'!V59=3,'Clean data'!X59=7),K59+7*Care_home_activity_length_Under65,
//IF(AND('Clean data'!V59=4,'Clean data'!X59<1),K59,
//IF(AND('Clean data'!V59=4,'Clean data'!X59=1),K59+2*Care_home_activity_length_Under65,
//IF(AND('Clean data'!V59=4,'Clean data'!X59=2),K59+4*Care_home_activity_length_Under65,
//IF(AND('Clean data'!V59=4,'Clean data'!X59=5),K59+10*Care_home_activity_length_Under65,

//IF(AND('Clean data'!V59=4,'Clean data'!X59=7),K59+14*Care_home_activity_length_Under65, 0)))))))))))))
if(scB == 0 && scC == 0)
{
  caL = 0;
}
else if(Care_Home_Work_Inclusion == 0)
{
  caL = 0;
}
else if(clV > 0 && clV < 3)
{
  caL = caK;
}
else if(clV == 3 && clX < 1)
{
  caL = caK;
}
else if(clV == 3 && clX == 1)
{
  caL = caK+Care_home_activity_length_Under65;
}
else if(clV == 3 && clX == 2)
{
  caL = caK+2*Care_home_activity_length_Under65;
}
else if(clV == 3 && clX == 5)
{
  caL = caK+5*Care_home_activity_length_Under65;
}
else if(clV == 3 && clX == 7)
{
  caL = caK+7*Care_home_activity_length_Under65;
}
else if(clV == 4 && clX < 1)
{
  caL = caK;
}
else if(clV == 4 && clX == 1)
{
  caL = caK+2*Care_home_activity_length_Under65;
}
else if(clV == 4 && clX == 2)
{
  caL = caK+4*Care_home_activity_length_Under65;
}
else if(clV == 4 && clX == 5)
{
  caL = caK+10*Care_home_activity_length_Under65
}
else if(clV == 4 && clX == 7)
{
  caL = caK+14*Care_home_activity_length_Under65;
}
else
{
  caL = 0;
}

var caM = "";
//=IF(Care_home_CommunicationSwitch=0,0,
//IF(AND(Scores!B59=0,Scores!C59=0),0,
//IF(AND('Clean data'!H59=4,'Clean data'!J59=4),Care_Home_Communication_5,
//IF(OR('Clean data'!H59=4,'Clean data'!J59=4),Care_Home_Communication_4,
//IF(OR('Clean data'!H59=3,'Clean data'!J59=3),Care_Home_Communication_3,
//IF(OR('Clean data'!H59=2,'Clean data'!J59=2),Care_Home_Communication_2,
//IF(OR(AND('Clean data'!H59>0,'Clean data'!H59<=1),AND('Clean data'!J59>0,'Clean data'!J59<=1)),Care_Home_Communication_1,0)))))))
if(Care_home_CommunicationSwitch == 0)
{
  caM = 0;
}
else if(scB == 0 && scC == 0)
{
  caM = 0;
}
else if(clH == 4 && clJ == 4)
{
  caM = Care_Home_Communication_5;
}
else if(clH == 4 || clJ == 4)
{
  caM = Care_Home_Communication_4;
}
else if(clH == 3 || clJ == 3)
{
  caM = Care_Home_Communication_3;
}
else if(clH == 2 || clJ == 2)
{
  caM = Care_Home_Communication_2;
}
else if((clH > 0 && clH <= 1)|| (clJ > 0 && clJ <= 1))
{
  caM = Care_Home_Communication_1;
}
else
{
  caM = 0;
}

var caN = "";
//=IF(Care_Home_HouseworkSwitch=0,0,
//IF(OR('Clean data'!AE59=2,'Clean data'!AE59=3),Scores!FE59,0))
if(Care_Home_HouseworkSwitch == 0)
{
  caN = 0;
}
else if(clAE == 2 || clAE == 3)
{
  caN = scFE;
}
else
{
  caN = 0;
}

var caO = "";
//=IF(Care_home_ShoppingSwitch=0,0,
//IF(AND(Scores!B59=0,Scores!C59=0),0,
//IF(SUM(Scores!FF59,Scores!FG59)>0,SUM(Scores!FF59,Scores!FG59),0)))
if(Care_home_ShoppingSwitch == 0)
{
  caO = 0;
}
else if(scB == 0 && scC == 0)
{
  caO = 0;
}
else if((scFF+scFG)>0)
{
  caO = (scFF+scFG)
}
else
{
  caO = 0;
}

var caP = "";
//=IF(AND('Clean data'!CE59>=4,'Clean data'!CG59=7),'Clean data'!CG59*Care_home_medication,
//IF(AND('Clean data'!CE59>=4,'Clean data'!CG59=14),'Clean data'!CG59*Care_home_medication,
//IF(AND('Clean data'!CE59>=4,'Clean data'!CG59=21),'Clean data'!CG59*Care_home_medication,
//IF(AND('Clean data'!CE59>=4,'Clean data'!CG59=28),'Clean data'!CG59*Care_home_medication,

//IF(AND('Clean data'!CE59>=4,'Clean data'!CG59=7),'Clean data'!CG59*Care_home_medication,0)))))
if(clCE >= 4 && clCG == 7)
{
  caP = clCG*Care_home_medication;
}
else if(clCE >= 4 && clCG == 14)
{
  caP = clCG*Care_home_medication;
}
else if(clCE >= 4 && clCG == 21)
{
  caP = clCG*Care_home_medication;
}
else if(clCE >= 4 && clCG == 28)
{
  caP = clCG*Care_home_medication;
}
else if(clCE >=4 && clCG == 7)
{
  caP = clCG*Care_home_medication;
}
else
{
  caP = 0;
}

var caQ = "";
//=IF(AND(Include_eating_dynamic_ch=1,Care_home_15min_toileting=0),(Calculator!K59+Scores!EB59)+P59,
//IF(AND(Include_eating_dynamic_ch=0,Care_home_15min_toileting=0),(Calculator!K59)+P59,
//IF(AND(Include_eating_dynamic_ch=1,Care_home_15min_toileting=1),((Calculator!K59-((Calculator!J59-Calculator!F59))/2)+Scores!EB59)+P59,

//IF(AND(Include_eating_dynamic_ch=0,Care_home_15min_toileting=1),(Calculator!K59-((Calculator!J59-Calculator!F59))/2)+P59,0))))
if(Include_eating_dynamic_ch == 1 && Care_home_15min_toileting == 0)
{
  caQ = (calK+scEB)+caP
}
else if(Include_eating_dynamic_ch == 0 && Care_home_15min_toileting == 0)
{
  caQ = (calK)+caP
}
else if(Include_eating_dynamic_ch == 1 && Care_home_15min_toileting == 1)
{
  caQ = ((calK-((calJ-calF))/2)+scEB)+caP;
}
else if(Include_eating_dynamic_ch == 0 && Care_home_15min_toileting == 1)
{
  caQ = (calK-((calJ-calF))/2)+caP;
}
else
{
  caQ = 0;
}

var caR = "";
//=IF(Scores!B59=1,'Care home calc'!Q59*Care_home_EDLMultiplier_LD,
//IF(Scores!B59=2,'Care home calc'!Q59*Care_home_EDLMultiplier_MH,
//IF(Scores!C59=1,'Care home calc'!Q59*Care_home_EDLMultiplier_PD,Q59*Care_home_EDLMultiplier_Default)))
if(scB == 1)
{
  caR = caQ*Care_home_EDLMultiplier_LD;
}
else if(scB == 2)
{
  caR = caQ*Care_home_EDLMultiplier_MH;
}
else if(scC == 1)
{
  caR = caQ*Care_home_EDLMultiplier_PD;
}
else
{
  caR = caQ*Care_home_EDLMultiplier_Default;
}

var caS = "";
//=IF(Care_home_15min_toileting=0,(Calculator!Y59),
//IF(AND(Care_home_15min_toileting=1,Calculator!Y59=0),((Calculator!X59-((Calculator!X59-Calculator!R59)/2))),
//IF(Care_home_15min_toileting=1,((Calculator!Y59-((Calculator!X59-Calculator!R59)/2))), 0)))
if(Care_home_15min_toileting == 0)
{
  caS = (calY);
}
else if(Care_home_15min_toileting == 1 && calY == 0)
{
  caS = ((calX-((calX-calR)/2)));
}
else if(Care_home_15min_toileting == 1)
{
  caS = ((calY-((calX-calR)/2)));
}

var caT = "";
//=IF(Scores!B59=1,S59*Care_home_EDLMultiplier_LD,
//IF(Scores!B59=2,S59*Care_home_EDLMultiplier_MH,
//IF(Scores!C59=1,S59*Care_home_EDLMultiplier_PD,S59*Care_home_EDLMultiplier_Default)))
if(scB == 1)
{
  caT = caS*Care_home_EDLMultiplier_LD;
}
else if(scB == 2)
{
  caT = caS*Care_home_EDLMultiplier_MH;
}
else if(scC == 1)
{
  caT = caS*Care_home_EDLMultiplier_PD
}
else
{
  caT = caS*Care_home_EDLMultiplier_Default
}

var caU = "";
//=IF(AND(OR(Scores!B59>0, Scores!C59>0),'Clean data'!DL59<=WakingImpactLevel),0,
//IF('Clean data'!DK59>=5,Care_home_night_adjustment*(VLOOKUP('Clean data'!DL59,NightAlone,2,FALSE)),0))
if((scB > 0 || scC > 0)&& clDL <= WakingImpactLevel)
{
  caU = 0;
}
else if(clDK >= 5)
{
  caU = Care_home_night_adjustment*(VLOOKUP(clDL,NightAlone,2,FALSE));
}
else
{
  caU = 0;
}

var caV = "";
//=IF('Clean data'!DK59=7,U59,0)
if(clDK == 7)
{
  caV = caU;
}
else
{
  caV = 0;
}

var caW = "";
//=IF(AND(Dynamic_Hours_Cap>0,(D59+J59+L59+M59+N59+O59+R59+T59+U59+V59)>Dynamic_Hours_Cap),Dynamic_Hours_Cap, D59+J59+L59+M59+N59+O59+R59+T59+U59+V59)
if((Dynamic_Hours_Cap > 0 && (caD+caJ+caL+caM+caN+caO+caR+caT+caU+caV))>Dynamic_Hours_Cap)
{
  caW = Dynamic_Hours_Cap;
}
else
{
  caW = caD+caJ+caL+caM+caN+caO+caR+caT+caU+caV;
}

var caX = "";
//=IF(Scores!C59=1,W59*Res_Hours_PD_Rate,
//IF(Scores!B59=1,W59*Res_Hours_LD_Rate,
//IF(Scores!B59=2,W59*Res_Hours_MH_Rate,W59*Res_Hours_Rate)))
if(scC == 1)
{
  caX = caW*Res_Hours_PD_Rate;
}
else if(scB == 1)
{
  caX = caW*Res_Hours_LD_Rate;
}
else if(scB == 2)
{
  caX = caW*Res_Hours_MH_Rate;
}
else 
{
  caX = caW*Res_Hours_Rate;
}

var caY = "";
//=IF(Scores!C59=1,X59+Hotel_Cost_Weekly_PD,
//IF(Scores!B59=1,X59+Hotel_Cost_Weekly_LD,
//IF(Scores!B59=2,X59+Hotel_Cost_Weekly_MH,X59+Hotel_Cost_Weekly)))
if(scC == 1)
{
  caY = caX+Hotel_Cost_Weekly_PD;
}
else if(scB == 1)
{
  caY = caX+Hotel_Cost_Weekly_LD;
}
else if(scB == 2)
{
  caY = caX+Hotel_Cost_Weekly_MH;
}
else
{
  caY = caX+Hotel_Cost_Weekly;
}

var caZ = "";
//=IF(Scores!C59=1,Y59+Res_PD_Return_Investment,
//IF(Scores!B59=1,Y59+Res_LD_Return_Investment,
//IF(Scores!B59=2,Y59+Res_MH_Return_Investment,Y59+Res_Return_Investment)))
if(scC == 1)
{
  caZ = caY+Res_PD_Return_Investment;
}
else if(scB == 1)
{
  caZ = caY+Res_LD_Return_Investment;
}
else if(scB == 2)
{
  caZ = caY+Res_MH_Return_Investment;
}
else
{
  caZ = caY+Res_Return_Investment;
}

var caAA = "";
//=IF(AND(Scores!C59=1,Ceiling_Res_PD>0,Z59>Ceiling_Res_PD),Ceiling_Res_PD,
//IF(AND(Scores!B59=1,Ceiling_Res_LD>0,Z59>Ceiling_Res_LD),Ceiling_Res_LD,
//IF(AND(Scores!B59=2,Ceiling_Res_MH>0,Z59>Ceiling_Res_MH),Ceiling_Res_MH,
//IF(AND(Scores!B59=0,Scores!C59=0,Z59>Ceiling_Res_Default,Ceiling_Res_Default>0),Ceiling_Res_Default,Z59))))
if(scC == 1 && Ceiling_Res_PD > 0 && caZ > Ceiling_Res_PD)
{
  caAA = Ceiling_Res_PD;
}
else if(scB == 1 && Ceiling_Res_LD > 0 && caZ > Ceiling_Res_LD)
{
  caAA = Ceiling_Res_LD;
}
else if(scB == 2 && Ceiling_Res_MH > 0 && caZ > Ceiling_Res_MH)
{
  caAA = Ceiling_Res_MH;
}
else if(scB == 0 && scC == 0 && caZ>Ceiling_Res_Default && Ceiling_Res_Default>0)
{
  caAA = Ceiling_Res_Default;
}
else
{
  caAA = caZ;
}

var caAB = "";
//=IF(Scores!C59=1,W59*Nurs_hours_PD_Rate,
//IF(Scores!B59=1,W59*Nurs_hours_LD_Rate,
//IF(Scores!B59=2,W59*Nurs_hours_MH_Rate,W59*Nurs_Hours_Rate)))
if(scC == 1)
{
  caAB = caW*Nurs_hours_PD_Rate;
}
else if(scB == 1)
{
  caAB = caW*Nurs_hours_LD_Rate;
}
else if(scB == 2)
{
  caAB = caW*Nurs_hours_MH_Rate;
}
else
{
  caAB = caW*Nurs_Hours_Rate;
}

var caAC = "";
//=IF(Scores!C59=1,AB59+Hotel_Cost_Weekly_Nursing_PD,
//IF(Scores!B59=1,AB59+Hotel_Cost_Weekly_Nursing_LD,
//IF(Scores!B59=2,AB59+Hotel_Cost_Weekly_Nursing_MH,AB59+Hotel_Cost_Weekly_Nursing_Default)))
if(scC == 1)
{
  caAC = caAB+Hotel_Cost_Weekly_Nursing_PD;
}
else if(scB == 1)
{
  caAC = caAB+Hotel_Cost_Weekly_Nursing_LD;
}
else if(scB == 2)
{
  caAC = caAB+Hotel_Cost_Weekly_Nursing_MH;
}
else 
{
  caAC = caB+Hotel_Cost_Weekly_Nursing_Default;
}

var caAD = "";
//=IF(Scores!C59=1,AC59+Nurs_PD_Return_Investment,
//IF(Scores!B59=1,AC59+Nurs_LD_Return_Investment,
//IF(Scores!B59=2,AC59+Nurs_MH_Return_Investment,AC59+Nurs_Return_Investment)))
if(scC == 1)
{
  caAD = caAC+Nurs_PD_Return_Investment;
}
else if(scB == 1)
{
  caAD = caAC+Nurs_LD_Return_Investment;
}
else if(scB == 2)
{
  caAD = caAC+Nurs_MH_Return_Investment;
}
else
{
  caAD = caAC+Nurs_Return_Investment;
}

var caAE = "";
//=IF(AND(Scores!C59=1,Ceiling_Nurse_PD>0,AD59>Ceiling_Nurse_PD),Ceiling_Nurse_PD,
//IF(AND(Scores!B59=1,Ceiling_Nurse_LD>0,AD59>Ceiling_Nurse_LD),Ceiling_Nurse_LD,
//IF(AND(Scores!B59=2,Ceiling_Nurse_MH>0,AD59>Ceiling_Nurse_MH),Ceiling_Nurse_MH,
//IF(AND(Scores!B59=0,Scores!C59=0, AD59>Ceiling_Nurse_Default,Ceiling_Nurse_Default>0),Ceiling_Nurse_Default,AD59))))
if(scC == 1 && Ceiling_Nurse_PD > 0 && caAD > Ceiling_Nurse_PD)
{
  caAE = Ceiling_Nurse_PD;
}
else if(scB == 1 && Ceiling_Nurse_LD > 0 && caAD > Ceiling_Nurse_LD)
{
  caAE = Ceiling_Nurse_LD;
}
else if(scB == 2 && Ceiling_Nurse_MH > 0 && caAD > Ceiling_Nurse_MH)
{
  caAE = Ceiling_Nurse_MH;
}
else if(scB == 0 && scC == 0 && caAD > Ceiling_Nurse_Default && Ceiling_Nurse_Default > 0)
{
  caAE = Ceiling_Nurse_Default;
}
else
{
  caAE = caAD;
}

var caAF = "";
//=IF('Clean data'!DK59=1,Scores!GK59*7,
//IF('Clean data'!DK59=2,(Scores!GK59*7)*2,
//IF('Clean data'!DK59=3,(Scores!GK59*7)*3,Scores!GK59*7)))
if(clDK == 1)
{
  caAF = scGK*7;
}
else if(clDK == 2)
{
  caAF = (scGK*7)*2;
}
else if(clDK == 3)
{
  caAF = (scGK*7)*3;
}
else
{
  caAF = scGK*7;
}

var caAG = "";
//=IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!C59=1),Scores!H59=0,Residential_home_Standard>0),Residential_home_Standard,
//IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!C59=1),Scores!H59=1,Residential_Dementia>0),Residential_Dementia,0))
if((scB != 1)&& (scB != 2)&& (scC != 1)&& scH == 0 && Residential_home_Standard > 0)
{
  caAG = Residential_home_Standard;
}
else if((scB != 1)&& (scB != 2)&& (scC != 1)&& scH == 1 && Residential_Dementia > 0)
{
  caAG = Residential_Dementia;
}
else
{
  caAG = 0;
}

var caAH = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,Scores!E59=1,Tier2_Residential_home>0),Tier2_Residential_home,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,Scores!E59=2,Tier3_Residential_home>0),Tier3_Residential_home,
//IF(AND(ModelType>=2,Scores!D59=1,Tier2_Residential_home>0),Tier2_Residential_home,
//IF(AND(ModelType>=2,Scores!D59=2,Tier3_Residential_home>0),Tier3_Residential_home,0))))
if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && scE == 1 && Tier2_Residential_home > 0)
{
  caAH = Tier2_Residential_home;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && scE == 2 && Tier3_Residential_home > 0)
{
  caAH = Tier3_Residential_home;
}
else if(ModelType>=2 && scD == 1 && Tier2_Residential_home > 0)
{
  caAH = Tier2_Residential_home;
}
else if(ModelType>=2 && scD == 2 && Tier3_Residential_home > 0)
{
  caAH = Tier3_Residential_home;
}
else
{
  caAH = 0;
}

var caAI = "";
//=IF(AND(Scores!C59=1,Scores!H59=0,WA_Residential_home_Standard>0),WA_Residential_home_Standard,
//IF(AND(Scores!C59=1,Scores!H59=1,WA_Residential_Dementia>0),WA_Residential_Dementia,0))
if(scC == 1 && scH == 0 && WA_Residential_home_Standard > 0)
{
  caAI = WA_Residential_home_Standard;
}
else if(scC == 1 && scH == 1 && WA_Residential_Dementia > 0)
{
  caAI = WA_Residential_Dementia;
}
else
{
  caAI = 0;
}

var caAJ = "";
//=IF(AND(Scores!B59=1,Scores!H59=0,LD_Residential_home_Standard>0),LD_Residential_home_Standard,
//IF(AND(Scores!B59=1,Scores!H59=1,LD_Residential_Dementia>0),LD_Residential_Dementia,0))
if(scB == 1 && scH == 0 && LD_Residential_home_Standard > 0)
{
  caAJ = LD_Residential_home_Standard;
}
else if(scB == 1 && scH == 1 && LD_Residential_Dementia > 0)
{
  caAJ = LD_Residential_Dementia;
}
else
{
  caAJ = 0;
}

var caAK = "";
//=IF(AND(Scores!B59=2,Scores!H59=0,MH_Residential_home_Standard>0),MH_Residential_home_Standard,
//IF(AND(Scores!B59=2,Scores!H59=1,MH_Residential_Dementia>0),MH_Residential_Dementia,0))
if(scB == 2 && scH  == 0 && MH_Residential_home_Standard > 0)
{
  caAK = MH_Residential_home_Standard;
}
else if(scB == 2 && scH == 1 && MH_Residential_Dementia > 0)
{
  caAK = MH_Residential_Dementia;
}
else
{
  caAK = 0;
}

var caAL = "";
//=IF(Dynamic_Care_home=1,AA59,
//IF(AND(Dynamic_Care_home=0,Community!Q59>MAX('Care home calc'!AG59:AK59)),MAX('Care home calc'!AG59:AK59),Community!Q59))
if(Dynamic_Care_home == 1)
{
  caAL = caAA;
}
else if(Dynamic_Care_home == 0 && comQ > Math.max(caAG,caAH,caAI,caAJ,caAK))
{
  caAL = Math.max(caAG,caAH,caAI,caAJ,caAK);
}
else
{
  caAL = comQ;
}

var caAM = "";

//=IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!C59=1),Scores!H59=0,Nursing_home_value>0),Nursing_home_value,
//IF(AND(NOT(Scores!B59=1),NOT(Scores!B59=2),NOT(Scores!C59=1),Scores!H59=1,Nursing_Dementia>0),Nursing_Dementia,0))
if((scB != 1)&& (scB != 2)&& (scC != 1)&& scH == 0 && Nursing_home_value>0)
{
  caAM = Nursing_home_value;
}
else if((scB != 1)&& (scB != 2)&& (scC != 1)&& scH == 1 && Nursing_Dementia>0)
{
  caAM = Nursing_Dementia;
}
else
{
  caAM = 0;
}

var caAN = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,Scores!E59=1,Tier2_Nursing_home>0),Tier2_Nursing_home,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,Scores!E59=2,Tier3_Nursing_home>0),Tier3_Nursing_home,
//IF(AND(ModelType>=2,Scores!D59=1,Tier2_Nursing_home>0),Tier2_Nursing_home,
//IF(AND(ModelType>=2,Scores!D59=2,Tier3_Nursing_home>0),Tier3_Nursing_home,0))))
if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && scE == 1 && Tier2_Nursing_home>0)
{
  caAN = Tier2_Nursing_home;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && scE == 2 && Tier3_Nursing_home>0)
{
  caAN = Tier3_Nursing_home;
}
else if(ModelType>=2 && scD == 1 && Tier2_Nursing_home>0)
{
  caAN = Tier2_Nursing_home;
}
else if(ModelType>=2 && scD == 2 && Tier3_Nursing_home>0)
{
  caAN = Tier3_Nursing_home;
}
else
{
  caAN = 0;
}

var caAO = "";
//=IF(AND(Scores!C59=1,Scores!H59=0,WA_Nursing_home_value>0),WA_Nursing_home_value,
//IF(AND(Scores!C59=1,Scores!H59=1,WA_Nursing_Dementia>0),WA_Nursing_Dementia,0))
if(scC == 1 && scH == 0 && WA_Nursing_home_value>0)
{
  caAO = WA_Nursing_home_value;
}
else if(scC == 1 && scH == 1 && WA_Nursing_Dementia>0)
{
  caAO = WA_Nursing_Dementia;
}
else
{
  caAO = 0;
}

var caAP = "";
//=IF(AND(Scores!B59=1,Scores!H59=0,LD_Nursing_home_value>0),LD_Nursing_home_value,
//IF(AND(Scores!B59=1,Scores!H59=1,LD_Nursing_Dementia>0),LD_Nursing_Dementia,0))
if(scB == 1 && scH == 0 && LD_Nursing_home_value>0)
{
  caAP = LD_Nursing_home_value;
}
else if(scB == 1 && scH == 1 && LD_Nursing_Dementia>0)
{
  caAP = LD_Nursing_Dementia;
}
else 
{
  caAP = 0;
}

var caAQ = "";
//=IF(AND(Scores!B59=2,Scores!H59=0,MH_Nursing_home_value>0),MH_Nursing_home_value,
//IF(AND(Scores!B59=2,Scores!H59=1,MH_Nursing_Dementia>0),MH_Nursing_Dementia,0))
if(scB == 2 && scH == 0 && MH_Nursing_home_value>0)
{
  caAQ = MH_Nursing_home_value;
}
else if(scB == 2 && scH == 1 && MH_Nursing_Dementia>0)
{
  caAQ = MH_Nursing_Dementia;
}
else
{
  caAQ = 0;
}

var caAR = "";
//=IF(Dynamic_Care_home=1,AE59,
//IF(AND(Dynamic_Care_home=0,Community!Q59>MAX('Care home calc'!AM59:AQ59)),MAX('Care home calc'!AM59:AQ59),Community!Q59))
if(Dynamic_Care_home == 1)
{
  caAR = caAE;
}
else if(Dynamic_Care_home == 0 && comQ > Math.max(caAM, caAN, caAO, caAP, caAQ))
{
  caAR = Math.max(caAM, caAN, caAO, caAP, caAQ)
}
else
{
  caAR = comQ;
}

var caAS = "";
//=IF(AND(B59="Yes",'Clean data'!FW59=12), AL59,
//IF(AND(B59="Yes",'Clean data'!FW59=15), AR59,Community!Q59))
if(caB == "Yes" && clFW == 12)
{
  caAS = caAL;
}
else if(caB == "Yes" && clFW == 15)
{
  caAS = caAR;
}
else
{
  caAS = comQ;
}

var supB = "";
//=Calculator!O59*Scores!Y59
supB = calO*scY;

var supC = "";
//=IF(AND(NOT(Scores!B59=1),Supported_weekly_Background>0,OR('Clean data'!FW59=9,'Clean data'!FW59=7),'Clean data'!DJ59>5),Supported_weekly_Background,
//IF(AND(Scores!B59=1,LD_Supported_weekly_Background>0,OR('Clean data'!FW59=9,'Clean data'!FW59=7),'Clean data'!DJ59>5),LD_Supported_weekly_Background,(Scores!ER59*Scores!W59)+(Scores!ES59*Second_carer_safety_rate)+(Scores!EU59*Scores!Y59)))
if((scB != 1)&& Supported_weekly_Background>0 && (clFW == 9 || clFW == 7)&& clDJ > 5)
{
  supC = Supported_weekly_Background;
}
else if(scB == 1 && LD_Supported_weekly_Background>0 && (clFW == 9 && clFW == 7)&& clDJ > 5)
{
  supC = LD_Supported_weekly_Background;
}
else
{
  supC = (scER*scW)+(scES*Second_carer_safety_rate)+(scEU*scY);
}

var supD = "";
//=IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=1,Supported_number_reduction=2),C59*Support_two_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=1,Supported_number_reduction=3),C59*Support_three_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=1,Supported_number_reduction=4),C59*Support_four_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=1,Supported_number_reduction=5),C59*Support_five_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=1,Supported_number_reduction=6),C59*Support_six_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=0,'Clean data'!FY59=2),C59*Support_two_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=0,'Clean data'!FY59=3),C59*Support_three_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=0,'Clean data'!FY59=4),C59*Support_four_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=0,'Clean data'!FY59=5),C59*Support_five_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,SH_Default_Reduction=0,'Clean data'!FY59=6),C59*Support_six_sharing_ratio,C59))))))))))
if(clDJ>5 && clDJ<8 && SH_Default_Reduction == 1 && Supported_number_reduction == 2)
{
  supD = supC*Support_two_sharing_ratio;
}
else if(clDJ>5 && clDJ<8 && SH_Default_Reduction == 1 && Supported_number_reduction == 3)
{
  supD = supC*Support_three_sharing_ratio;
}
else if(clDJ>5 && clDJ<8 && SH_Default_Reduction == 1 && Supported_number_reduction == 4)
{
  supD = supC*Support_four_sharing_ratio;
}
else if(clDJ>5 && clDJ<8 && SH_Default_Reduction == 1 && Supported_number_reduction == 5)
{
  supD = supC*Support_five_sharing_ratio;
}
else if(clDJ>5 && clDJ<8 && SH_Default_Reduction == 1 && Supported_number_reduction == 6)
{
  supD = supC*Support_six_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && SH_Default_Reduction == 0 && clFY == 2)
{
  supD = supC *Support_two_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && SH_Default_Reduction == 0 && clFY == 3)
{
  supD = supC*Support_three_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && SH_Default_Reduction == 0 && clFY == 4)
{
  supD = supC*Support_four_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && SH_Default_Reduction == 0 && clFY == 5)
{
  supD  = supC*Support_five_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && SH_Default_Reduction == 0 && clFY == 6)
{
  supD = supC*Support_six_sharing_ratio;
}
else 
{
  supD = supC;
}

var supE = "";
//=IF(AND('Clean data'!DJ59>=6,D59>0,Scores!EJ59=0,Scores!EK59=0,Scores!EL59=0),B59,
//IF(AND('Clean data'!DJ59>=6,D59>0,Scores!BS59=1,Scores!DM59=0,Scores!DR59=0,Scores!CQ59=0,Scores!CV59=0),B59,
//IF(AND(Scores!ER59>0,'Clean data'!EE59=100,'Clean data'!EM59=100,'Clean data'!EI59>=28.6,'Clean data'!EI59<100),B59,
//IF(AND(Scores!ER59>0,Calculator!M59=0,'Clean data'!ED59=100,'Clean data'!EL59=100,'Clean data'!EH59>=28.6,'Clean data'!EH59<100),B59,
//IF(EDL_Round_Output=1,((ROUND((SUM(Scores!FA59:FD59)*4),0)/4)*Scores!Y59),(SUM(Scores!FA59:FD59)*Scores!Y59))))))
if(clDJ >= 6 && supD > 0 && scEJ == 0 && scEK == 0 && scEL == 0)
{
  supE = supB;
}
else if(clDJ >= 6 && supD > 0 && scB == 1 && scDM == 0 && scDR == 0 && scCQ == 0 && scCV == 0)
{
  supE = supB;
}
else if(scER>0 && clEE == 100 && clEM == 100 && clEI>=28.6 && clEI<100)
{
  supE = supB;
}
else if(scER>0 && calM == 0 && clED == 100 && clEL == 100 && clEH>=28.6 && clEH < 100)
{
  supE = supB;
}
else if(EDL_Round_Output == 1)
{
  supE = ((Math.round(((scFA+scFB+scFC+scFD)*4),0)/4)*scY);
}
else
{
  supE = ((scFA+scFB+scFC+scFD)*scY)
}

var supF = "";
//=IF(AND('Clean data'!DJ59>=8,Supported_24hr_addPCare=1,NOT('Clean data'!FY59=1)),D59,
//IF(AND('Clean data'!DJ59>=8,Supported_24hr_addPCare=1,'Clean data'!FY59=1),D59,
//IF(AND('Clean data'!DJ59>=8,Supported_24hr_addPCare=0),D59,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,OR(AND(NOT('Clean data'!FY59=1), SH_Default_Reduction=0),AND(SH_Default_Reduction=1,NOT(Supported_number_reduction=1)))),D59+B59,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,'Clean data'!FY59=1),D59,
//IF(B59-E59<0,D59,D59+(B59-E59)))))))
if(clDJ >= 8 && Supported_24hr_addPCare == 1 && (clFY != 1))
{
  supF = supD;
}
else if(clDJ>=8 && Supported_24hr_addPCare == 1 && clFY == 1)
{
  supF = supD;
}
else if(clDJ >=8 && Supported_24hr_addPCare == 0)
{
  supF = supD;
}
else if(clDJ>5 && clDJ<8 &&((clFY == 1) && SH_Default_Reduction == 0)|| (SH_Default_Reduction == 1 && (Supported_number_reduction != 1)))
{
  supF = supD+supB;
}
else if(clDJ > 5 && clDJ < 8 && clFY == 1)
{
  supF = supD;
}
else if(supB-supE < 0)
{
  supF = supD;
}
else
{
  supF = supD+(supB-supE);
}

var supG = "";
//=IF(AND(NOT(Scores!B59=1),Supported_weekly_Background>0,'Clean data'!DJ59>5),Supported_weekly_Background,
//IF(AND(Scores!B59=1,LD_Supported_weekly_Background>0,'Clean data'!DJ59>5),LD_Supported_weekly_Background,(Scores!EV59*Scores!W59)+(Scores!EW59*Second_carer_safety_rate)+(Scores!EX59*Scores!Y59)+(Scores!EY59*Scores!Y59)))
if((scB != 1)&& Supported_weekly_Background>0 && clDJ > 5)
{
  supG = Supported_weekly_Background;
}
else if(scB == 1 && LD_Supported_weekly_Background>0 && clDJ > 5)
{
  supG = LD_Supported_weekly_Background;
}
else
{
  supG = (scEV*scW)+(scEW*Second_carer_safety_rate)+(scEX*scY)+(scEY*scY);
}

var supH = "";
//=IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=2),G59*Support_two_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=3),G59*Support_three_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=4),G59*Support_four_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=5),G59*Support_five_sharing_ratio,
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction=6),G59*Support_six_sharing_ratio,G59)))))
if(clDJ > 5 && clDJ < 8 && Supported_number_reduction == 2)
{
  supH = supG*Support_two_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && Supported_number_reduction == 3)
{
  supH = supG*Support_three_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && Supported_number_reduction == 4)
{
  supH = supG*Support_four_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && Supported_number_reduction == 5)
{
  supH = supG*Support_five_sharing_ratio;
}
else if(clDJ > 5 && clDJ < 8 && Supported_number_reduction == 6)
{
  supH = supG*Support_six_sharing_ratio;
}
else
{
  supH = supG;
}

var supI = "";
//=IF(AND('Clean data'!DJ59>=6,H59>0, NOT('Clean data'!FE59=0.25), EDL_Round_Output=1),((ROUND(((Calculator!K59+Scores!DT59)*4),0)/4)*Scores!Y59), 
//IF(AND('Clean data'!DJ59>=6,H59>0, NOT('Clean data'!FE59=0.25)),((Calculator!K59+Scores!DT59)*Scores!Y59),
//IF(EDL_Round_Output=1, (ROUND((SUM(Scores!FA59:FD59)*4),0)/4),SUM(Scores!FA59:FD59)*Scores!Y59)))
if(clDJ >= 6 && supH > 0 && (clFE != 0.25)&& EDL_Round_Output == 1)
{
  supI = ((Math.round(((calK+scDT)*4),0)/4)*scY);
}
else if(clDJ >= 6 && supH > 0 && (clFE != 0.25))
{
  supI = ((calK+scDT)*scY);
}
else if(EDL_Round_Output == 1)
{
  supI =  (Math.round(((scFA+scFB+scFC+scFD)*4),0)/4);
}
else
{
  supI = (scFA+scFB+scFC+scFD)*scY;
}

var supJ = "";
//=IF(AND('Clean data'!DJ59>=8,Supported_24hr_addPCare=1),H59,
//IF(AND('Clean data'!DJ59>=8,Supported_24hr_addPCare=1),H59,
//IF(AND('Clean data'!DJ59>=8,Supported_24hr_addPCare=0),H59, 
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8, EDL_Round_Output=1),H59+((ROUND(((Calculator!K59+Scores!DT59)*4),0)/4)*Scores!Y59), 
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8),H59+((Calculator!K59+Scores!DT59)*Scores!Y59),
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8),H59,
//IF(((Calculator!K59+Scores!DT59)*Scores!Y59)-I59<0,H59,

//IF(EDL_Round_Output=1,(H59+((ROUND(((Calculator!K59+Scores!DT59)*4),0)/4)*Scores!Y59)-I59), H59+(((Calculator!K59+Scores!DT59)*Scores!Y59)-I59)))))))))
if(clDJ >= 8 && Supported_24hr_addPCare == 1)
{
  supJ = supH;
}
else if(clDJ >= 8 && Supported_24hr_addPCare == 1)
{
  supJ = supH;
}
else if(clDJ >= 8 && Supported_24hr_addPCare == 0)
{
  supJ = supH;
}
else if(clDJ > 5 && clDJ < 8 && EDL_Round_Output == 1)
{
  supJ = supH+((Math.round(((calK+scDT)*4),0)/4)*scY);
}
else if(clDJ > 5&& clDJ < 8)
{
  supJ = supH+((calK+scDT)*scY);
}
else if(clDJ > 5 && clDJ < 8)
{
  supJ = supH;
}
else if(((calK+scDT)*scY)-supI<0)
{
  supJ = supH;
}
else if(EDL_Round_Output == 1)
{
  supJ = (supH+((Math.round(((calK+scDT)*4),0)/4)*scY)-supI);
}
else
{
  supJ = supH+(((calK+scDT)*scY)-supI);
}

var supK = "";
//=Calculator!Z59*Scores!Y59
supK = calZ*scY;

var supL = "";
//=Calculator!Y59*Scores!Y59
supL = calY*scY;

var supM = "";
var x = scY;
//=Calculator!AB59*Scores!Y59
supM = calAB*scY;

var supN = "";
//Calculator!AA59*Scores!Y59
supN = calAA*scY;

var supO = "";
//=IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,OR('Clean data'!FW59=9,'Clean data'!FW59=7),SH_Default_Reduction=1,Supported_number_reduction>=2),(Scores!FY59+Scores!FZ59),
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,OR('Clean data'!FW59=9,'Clean data'!FW59=7),SH_Default_Reduction=0,'Clean data'!FY59>=2),(Scores!FY59+Scores!FZ59),Scores!GD59))
if(clDJ > 5 && clDJ < 8 && (clFW == 9 || clFW == 7)&& SH_Default_Reduction == 1 && Supported_number_reduction>=2)
{
  supO = (scFY+scFZ)
}
else if(clDJ > 5 && clDJ < 8 &&(clFW == 9 || clFW == 7)&& SH_Default_Reduction == 0 && clFY>=2)
{
  supO = (scFY+scFZ);
}
else
{
  supO = scGD;
}

var supP = "";
//=IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,OR('Clean data'!FW59=9,'Clean data'!FW59=7),SH_Default_Reduction=1,Supported_number_reduction>=2),(Scores!GA59+Scores!GB59),
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,OR('Clean data'!FW59=9,'Clean data'!FW59=7),SH_Default_Reduction=0,'Clean data'!FY59>=2),(Scores!GA59+Scores!GB59),
//IF(AND('Clean data'!DJ59>5,'Clean data'!DJ59<8,Supported_number_reduction>=2),(Scores!GA59+Scores!GB59),Community!N59)))
if(clDJ > 5 && clDJ < 8 && (clFW == 9 || clFW == 7)&& SH_Default_Reduction == 1 && Supported_number_reduction>=2)
{
  supP = (scGA+scGB);
}
else if(clDJ > 5 && clDJ <8 && (clFW == 9 || clFW == 7) && SH_Default_Reduction == 0 && clFY >=2)
{
  supP = (scGA+scGB)
}
else if(clDJ>5 && clDJ<8 && Supported_number_reduction>=2)
{
  supP = (scGA+scGB);
}
else
{
  supP = comN;
}

var supQ = "";
//=IF(AND(SH_Default_Reduction=1,'Clean data'!DK59>=5,Supported_number_reduction=2),(Scores!GL59*Support_two_sharing_ratio),
//IF(AND(SH_Default_Reduction=1,'Clean data'!DK59>=5,Supported_number_reduction=3),(Scores!GL59*Support_three_sharing_ratio),
//IF(AND(SH_Default_Reduction=1,'Clean data'!DK59>=5,Supported_number_reduction=4),(Scores!GL59*Support_four_sharing_ratio),
//IF(AND(SH_Default_Reduction=1,'Clean data'!DK59>=5,Supported_number_reduction=5),(Scores!GL59*Support_five_sharing_ratio),
//IF(AND(SH_Default_Reduction=1,'Clean data'!DK59>=5,Supported_number_reduction=6),(Scores!GL59*Support_six_sharing_ratio),
//IF(AND(SH_Default_Reduction=0,'Clean data'!DK59>=5,'Clean data'!FY59=2),(Scores!GL59*Support_two_sharing_ratio),
//IF(AND(SH_Default_Reduction=0,'Clean data'!DK59>=5,'Clean data'!FY59=3),(Scores!GL59*Support_three_sharing_ratio),
//IF(AND(SH_Default_Reduction=0,'Clean data'!DK59>=5,'Clean data'!FY59=4),(Scores!GL59*Support_four_sharing_ratio),
//IF(AND(SH_Default_Reduction=0,'Clean data'!DK59>=5,'Clean data'!FY59=5),(Scores!GL59*Support_five_sharing_ratio),
//IF(AND(SH_Default_Reduction=0,'Clean data'!DK59>=5,'Clean data'!FY59=6),(Scores!GL59*Support_six_sharing_ratio),
//IF(AND('Clean data'!DK59>=5,Supported_number_reduction=2),(Scores!GL59*Support_two_sharing_ratio),
//IF(AND('Clean data'!DK59>=5,Supported_number_reduction=3),(Scores!GL59*Support_three_sharing_ratio),
//IF(AND('Clean data'!DK59>=5,Supported_number_reduction=4),(Scores!GL59*Support_four_sharing_ratio),
//IF(AND('Clean data'!DK59>=5,Supported_number_reduction=5),(Scores!GL59*Support_five_sharing_ratio),

//IF(AND('Clean data'!DK59>=5,Supported_number_reduction=6),(Scores!GL59*Support_six_sharing_ratio),Scores!GL59)))))))))))))))
if(SH_Default_Reduction == 1 && clDK>=5 && Supported_number_reduction == 2)
{
  supQ = (scGL*Support_two_sharing_ratio);
}
else if(SH_Default_Reduction == 1 && clDK>=5 && Supported_number_reduction == 3)
{
  supQ = (scGL*Support_three_sharing_ratio);
}
else if(SH_Default_Reduction == 1 && clDK>=5 && Supported_number_reduction == 4)
{
  supQ = (scGL*Support_four_sharing_ratio);
}
else if(SH_Default_Reduction == 1 && clDK >=5 && Supported_number_reduction == 5)
{
  supQ = (scGL*Support_five_sharing_ratio);
}
else if(SH_Default_Reduction == 1 && clDK >=5 && Supported_number_reduction == 6)
{
  supQ = (scGL*Support_six_sharing_ratio);
}
else if(SH_Default_Reduction == 0 && clDK >=5 && clFY == 2)
{
  supQ = (scGL*Support_two_sharing_ratio);
}
else if(SH_Default_Reduction == 0 && clDK >=5 && clFY == 3)
{
  supQ = (scGL*Support_three_sharing_ratio);
}
else if(SH_Default_Reduction == 0 && clDK>=5 && clFY == 4)
{
  supQ = (scGL*Support_four_sharing_ratio);
}
else if(SH_Default_Reduction == 0 && clDK >=5 && clFY == 5)
{
  supQ = (scGL*Support_five_sharing_ratio);
}
else if(SH_Default_Reduction == 0 && clDK >=5 && clFY == 6)
{
  supQ = (scGL*Support_six_sharing_ratio);
}
else if(clDK >=5 && Supported_number_reduction == 2)
{
  supQ = (scGL*Support_two_sharing_ratio);
}
else if(clDK >=5 && Supported_number_reduction == 3)
{
  supQ = (scGL*Support_three_sharing_ratio)
}
else if(clDK >=5 && Supported_number_reduction == 4)
{
  supQ = (scGL*Support_four_sharing_ratio);
}
else if(clDK>=5 && Supported_number_reduction == 5)
{
  supQ = (scGL*Support_five_sharing_ratio);
}
else if(clDK >=5 && Supported_number_reduction == 6)
{
  supQ = (scGL*Support_six_sharing_ratio);
}
else
{
  supQ = scGL;
}

var supR = "";
//=IF('Clean data'!DK59=1,Scores!GL59*7,
//IF('Clean data'!DK59=2,(Scores!GL59*7)*2,
//IF('Clean data'!DK59=3,(Scores!GL59*7)*3,
//IF(Q59>0,Q59*7, Scores!GL59*7))))
if(clDK == 1)
{
  supR = scGL*7;
}
else if(clDK == 2)
{
  supR = (scGL*7)*2;
}
else if(clDK == 3)
{
  supR = (scGL*7)*3;
}
else if(supQ > 0)
{
  supR = supQ*7;
}
else
{
  supR = scGL*7;
}

var supS = "";
//=IF(Scores!GI59=0,R59,(1-Scores!GI59)*R59)
if(scGI == 0)
{
  supS = supR;
}
else
{
  supS = (1-scGI)*supR;
}

var supT = "";
//=IF(OR('Clean data'!FW59=7,'Clean data'!FW59=9),F59+K59+M59+O59+S59,Community!Q59)
if(clFW == 7 || clFW == 9)
{
  supT = supF+supK+supM+supO+supS;
}
else
{
  supT = comQ;
}

var supU = "";
//=IF(AND(ModelType<=2,Scores!I59=0),"Does not apply",
//IF(AND('Clean data'!DJ59<6, 'Clean data'!DK59<5),"Does not apply",N59+L59+R59+P59+J59))
if(ModelType<=2 && scI == 0)
{
  supU = "Does not apply";
}
else if(clDJ < 6 && clDK < 5)
{
  supU = "Does not apply";
}
else
{
  supU = supN+supL+supR+supP+supJ;
}

var oalB = "";
//=Calculator!O59*Scores!X59
{
  oalB = calO*scX;
}

var oalC = "";
//=IF(AND(OUT_DSTNeedsProfile=1, Scores!E59=0,PA_Homecare_rate>0),(Scores!ER59*Scores!W59)+(Scores!ES59*Second_carer_safety_rate)+(Scores!EU59*PA_Homecare_rate),
//IF(AND(Scores!D59=0,PA_Homecare_rate>0),(Scores!ER59*Scores!W59)+(Scores!ES59*Second_carer_safety_rate)+(Scores!EU59*PA_Homecare_rate),(Scores!ER59*Scores!W59)+(Scores!ES59*Second_carer_safety_rate)+(Scores!EU59*Scores!X59)))
if(OUT_DSTNeedsProfile == 1 && scE == 0 && PA_Homecare_rate>0)
{
  oalC = (scER*scW)+(scES*Second_carer_safety_rate)+(scEU*PA_Homecare_rate);
}
else if(scD == 0 && PA_Homecare_rate>0)
{
  oalC = (scER*scW)+(scES*Second_carer_safety_rate)+(scEU*PA_Homecare_rate);
}
else
{
  oalC = (scER*scW)+(scES*Second_carer_safety_rate)+(scEU*scX);
}

var oalD = "";
//=IF(AND('Clean data'!DJ59>=6,C59>0,Scores!EJ59=0,Scores!EK59=0,Scores!EL59=0),B59,
//IF(AND('Clean data'!DJ59>=6,C59>0,Scores!BS59=1,Scores!DM59=0,Scores!DR59=0,Scores!CQ59=0,Scores!CV59=0),B59,
//IF(AND(Scores!ER59>0,'Clean data'!EE59=100,'Clean data'!EM59=100,'Clean data'!EI59>=28.6,'Clean data'!EI59<100),B59,
//IF(AND(Scores!ER59>0,Calculator!M59=0,'Clean data'!ED59=100,'Clean data'!EL59=100,'Clean data'!EH59>=28.6,'Clean data'!EH59<100),B59,
//IF(EDL_Round_Output=1,((ROUND((SUM(Scores!FA59:FD59)*4),0)/4)*Scores!X59),(SUM(Scores!FA59:FD59)*Scores!X59))))))
if(clDJ >= 6 && oalC > 0 && scEJ == 0 && scEK == 0 && scEL == 0)
{
  oalD = oalB;
}
else if(clDJ>=6 && oalC>0 && scBS == 1 && scDM == 0 && scDR == 0 && scCQ == 0 && scCV == 0)
{
  oalD = oalB;
}
else if(scER > 0 && clEE == 100 && clEM == 100 && clEI >= 28.6 && clEI < 100)
{
  oalD = oalB;
}
else if(scER > 0 && calM == 0 && clED == 100 && clEL == 100 && clEH>=28.6 && clEH<100)
{
  oalD = oalB;
}
else if(EDL_Round_Output == 1)
{
  oalD = ((Math.round(((scFA+scFB+scFC+scFD)*4),0)/4)*scX);
}
else
{
  oalD = ((scFA+scFB+scFC+scFD)*scX);
}

var oalE = "";
//=IF(B59-D59<0,C59,C59+(B59-D59))
if(oalB - oalD < 0)
{
  oalE = oalC;
}
else
{
  oalE = oalC+(oalB-oalD);
}

var oalF = "";
//=(Scores!EV59*Scores!W59)+(Scores!EW59*Second_carer_safety_rate)+(Scores!EX59*Scores!X59)+(Scores!EY59*Scores!X59)
oalF = (scEV*scW)+(scEW*Second_carer_safety_rate)+(scEX*scX)+(scEY*scX);

var oalG = "";
//=IF(AND('Clean data'!DJ59>=6,F59>0,NOT('Clean data'!FE59=0.25),EDL_Round_Output=1),((ROUND(((Calculator!K59+Scores!DT59)*4),0)/4)*Scores!X59),
//IF(AND('Clean data'!DJ59>=6,F59>0,NOT('Clean data'!FE59=0.25)),((Calculator!K59+Scores!DT59)*Scores!X59),
//IF(EDL_Round_Output=1,((ROUND((SUM(Scores!FA59:FD59)*4),0)/4)*Scores!X59),SUM(Scores!FA59:FD59)*Scores!X59)))
if(clDJ>=6 && oalF>0 && (clFE!=0.25) && EDL_Round_Output == 1)
{
  oalG = ((Math.round((calK+scDT)*4),0)/4)*scX;
}
else if(clDJ>=6 && oalF > 0 && (clFE == 0.25))
{
 oalG = (calK+scDT)*scX;
}
else if(EDL_Round_Output == 1)
{
  oalG = ((Math.round(((scFA+scFB+scFC+scFD)*4),0)/4)*scX);
}
else
{
  oalG = (scFA+scFB+scFC+scFD)*scX;
}

var oalH = "";
//=IF(((Calculator!K59+Scores!DT59)*Scores!X59)-G59<0,F59,
//IF(EDL_Round_Output=1, (F59+((ROUND((Calculator!K59+Scores!DT59)*4,0)/4)*Scores!X59)-G59),F59+(((Calculator!K59+Scores!DT59)*Scores!X59)-G59)))
if(((calK+scDT)*scX)-oalG < 0)
{
  oalH = oalF;
}
else if(EDL_Round_Output == 1)
{
  oalH = (oalF+((Math.round((calK+scDT)*4,0)/4)*scX)-oalG);
}
else
{
  oalH = oalF+(((calK+scDT)*scX)-oalG);
}

var oalI = "";
//=Calculator!Z59*Scores!X59
oalI = calZ*scX;

var oalJ = "";
//=Calculator!Y59*Scores!X59
oalJ = calY*scX;

var oalK = "";
//=Calculator!AB59*Scores!X59
oalK = calAB*scX;

var oalL = "";
//=Calculator!AA59*Scores!X59
oalL = calAA*scX;

var oalM = "";
//=Community!M59
oalM = comM;

var oalN = "";
//=Community!N59
oalN = comN;

var oalO = "";
//=Community!O59
oalO = comO;

var oalP = "";
//=Community!P59
oalP = comP;

var oalQ = "";
//=IF('Clean data'!FW59=9.5,E59+I59+K59+M59+O59, Community!Q59)
if(clFW == 9.5)
{
  oalQ = oalE+oalI+oalK+oalM+oalO;
}
else
{
  oalQ = comQ;
}
 
var oalR = "";
//=H59+J59+L59+N59+P59
oalR = oalH + oalJ + oalL + oalN + oalP;

var oalS = "";
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,Scores!E59=2),Enhc_Tier3_Live_in_cap,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,Scores!E59=1),Enhc_Tier2_Live_in_cap,
//IF(AND(ModelType>=2,Scores!D59=2),Enhc_Tier3_Live_in_cap,
//IF(AND(ModelType>=2,Scores!D59=1),Enhc_Tier2_Live_in_cap,
//IF(Scores!B59=1,LD_Live_in_cap,Live_in_cap)))))
if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && scE == 2)
{
  oalS = Enhc_Tier3_Live_in_cap;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && scE == 1)
{
  oalS = Enhc_Tier2_Live_in_cap;
}
else if(ModelType>=2 && scD == 2)
{
  oalS = Enhc_Tier3_Live_in_cap;
}
else if(ModelType>=2 && scD == 1)
{
  oalS = Enhc_Tier2_Live_in_cap;
}
else if(scB == 1)
{
  oalS = LD_Live_in_cap;
}
else
{
  oalS = Live_in_cap;
}

var oalT = "";
//=IF(AND('Clean data'!FW59=3,Live_in_Carer_Allocation=1,OR(AND(ModelType<=2,Live_in_cap=0,LD_Live_in_cap=0),AND(ModelType=3,Enhc_Tier2_Live_in_cap=0,Enhc_Tier3_Live_in_cap=0))),Community!Q59,
//IF(AND(OUT_DSTNeedsProfile=1,NOT(Scores!B59=1),NOT(Scores!E59>=1),'Clean data'!FW59=3,Community!Q59>S59),S59,
//IF(AND(NOT(Scores!B59=1),NOT(Scores!D59>=1),'Clean data'!FW59=3,Community!Q59>S59),S59,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=2,'Clean data'!FW59=3,Community!Q59>S59),S59,
//IF(AND(Scores!D59=2,'Clean data'!FW59=3,Community!Q59>S59),S59,
//IF(AND(OUT_DSTNeedsProfile=1,Scores!E59=1,'Clean data'!FW59=3,Community!Q59>S59),S59,
//IF(AND(Scores!D59=1,'Clean data'!FW59=3,Community!Q59>S59),S59,
//IF(AND(OUT_DSTNeedsProfile=1,NOT(Scores!E59>=1),Scores!B59=1,'Clean data'!FW59=3,Community!Q59>S59),S59,
//IF(AND(NOT(Scores!D59>=1),Scores!B59=1,'Clean data'!FW59=3,Community!Q59>S59),S59,Community!Q59)))))))))
if(clFW == 3 && Live_in_Carer_Allocation == 1 && (ModelType<=2 && Live_in_cap == 0 && LD_Live_in_cap == 0)|| ModelType == 3 && Enhc_Tier2_Live_in_cap == 0 && Enhc_Tier3_Live_in_cap == 0)
{
  oalT = comQ;
}
else if(OUT_DSTNeedsProfile == 1 && (scB !=1) && (scE < 1) && clFW == 3 && comQ>comS)
{
  oalT = oalS;
}
else if(((scB == 1) && (scD < 1) && clFW == 3 && comQ > comS))
{
  oalT = oalS;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 2 && clFW == 3 &&comQ>comS)
{
  oalT = oalS;
}
else if(scD == 2 && clFW == 3 && comQ>comS)
{
  oalT = oalS;
}
else if(OUT_DSTNeedsProfile == 1 && scE == 1 && clFW == 3 && comQ>comS)
{
  oalT = oalS;
}
else if(scD == 1 && clFW == 3 && comQ>comS)
{
  oalT = oalS;
}
else if(OUT_DSTNeedsProfile == 1 && (scE < 1) && scB == 1 && clFW == 3 && comQ>comS)
{
  oalT = oalS;
}
else if((scD < 1) && scB == 1 && clFW == 3 && comQ>comS)
{
  oalT = oalS;
}
else
{
  oalT = comQ;
}

var oalU = "";
//=IF(AND('Clean data'!FW59=3,Live_in_Carer_Allocation=1,T59<Community!Q59,'Clean data'!DJ59=9,'Clean data'!DK59=7,'Clean data'!EP59=0),T59*2,
//IF(AND('Clean data'!FW59=3,Live_in_Carer_Allocation=1,T59<Community!Q59),T59+Community!I59,T59))
if(clFW == 3 && Live_in_Carer_Allocation == 1 && oalT<comQ && clDJ == 9 && clDK == 7 && clE == 0)
{
  oalU = oalT*2;
}
else if(clFW == 3 && Live_in_Carer_Allocation == 1 && oalT < comQ)
{
  oalU = oalT+comI;
}
else
{
  oalU = oalT;
}

var oalV = "";
//=IF(AND(ModelType<=2,Scores!I59=0),"Does not apply",
//IF(Live_in_Carer_Allocation=0,"Does not apply",
//IF(AND(Live_in_Carer_Allocation=1,OR(AND(ModelType<=2,Live_in_cap=0,LD_Live_in_cap=0),AND(ModelType=3,Enhc_Tier2_Live_in_cap=0,Enhc_Tier3_Live_in_cap=0))),"Does not apply",
//IF(Community!R59<S59,"Does not apply",
//IF(AND(Live_in_Carer_Allocation=1,S59<Community!R59,'Clean data'!DJ59=9,'Clean data'!DK59=7,'Clean data'!EP59=0),S59*2,
//IF(AND(Live_in_Carer_Allocation=1,S59<Community!R59),S59+Community!J59,S59))))))
if(ModelType<=2 && scI == 0)
{
  oalV = "Does not apply";
}
else if(Live_in_Carer_Allocation == 0)
{
  oalV = "Does not apply";
}
else if(Live_in_Carer_Allocation == 1 &&(ModelType<=2 && Live_in_cap == 0 && LD_Live_in_cap == 0)|| (ModelType == 3 && Enhc_Tier2_Live_in_cap == 0 && Enhc_Tier3_Live_in_cap == 0))
{
  oalV = "Does not apply";
}
else if(comR < oalS)
{
  oalV = "Does not apply";
}
else if(Live_in_Carer_Allocation == 1 && oalS<comR && clDJ == 9 && clDK == 7 && clEP == 0)
{
  oalV = oalS*2;
}
else if(Live_in_Carer_Allocation == 1 && oalS<comR)
{
  oalV = oalS+comJ;
}
else
{
  oalV = oalS;
}

var oalW = "";
//=IF(AND('Clean data'!AV59>=3,'Clean data'!AX59>=3,'Clean data'!BA59>=3,'Clean data'!BC59>=3,'Clean data'!BI59>=3,'Clean data'!DK59>=1),10,
//IF(AND('Clean data'!AV59>=3,'Clean data'!AX59>=3,'Clean data'!BA59>=3,'Clean data'!BC59>=3,'Clean data'!BI59>=3),8,
//IF(OR(AND('Clean data'!AV59>0,'Clean data'!AV59<=2),AND('Clean data'!AX59>0,'Clean data'!AX59<=2),AND('Clean data'!BA59>0,'Clean data'!BA59<=2),AND('Clean data'!BC59>0,'Clean data'!BC59<=2),AND('Clean data'!BI59>0,'Clean data'!BI59<=2)),6,0)))
if(clAV>=3 && clAX>=3 && clBA>=3 && clBC>=3 && clBI>=3 && clDK>=1)
{
  oalW = 10;
}
else if(clAV>=3 && clAX>=3 && clBA>=3 && clBC>=3 && clBI>=3)
{
  oalW = 8;
}
else if((clAV > 0 && clAV<=2)|| (clAX > 0 && clAX<=2)|| (clBA>0 && clBA<=2)|| (clBC>0 && clBC<=2)|| (clBI>0 && clBI<=2))
{
  oalW = 6;
}
else
{
  oalW = 0;
}

var oalX = "";
//=IF(AND('Clean data'!DJ59>=6,'Clean data'!DK59>=5,'Clean data'!DA59>=2),10,
//IF(OR('Clean data'!DJ59>=6,AND('Clean data'!DK59>0, 'Clean data'!DK59<=5)),8,
//IF(AND('Clean data'!DJ59>=2,'Clean data'!DJ59<=4),6, 0)))
if(clDJ>=6 && clDK>=5 && clDA>=2)
{
  oalX = 10;
}
else if((clDJ >= 6)|| (clDK > 0 && clDK <=5))
{
  oalX = 8;
}
else if(clDJ >= 2 && clDJ<=4)
{
  oalX = 6;
}
else
{
  oalX = 0;
}

var oalY = "";
//=IF(OR('Clean data'!AN59>=3, 'Clean data'!AR59>=1,'Clean data'!AS59=1,'Clean data'!AQ59=1),10,
//IF(AND('Clean data'!AN59>=2,NOT('Clean data'!AS59>=1),NOT('Clean data'!AQ59=1)),8,
//IF('Clean data'!AN59>=2,6,0)))
if(clAN>=3 || clAR>=1 || clAS == 1 || clAQ == 1)
{
  oalY = 10;
}
else if(clAN>=2 && (clAS<1) && (clAQ !=1))
{
  oalY = 8;
}
else if(clAN >= 2)
{
  oalY = 6;
}
else
{
  oalY = 0;
}

var oalZ = "";
//=IF(OR(AND('Clean data'!AJ59>=3,'Clean data'!AL59>=21,'Clean data'!J59>=3), AND('Clean data'!AJ59>=3,'Clean data'!AL59>21), AND('Clean data'!AJ59>=3,'Clean data'!AL59>=21,'Clean data'!AT59>=1)),10,
//IF(AND('Clean data'!AJ59>=3,'Clean data'!AL59>=21),8,
//IF(AND('Clean data'!AJ59>0,'Clean data'!AJ59<=3,'Clean data'!AL59>0,'Clean data'!AL59<21),6,0)))
if((clAJ>=3 && clAL>=21 && clJ>=3)|| (clAJ>=3 && clAL>21)|| (clAJ>=3 && clAL>=21 && clAT>=1))
{
  oalZ = 10;
}
else if(clAJ>=3 && clAL>=21)
{
  oalZ = 8;
}
else if(clAJ>0 && clAJ<=3 && clAL>0 && clAL<21)
{
  oalZ = 6;
}
else
{
  oalZ = 0;
}

var oalAA = "";
//=IF(AND('Clean data'!AI59>=4,'Clean data'!AE59>=4),10,
//IF(AND('Clean data'!AE59>=3,'Clean data'!AI59>=3),8,
//IF(AND('Clean data'!AI59>=2,'Clean data'!AE59<=2),6,0)))
if(clAI>=4 && clAE>=4)
{
  oalAA = 10;
}
else if(clAE>=3 && clAI>=3)
{
  oalAA = 8;
}
else if(clAI>=2 && clAE<=2)
{
  oalAA = 6;
}
else
{
  oalAA = 0;
}

var oalAB = "";
//=IF(AND('Clean data'!AI59>=3,'Clean data'!AG59=1,'Clean data'!AF59=1),10,
//IF(AND('Clean data'!AI59>0,'Clean data'!AG59=1,'Clean data'!AF59=1),8,
//IF(AND('Clean data'!AG59=1,'Clean data'!AF59=1),6,0)))
if(clAI >= 3 && clAG == 1 && clAF == 1)
{
  oalAB = 10;
}
else if(clAI>0 && clAG == 1 && clAF == 1)
{
  oalAB = 8;
}
else if(clAG == 1 && clAF == 1)
{
  oalAB = 6;
}
else
{
  oalAB = 0;
}

var oalAC = "";
//=IF(AND('Clean data'!CE59>=3,'Clean data'!CG59>=21, 'Clean data'!M59=1),10,
//IF(AND('Clean data'!CE59>2,'Clean data'!CG59>=14, 'Clean data'!M59=1),8,
//IF(AND('Clean data'!CE59>0, 'Clean data'!CE59<=2,'Clean data'!CG59<=14, 'Clean data'!M59=1),6,0)))
if(clCE>=3 && clCG>=21 && clM == 1)
{
  oalAC = 10;
}
else if(clCE>2 && clCG>=14 &&  clM == 1)
{
  oalAC = 8;
}
else if(clCE>0 && clCE<=2 && clCG<=14 && clM == 1)
{
  oalAC = 6;
}
else
{
  oalAC = 0;
}

var oalAD = "";
//=IF('Clean data'!DC59>=3,10,
//IF('Clean data'!DC59>=2,8,
//IF(AND('Clean data'!DC59>0,'Clean data'!DC59<=1),6,0)))
if(clDC >= 3)
{
  oalAD = 10;
}
else if(clDC >= 2)
{
  oalAD = 8;
}
else if(clDC > 0 && clDC<=1)
{
  oalAD = 6;
}
else
{
  oalAD = 0;
}

var oalAE = "";
//=IF('Clean data'!DA59>=3,10,
//IF('Clean data'!DA59>=2,8,
//IF(AND('Clean data'!DA59>0,'Clean data'!DA59<=1),6,0)))
if(clDA >= 3)
{
  oalAE = 10;
}
else if(clDA >= 2)
{
  oalAE = 8;
}
else if(clDA > 0 && clDA <=1)
{
  oalAE = 6;
}
else
{
  oalAE = 0;
}

var oalAF = "";
//=IF(AND('Clean data'!DA59>=3,'Clean data'!DJ59>=6),10,
//IF(AND('Clean data'!DA59>=2,'Clean data'!DJ59<6),8,
//IF(AND('Clean data'!DA59<=2,'Clean data'!DJ59<=4,'Clean data'!DA59>0,'Clean data'!DJ59>0),6,0)))
if(clDA >= 3 && clDJ >= 6)
{
  oalAF = 10;
}
else if(clDA >= 2 && clDJ < 6)
{
  oalAF = 8;
}
else if(clDA<=2 && clDJ<=4 && clDA>0 && clDJ>0)
{
  oalAF = 6;
}
else
{
  oalAF = 0;
}

var oalAG = "";
//=IF(AND('Clean data'!O59>=3, 'Clean data'!Q59>=1),10,
//IF(AND('Clean data'!O59>=2,'Clean data'!Q59>=1),8,
//IF(AND('Clean data'!O59>0,'Clean data'!O59<=2,'Clean data'!Q59>0,'Clean data'!Q59<=1),6,0)))
if(clO >=3 && clQ >= 1)
{
  oalAG = 10;
}
else if(clO>=2 && clQ>=1)
{
  oalAG = 8;
}
else if(clO > 0 && clO<=2 && clQ > 0 && clQ <=1)
{
  oalAG = 6;
}
else
{
  oalAG = 0;
}

var oalAH = "";
//=IF('Clean data'!J59>=3,10,
//IF('Clean data'!J59>=2,8,
//IF(AND('Clean data'!J59>0,'Clean data'!J59<=1),6,0)))
if(clJ >= 3)
{
  oalAH = 10;
}
else if(clJ >= 2)
{
  oalAH = 8;
}
else if(clJ > 0 && clJ<=1)
{
  oalAH = 6;
}
else
{
  oalAH = 0;
}


var oalAI = "";
//=IF(AND('Clean data'!V59>=3, 'Clean data'!X59>=5), 10,
//IF(AND('Clean data'!V59>=2, 'Clean data'!X59<=5),8,
//IF(AND('Clean data'!V59>0, 'Clean data'!V59<=2, 'Clean data'!X59>0, 'Clean data'!X59<2),6,0)))
if(clV >= 3 && clX >= 5)
{
  oalAI = 10;
}
else if(clV >= 2 && clX <= 5)
{
  oalAI = 8;
}
else if(clV > 0 && clV <=2 && clX > 0 && clX < 2)
{
  oalAI = 6;
}
else
{
  oalAI = 0;
}

var oalAJ = "";
//=IF(OR(AND('Clean data'!M59=1,'Clean data'!O59>=1), AND('Clean data'!M59=1,'Clean data'!O59>=1,'Clean data'!V59>=1)),10,
//IF(OR('Clean data'!M59=1,'Clean data'!O59>=1,'Clean data'!V59>=1),8,
//IF('Clean data'!M59=1,6,0)))
if((clM == 1 && clO >=1)|| (clM == 1 && clO>=1 && clV>=1))
{
  oalAJ = 10;
}
else if(clM == 1 || clO >=1 || clV>=1)
{
  oalAJ = 8;
}
else if(clM == 1)
{
  oalAJ = 6;
}
else
{
  oalAJ = 0;
}

var oalAK = "";
//=SUM(W59:AJ59)
oalAK = oalW + oalX + oalY + oalZ + oalAA + oalAB + oalAC + oalAD + oalAE + oalAF + oalAG + oalAH + oalAI + oalAJ;

var oalAL = "";
//=IF(AK59>=126,4,
//IF(AND(AK59>=98,AK59<=125),3,
//IF(AND(AK59>=70,AK59<=97),2,1)))
if(oalAK >= 126)
{
  oalAL = 4;
}
else if(oalAK >= 98 && oalAK <= 125)
{
  oalAL = 3;
}
else if(oalAK >= 70 && oalAK <= 97)
{
  oalAL = 2;
}
else
{
  oalAL = 1;
}

var oalAM = "";
//=IF(AL59=4,SharedLives_Band_4, 
//IF(AL59=3,SharedLives_Band_3, 
//IF(AL59=2, SharedLives_Band_2, SharedLives_Band_1)))
if(oalAL == 4)
{
  oalAM = SharedLives_Band_4;
}
else if(oalAL == 3)
{
  oalAM = SharedLives_Band_3;
}
else if(oalAL == 2)
{
  oalAM = SharedLives_Band_2;
}
else
{
  oalAM = SharedLives_Band_1;
}

var oalAN = "";
//=IF(AND(Shared_lives_addition=1,'Clean data'!FW59=10,Community!Q59>AM59),AM59+Scores!FP59,
//IF(AND('Clean data'!FW59=10,Community!Q59>AM59),AM59,Community!Q59))
if(Shared_lives_addition == 1 && clFW == 10 && comQ > oalAM)
{
  oalAN = oalAM+scFP;
}
else if(clFW == 10 && comQ > oalAM)
{
  oalAN = oalAM;
}
else
{
  oalAN = comQ
}

var oalAO = "";
//=IF(AND(ModelType<=2,Scores!I59=0),"Does not apply",
//IF(Shared_Lives_Allocation=0,"Does not apply",
//IF(Community!R59<AM59,"Does not apply",
//IF(AND(Shared_lives_addition=1,AM59<Community!R59),AM59+Scores!FP59,
//IF(Community!R59>AM59,AM59,Community!R59)))))
if(ModelType<=2 && scI == 0)
{
  oalAO = "Does not apply";
}
else if(Shared_Lives_Allocation == 0)
{
  oalAO = "Does not apply";
}
else if(comR < oalAM)
{
  oalAO = "Does not apply";
}
else if(Shared_lives_addition == 1 && oalAM<comR)
{
  oalAO = oalAM + scFP;
}
else if(comR > oalAM)
{
  oalAO = oalAM;
}
else
{
  oalAO = comR;
}

var calB = "";
//=Scores!AV59+Scores!AW59
calB = scAV+scAW;

var calC = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GF59=4),Calculator!B59*Mobility_DST_Severe,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GF59=3),Calculator!B59*TransfersMajorAdj,
//IF(OR(AND('Clean data'!BW59>=3,'Clean data'!BQ59>=2),'Clean data'!BX59=1,'Clean data'!BV59=2),Calculator!B59*TransfersMajorAdj,
//IF('Clean data'!BV59=1,Calculator!B59*TransfersMinorAdj,B59))))
if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGF == 4)
{
  calC = calB*Mobility_DST_Severe;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGF == 3)
{
  calC = calB*TransfersMajorAdj;
}
else if((clBW >=3 && clBQ>=2)|| clBX == 1 || clBV == 2)
{
  calC = calB*TransfersMajorAdj;
}
else if(clBV == 1)
{
  calC = calB*TransfersMinorAdj;
}
else
{
  calC = calB;
}

var calD = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GH59=3),C59*Engagement_VerySevere,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GI59=4),C59*Memory_VerySevere,
//IF('Clean data'!H59=4,C59*Sensory_VerySevere,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GH59=2),C59*Engagement_Severe,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GI59=3),C59*Memory_Severe,
//IF('Clean data'!H59=3,C59*Sensory_Severe,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GH59=1),C59*Engagement_Moderate,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GI59=2),C59*Memory_Moderate,
//IF('Clean data'!DH59=4,C59*Engagement_VerySevere,
//IF('Clean data'!CY59=4,C59*Memory_VerySevere,
//IF('Clean data'!DH59=3,C59*Engagement_Severe,
//IF('Clean data'!CY59=3,C59*Memory_Severe,
//IF('Clean data'!DH59=2,C59*Engagement_Moderate,
//IF('Clean data'!CY59=2,C59*Memory_Moderate,

//IF('Clean data'!H59=2,C59*Sensory_Moderate,C59)))))))))))))))
if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGH == 3)
{
  calD = calC*Engagement_VerySevere;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGI == 4)
{
  calD = calC*Memory_VerySevere;
}
else if(clH == 4)
{
  calD = calC*Sensory_VerySevere;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGH == 2)
{
  calD = calC*Engagement_Severe
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGI == 3)
{
  calD = calC*Memory_Severe;
}
else if(clH == 3)
{
  calD = calC*Sensory_Severe;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGH == 1)
{
  calD = calC*Engagement_Moderate;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGH == 2)
{
  calD = calC*Memory_Moderate;
}
else if(clDH == 4)
{
  calD = calC*Engagement_VerySevere;
}
else if(clCY == 4)
{
  calD = calC*Memory_VerySevere;
}
else if(clDH == 3)
{
  calD = calC*Engagement_Severe;
}
else if(clCY == 3)
{
  calD = calC*Memory_Severe;
}
else if(clDH == 2)
{
  calD = calC*Engagement_Moderate;
}
else if(clCY == 2)
{
  calD = calC*Memory_Moderate;
}
else if(clH == 2)
{
  calD = calC*Sensory_Moderate;
}
else 
{
  calD = calC;
}

var calE = "";
//=IF(ModelType<=2,D59, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GB59>=4),D59*Breathing_Severe, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GB59=3),D59*Breathing_Significant, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GB59=2),D59*Breathing_Mild, 
//IF(AND(ModelType>2,'Clean data'!CR59=4),D59*Breathing_Severe, 
//IF(AND(ModelType>2,'Clean data'!CR59=3),D59*Breathing_Significant, 
//IF(AND(ModelType>2,'Clean data'!CR59=2),D59*Breathing_Mild,D59)))))))
if(ModelType<=2)
{
  calE = calD;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGB>=4)
{
  calE  = calD*Breathing_Severe;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGB == 3)
{
  calE = clAD*Breathing_Significant;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGB == 2)
{
  calE = calD*Breathing_Mild;
}
else if(ModelType>2 && clCR == 4)
{
  calE = calD*Breathing_Severe;
}
else if(ModelType>2 && clCR == 3)
{
  calE = calD*Breathing_Significant;
}
else if(ModelType>2 && clCR == 2)
{
  calE = calD*Breathing_Mild;
}
else
{
  calE = calD;
}

var calF = "";
//=IF(ModelType<=2,E59, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GK59>=4),E59*Pain_Severe, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GK59=3),E59*Pain_Moderate, 
//IF(AND(ModelType>2,'Clean data'!CK59=1,'Clean data'!CI59=2),E59*Pain_Severe, 
//IF(AND(ModelType>2,'Clean data'!CK59=1,'Clean data'!CI59=1),E59*Pain_Moderate,E59)))))
if(ModelType <= 2)
{
  calF = calE;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGK>=4)
{
  calF = calE*Pain_Severe;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGK == 3)
{
  calF = calE*Pain_Moderate;
}
else if(ModelType>2 && clCK == 1 && clCI == 2)
{
  calF = calE*Pain_Severe;
}
else if(ModelType>2 && clCK == 1 && clCI == 1)
{
  calF = calE*Pain_Moderate;
}
else
{
  calF = calE;
}

var calG ="";
//=(F59-B59)/7
calG = (calF - calB)/7;

var calH = "";
//=IF(G59>=1.875, 2, 
//IF(AND(G59>1.75, G59<1.875), 1.75, 
//IF(G59>=1.625, 1.75, 
//IF(AND(G59>1.5, G59<1.625), 1.5, 
//IF(G59>=1.375,1.5,
//IF(AND(G59>1.25,G59<1.375),1.25,
//IF(G59>=1.125,1.25,
//IF(AND(G59>1,G59<1.125),1,
//IF(G59>=0.875,1,
//IF(AND(G59>0.75,G59<0.875),0.75,
//IF(G59>=0.625,0.75,
//IF(AND(G59>0.5,G59<0.625),0.5,
//IF(G59>=0.375,0.5,
//IF(AND(G59>0.25,G59<0.375),0.25,
//IF(G59>=0.125,0.25,0)))))))))))))))
if(calG >= 1.875)
{
  calH = 2;
}
else if(calG > 1.75 && calG < 1.875)
{
  calH = 1.75
}
else if(calG >= 1.625)
{
  calH = 1.5;
}
else if(calG >= 1.375)
{
  calH = 1.5;
}
else if(calG > 1.25 && calG < 1.375)
{
  calH = 1.25;
}
else if(calG >= 1.125)
{
  calH = 1.25;
}
else if(calG > 1 && calG < 1.125)
{
  calH = 1;
}
else if(calG >= 0.875)
{
  calH = 1;
}
else if(calG > 0.75 && calG < 0.875)
{
  calH = 0.75;
}
else if(calG >= 0.625)
{
  calH = 0.75;
}
else if(calG > 0.5 && calG < 0.625)
{
  calH = 0.5;
}
else if(calG >= 0.375)
{
  calH = 0.5;
}
else if(calG > 0.25 && calG<0.375)
{
  calH = 0.25;
}
else if(calG >= 0.125)
{
  calH = 0.25;
}
else
{
  calH = 0;
}

var calI = "";
//=B59+(H59*7)
calI = calB+(calH*7);

var calJ = "";
//=IF(AND('Clean data'!BL59=21,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2,Block_adjustments=1,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(1*1),
//IF(AND('Clean data'!BL59=21,Block_adjustments=1,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(3.5*1),
//IF(AND('Clean data'!BL59=28,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2,Block_adjustments=1,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(1*2),
//IF(AND(Block_adjustments=1,'Clean data'!BL59=28,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(3.5*2),
//IF(AND('Clean data'!BL59=35,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2,Block_adjustments=1,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(1*3),
//IF(AND(Block_adjustments=1,'Clean data'!BL59=35,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(3.5*3),
//IF(AND(Block_adjustments=1,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59,
//IF(AND('Clean data'!BL59=21,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2),F59+(1*1),
//IF('Clean data'!BL59=21,F59+(3.5*1),
//IF(AND('Clean data'!BL59=28,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2),F59+(1*2),
//IF('Clean data'!BL59=28,F59+(3.5*2),
//IF(AND('Clean data'!BL59=35,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2),F59+(1*3),
//IF('Clean data'!BL59=35,F59+(3.5*3),F59)))))))))))))
if(clBL == 21 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2 && Block_adjustments == 1 && (clFW != 12)&& (clFW != 15))
{
  calJ = calI+(1*1);
}
else if(clBL == 21 && Block_adjustments == 1 && (clFW != 12)&& (clFW != 15))
{
  calJ = calI+(3.5*1);
}
else if(clBL == 28 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2 && Block_adjustments == 1 && (clFW != 12) && (clFW != 15))
{
  calJ = calI+(1*2);
}
else if(Block_adjustments == 1 && clBL == 28 && (clFW !=12) && (clFW != 15))
{
  calJ = calI+(3.5*2);
}
else if(clBL == 35 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2 && Block_adjustments == 1 && (clFW != 12)&& (clFW != 15))
{
  calJ = calI+(1*3);
}
else if(Block_adjustments == 1 && clBL == 35 && (clFW != 12) && (clFW != 15))
{
  calJ = calI+(3.5*3);
}
else if(Block_adjustments == 1 && (clFW != 12) && (clFW != 15))
{
  calJ = calI;
}
else if(clBL == 21 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2)
{
  calJ = calF+(1*1);
}
else if(clBL == 21)
{
  calJ = calF+(3.5*1);
}
else if(clBL == 28 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2)
{
  calJ = calF+(1*2);
}
else if(clBL == 28)
{
  calJ = calF+(3.5*2);
}
else if(clBL == 35 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2)
{
  calJ = calF+(1*3);
}
else if(clBL == 35)
{
  calJ = calF+(3.5*3);
}
else
{
calJ = calF;
}

var calK = "";
//= IF(OR('Clean data'!FW59=6, 'Clean data'!FW59=9.5), J59*SupportHousingAdj,J59)
if(clFW == 6 || clFW == 9.5)
{
  calK = calJ*SupportHousingAdj;
}
else
{
  calK = calJ;
}

var calL = "";
//=IF(Scores!F59=1,0,
//IF(AND(Scores!BR59>=0.99,Scores!BR59<1),1,
//IF(Scores!BR59>1,1,Scores!BR59)))
if(scF == 1)
{
  calL = 0;
}
else if(scBR>=0.99 && scBR<1)
{
  calL = 1;
}
else if(scBR > 1)
{
  calL = 1;
}
else
{
  calL = scBR;
}

var calM = "";
//=IF(L59=0,K59,(1-L59)*K59)
if(calL == 0)
{
  calM = calK;
}
else
{
  calM = (1-calL)*calK;
}

var calN = "";
//=M59+Scores!DU59
calN = calM + scDU;

var calO = "";
//=IF(AND(Scores!B59=1,Scores!G59=1,'Clean data'!DJ59=6,'Clean data'!FY59>1,EDL_Round_Output=1),(ROUND(((N59*SH_LD_Personal_Care_multiplier)*4),0)/4),
//IF(AND(Scores!B59=1,EDL_Round_Output=1),(ROUND(((N59*LD_Personal_Care_multiplier)*4),0)/4),
//IF(AND(Scores!B59=1,Scores!G59=1,'Clean data'!DJ59=6,'Clean data'!FY59>1),N59*SH_LD_Personal_Care_multiplier,
//IF(Scores!B59=1,N59*LD_Personal_Care_multiplier,
//IF(EDL_Round_Output=1,(ROUND((N59*4),0)/4),N59)))))
if(scB == 1 && scG == 1 && clDJ == 6 && clFY > 1 && EDL_Round_Output == 1)
{
  calO = (Math.round(((calN*SH_LD_Personal_Care_multiplier)*4),0)/4);
}
else if(scB == 1 && EDL_Round_Output == 1)
{
  calO = (Math.round(((calN*LD_Personal_Care_multiplier)*4),0)/4);
}
else if(scB == 1 && scG == 1 && clDJ == 6 && clFY > 1)
{
  calO = calN*SH_LD_Personal_Care_multiplier;
}
else if(scB == 1)
{
  calO = calN*LD_Personal_Care_multiplier;
}
else if(EDL_Round_Output == 1)
{
  calO = (Math.round((calN*4),0)/4);
}
else
{
  calO = calN;
}

var calP = "";
//=(Scores!ED59+Scores!EE59)
calP = scED+scEE;

var calQ = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GF59=4),P59*Mobility_DST_Severe, 
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GF59=3),P59*TransfersMajorAdj, 
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GF59=2),P59*TransfersMinorAdj, 
//IF(OR(AND('Clean data'!BW59>=3,'Clean data'!BQ59>=2),'Clean data'!BX59=1,'Clean data'!BV59=2),P59*TransfersMajorAdj, 
//IF('Clean data'!BV59=1,P59*TransfersMinorAdj,P59)))))
if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGF == 4)
{
  calQ = calP*Mobility_DST_Severe;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGF == 3)
{
  calQ = calP*TransfersMajorAdj;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGF == 2)
{
  calQ = calP*TransfersMinorAdj;
}
else if((clBW>=3 && clBQ>=2)|| clBX == 1 || clBV == 2)
{
  calQ = calP*TransfersMajorAdj;
}
else if(clBV == 1)
{
  calQ = calP*TransfersMinorAdj;
}
else
{
  calQ = calP;
}

var calR = "";
//=IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GH59=3),Q59*Engagement_VerySevere, 
//IF('Clean data'!DH59=4,Q59*Engagement_VerySevere, 
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GI59=4),Q59*Memory_VerySevere, 
//IF('Clean data'!CY59=4,Q59*Memory_VerySevere,
//IF('Clean data'!H59=4,Q59*Sensory_VerySevere,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GH59=2),Q59*Engagement_Severe,  
//IF('Clean data'!DH59=3,Q59*Engagement_Severe, 
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GI59=3),Q59*Memory_Severe, 
//IF('Clean data'!CY59=3,Q59*Memory_Severe,
//IF('Clean data'!H59=3,Q59*Sensory_Severe,
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GH59=1),Q59*Engagement_Moderate,
//IF('Clean data'!DH59=2,Q59*Engagement_Moderate, 
//IF(AND(ModelType>=2,OUT_DSTNeedsProfile=1,'Clean data'!GI59=2),Q59*Memory_Moderate, 
//IF('Clean data'!CY59=2,Q59*Memory_Moderate,
//IF('Clean data'!H59=2,Q59*Sensory_Moderate,Q59)))))))))))))))
if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGH == 3)
{
  calR = calQ*Engagement_VerySevere;
}
else if(clDH == 4)
{
  calR = calQ*Engagement_VerySevere;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGI == 4)
{
  calR = calQ*Memory_VerySevere
}
else if(clCY == 4)
{
  calR = calQ*Memory_VerySevere;
}
else if(clH == 4)
{
  calR = calQ*Sensory_VerySevere;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGH == 2)
{
  calR = calQ*Engagement_Severe;
}
else if(clDH == 3)
{
  calR = calQ*Engagement_Severe;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGI == 3)
{
  calR = calQ*Memory_Severe;
}
else if(clCY == 3)
{
  calR = calQ*Memory_Severe;
}
else if(clH == 3)
{
  calR = calQ*Sensory_Severe;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGH == 1)
{
  calR = calQ*Engagement_Moderate;
}
else if(clDH == 2)
{
  calR = calQ*Engagement_Moderate;
}
else if(ModelType>=2 && OUT_DSTNeedsProfile == 1 && clGI == 2)
{
  calR = calQ*Memory_Moderate;
}
else if(clCY == 2)
{
  calR = calQ*Memory_Moderate;
}
else if(clH == 2)
{
  calR = calQ*Sensory_Moderate;
}
else
{
  calR = calQ;
}

var calS = "";
//=IF(ModelType<=2,R59, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GB59>=4),R59*Breathing_Severe, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GB59=3),R59*Breathing_Significant, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GB59=2),R59*Breathing_Mild, 
//IF(AND(ModelType>2,'Clean data'!CR59=4),R59*Breathing_Severe, 
//IF(AND(ModelType>2,'Clean data'!CR59=3),R59*Breathing_Significant, 
//IF(AND(ModelType>2,'Clean data'!CR59=2),R59*Breathing_Mild,R59)))))))
if(ModelType<=2)
{
  calS = calR;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGB>=4)
{
  calS = calR*Breathing_Severe;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGB == 3)
{
  calS = calR*Breathing_Significant;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGB == 2)
{
  calS = calR*Breathing_Mild;
}
else if(ModelType>2 && clCR == 4)
{
  calS = calR*Breathing_Severe;
}
else if(ModelType>2 && clCR == 3)
{
  calS = calR*Breathing_Significant;
}
else if(ModelType>2 && clCR == 2)
{
  calS = calR*Breathing_Mild;
}
else
{
  calS = calR;
}

var calT = "";
//=IF(ModelType<=2,S59, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GK59>=4),S59*Pain_Severe, 
//IF(AND(ModelType>2,OUT_DSTNeedsProfile=1,'Clean data'!GK59=3),S59*Pain_Moderate, 
//IF(AND(ModelType>2,'Clean data'!CK59=1,'Clean data'!CI59=2),S59*Pain_Severe, 
//IF(AND(ModelType>2,'Clean data'!CK59=1,'Clean data'!CI59=1),S59*Pain_Moderate,S59)))))
if(ModelType<=2)
{
  calT = calS;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGK>=4)
{
  calT = calS*Pain_Severe;
}
else if(ModelType>2 && OUT_DSTNeedsProfile == 1 && clGK == 3)
{
  calT = calS*Pain_Moderate;
}
else if(ModelType>2 && clCK == 1 && clCI == 2)
{
  calT = calS*Pain_Severe;
}
else if(ModelType>2 && clCK == 1 && clCI == 1)
{
  calT = calS*Pain_Moderate;
}
else
{
  calT = calS;
}

var calU = "";
//=(T59-P59)/7
calU = (calT-calP)/7;

var calV = "";
//=IF(U59>=1.875, 2, 
//IF(AND(U59>1.75, U59<1.875), 1.75, 
//IF(U59>=1.625, 1.75, 
//IF(AND(U59>1.5, U59<1.625), 1.5, 
//IF(U59>=1.375,1.5,
//IF(AND(U59>1.25,U59<1.375),1.25,
//IF(U59>=1.125,1.25,
//IF(AND(U59>1,U59<1.125),1,
//IF(U59>=0.875,1,
//IF(AND(U59>0.75,U59<0.875),0.75,
//IF(U59>=0.625,0.75,
//IF(AND(U59>0.5,U59<0.625),0.5,
//IF(U59>=0.375,0.5,
//IF(AND(U59>0.25,U59<0.375),0.25,

//IF(U59>=0.125,0.25,0)))))))))))))))
if(calU >= 1.875)
{
  calV = 2;
}
else if(calU>1.75 && calU<1.875)
{
  calV = 1.75;
}
else if(calU >= 1.625)
{
  calV = 1.75;
}
else if(calU>1.5 && calU<1.625)
{
  calV = 1.5;
}
else if(calU >= 1.375)
{
  calV = 1.5;
}
else if(calU>1.25 && calU<1.375)
{
  calV = 1.25;
}
else if(calU >= 1.125)
{
  calV = 1.25;
}
else if(calU > 1 && calU < 1.125)
{
  calV = 1;
}
else if(calU >= 0.875)
{
  calV = 1;
}
else if(calU > 0.75 && calU < 0.875)
{
  calV = 0.75;
}
else if(calU >= 0.625)
{
  calV = 0.75;
}
else if(calU > 0.5 && calU<0.625)
{
  calV = 0.5;
}
else if(calU>=0.375)
{
  calV = 0.5;
}
else if(calU > 0.25 && calU < 0.375)
{
  calV = 0.25;
}
else if(calU >= 0.125)
{
  calV = 0.25;
}
else
{
  calV = 0;
}

var calW = "";
//=P59+(V59*7)
calW = calP+(calV*7);

var calX = "";
//=IF(AND('Clean data'!BL59=21, 'Clean data'!BJ59=1,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2,Block_adjustments=1,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(1*1),
//IF(AND(Block_adjustments=1,'Clean data'!BJ59=1,'Clean data'!BL59=21, NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),W59+((3.5)*1),
//IF(AND('Clean data'!BL59=28, 'Clean data'!BJ59=1,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2,Block_adjustments=1,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(1*2),
//IF(AND(Block_adjustments=1,'Clean data'!BJ59=1,'Clean data'!BL59=28, NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),W59+((3.5)*2),
//IF(AND('Clean data'!BL59=35, 'Clean data'!BJ59=1,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2,Block_adjustments=1,NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),I59+(1*1),
//IF(AND(Block_adjustments=1,'Clean data'!BJ59=1,'Clean data'!BL59=35, NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),W59+((3.5)*3),
//IF(AND(Block_adjustments=1, NOT('Clean data'!FW59=12),NOT('Clean data'!FW59=15)),W59,
//IF(AND('Clean data'!BL59=21,'Clean data'!BJ59=1,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2),F59+(1*1),
//IF(AND('Clean data'!BJ59=1,'Clean data'!BL59=21),R59+((3.5)*1),
//IF(AND('Clean data'!BL59=28,'Clean data'!BJ59=1,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2),F59+(1*2),
//IF(AND('Clean data'!BJ59=1,'Clean data'!BL59=28),R59+((3.5)*2),
//IF(AND('Clean data'!BL59=35,'Clean data'!BJ59=1,FullTime_Education_switch=1,'Clean data'!FZ59=1,'Clean data'!T59=2),F59+(1*3),

//IF(AND('Clean data'!BJ59=1,'Clean data'!BL59=35),R59+((3.5)*3),R59)))))))))))))
if((clBL == 21 && clBJ == 1 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2 && Block_adjustments == 1 && (clFW!=12) && (clFW!=15)))
{
  calX = calI+(1*1);
}
else if(Block_adjustments == 1 && clBJ == 1 && clBL == 21 &&  (clFW != 12) && (clFW == 15))
{
  calX = calW+((3.5)*1);
}
else if(clBL == 28 && clBJ == 1 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2 && Block_adjustments == 1 && (clFW != 12) && (clFW != 15))
{
  calX = calI+(1*2);
}
else if(Block_adjustments == 1 && clBJ == 1 && clBL == 28 && (clFW != 12) && (clFW != 15))
{
  calX = calW+((3.5)*2);
}
else if(clBL == 35 && clBJ == 1 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2 && Block_adjustments == 1 && (clFW !=12) && (clFW!=15))
{
  calX = calI+(1*1);
}
else if(Block_adjustments == 1 && clBJ == 1 && clBL == 35 && (clFW!=12) && (clFW != 15))
{
  calX = calW+((3.5)*3);
}
else if(Block_adjustments == 1 && (clFW != 12) && (clFW != 15))
{
  calX = calW;
}
else if(clBL == 21 && clBJ == 1 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2)
{
  calX = calF+(1*1);
}
else if(clBJ == 1 && clBL == 21)
{
  calX = calR+((3.5)*1);
}
else if(clBL == 28 && clBJ == 1 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2)
{
  calX = calF+(1*2);
}
else if(clBJ == 1 && clBL == 28)
{
  calX = calR+((3.5)*2);
}
else if(clBL == 35 && clBJ == 1 && FullTime_Education_switch == 1 && clFZ == 1 && clT == 2)
{
  calX = calF+(1*3);
}
else if(clBJ == 1 && clBL == 35)
{
  calX = calR+((3.5)*3);
}
else
{
  calX = calR;
}

var calY = "";
//=IF(AND(OR('Clean data'!FW59=7,'Clean data'!FW59=9),'Supp. Living'!C59>0,'Clean data'!DJ59=9,OR('Clean data'!FE59=1,'Clean data'!FE59=-17)),0,
//IF(AND('Clean data'!FW59=9.5,'Clean data'!DJ59=9,'Other ALS'!C59>0,OR('Clean data'!FE59=1,'Clean data'!FE59=-17)),0,
//IF(AND('Clean data'!DJ59=9,Community!C59>0,OR('Clean data'!FE59=1,'Clean data'!FE59=-17)),0,
//IF(AND(X59>Calculator!J59,EDL_Round_Output=1),(ROUND((Calculator!J59*4),0)/4),
//IF(X59>Calculator!J59,Calculator!J59,
//IF(EDL_Round_Output=1,(ROUND((X59*4),0)/4),X59))))))
if((clFW == 7 || clFW == 9)&& supC > 0 && clDJ == 9 && (clFE == 1 || clFE == -17))
{
  calY = 0;
}
else if(clFW == 9.5 && clDJ == 9 && oalC > 0)
{
  calY = 0;
}
else if(clDJ == 9 && comC > 0 && OR(clFE == 1 || clFE == -17))
{
  calY = 0;
}
else if(calX > calJ && EDL_Round_Output == 1)
{
  calY = (Math.round((calJ*4),0)/4);
}
else if(calX > calJ)
{
  calY = calJ;
}
else if(EDL_Round_Output == 1)
{
  calY = (Math.round((calX*4),0)/4);
}
else
{
  calY = calX;
}

var calZ = "";
//=IF(Scores!EI59=0,Y59,
//IF(((1-Scores!EI59)*Y59)>O59,O59,
//IF(EDL_Round_Output=1,(ROUND((((1-Scores!EI59)*Y59)*4),0)/4),(1-Scores!EI59)*Y59)))
if(scEI == 0)
{
  calZ = calY;
}
else if(((1-scEI)*calY)>calO)
{
  calZ = calO
}
else if(EDL_Round_Output == 1)
{
  calZ = (Math.round((((1-scEI)*calY)*4),0)/4);
}
else
{
  calZ = (1-scEI)*calY;
}

var calAA = "";
//=Scores!FE59+Scores!FF59+Scores!FG59+Scores!FH59
calAA = scFE+scFF+scFG+scFH;

var calAB = "";
//=Scores!FI59
calAB = scFI;

var calAC = "";
//=IF(OR('Clean data'!FW59=7,'Clean data'!FW59=9), 'Supp. Living'!T59, 
//IF(OR( 'Clean data'!FW59=12,'Clean data'!FW59=15), 'Care home calc'!AS59, 
//IF('Clean data'!FW59=9.5, 'Other ALS'!Q59,  
//IF('Clean data'!FW59=3, 'Other ALS'!U59,
//IF('Clean data'!FW59=10, 'Other ALS'!AN59, 
//IF(AND('Clean data'!GA59=1,PA_Dom_Tasks_Switch=1), Community!AH59, Community!Q59))))))
if(clFW == 7 || clFW == 9)
{
  calAC = supT;
}
else if(clFW == 12 || clFW == 15)
{
  calAC = carcAS;
}
else if(clFW == 9.5)
{
  calAC = oalQ;
}
else if(clFW == 3)
{
  calAC = oalU;
}
else if(clFW == 10)
{
  calAC = oalAN;
}
else if(clGA == 1 && PA_Dom_Tasks_Switch == 1)
{
  calAC = comAH;
}
else
{
  calAC = comQ;
}

var calAD = "";
//=IF(AND(Live_in_Carer_Allocation=0,'Clean data'!FW59=3),0,
//IF(AND(Shared_Lives_Allocation=0,'Clean data'!FW59=10),0,
//IF(AND(Care_home_allocation=0,Scores!F59=1),0,
//IF(AND(Scores!F59=1,'Care home calc'!AS59>0),'Care home calc'!AS59,
//IF('Clean data'!FW59=3,'Other ALS'!U59,
//IF('Clean data'!FW59=10,'Other ALS'!AN59,AC59))))))
if(Live_in_Carer_Allocation == 0 && clFW == 3)
{
  calAD = 0;
}
else if(Shared_Lives_Allocation == 0 && clFW == 10)
{
  calAD = 0;
}
else if(Care_home_allocation == 0 && scF == 1)
{
  calAD = 0;
}
else if(scF == 1 && carcAS > 0)
{
  calAD = carcAS;
}
else if(clFW == 3)
{
  calAD = oalU;
}
else if(clFW == 10)
{
  calAD = oalAN;
}
else
{
  calAD = calAC;
}

var calAE = "";
//=IF(OR(Scores!F59=1,Scores!G59=1,'Clean data'!FW59=3,'Clean data'!FW59=10),AD59,AD59+Scores!HI59)
if(scF == 1 || scG == 1 || clFW == 3 || clFW == 10)
{
  calAE = calAD;
}
else
{
  calAE = calAD+scHI;
}

var calAF = "";
//=IF(AND(Scores!HJ59>0,Calculator!AE59>Scores!HJ59),Scores!HJ59,Calculator!AE59)
if(scHI > 0 && calAE > scHJ)
{
  calAF = scHJ;
}
else
{
  calAF = calAE;
}

var calAG = "";
//=IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)<2),0,
//IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)>1,'Clean data'!FT59=0),0,
//IF(AND(Scores!HJ59>0,Community!R59>Scores!HJ59),Scores!HJ59,Community!R59)))
if(ModelType <= 2 && (clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR)<2)
{
  calAG = 0;
}
else if((ModelType <= 2 && (clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR)>1 && clFT == 0))
{
  calAG = 0;
}
else if(scHJ > 0 && comR > scHJ)
{
  calAG = scHJ;
}
else
{
  calAG = comR;
}

var calAH = "";
//=IF(AND(OR('Clean data'!EE59<100,'Clean data'!EI59<100,'Clean data'!EM59<100,'Clean data'!ED59<100,'Clean data'!EH59<100,'Clean data'!EL59<100),Minimum_IB_Inflator>0,AF59<Minimum_IB_Inflator),Minimum_IB_Inflator,
///IF(AND(Minimum_IB_Deflator>0,AF59<Minimum_IB_Deflator),0,AF59))
if((clEE<100 || clEI<100 || clEM<100 || clED<100 || clEH<100 || clEL<100)&& Minimum_IB_Inflator>0 && calAF<Minimum_IB_Inflator)
{
  calAH = Minimum_IB_Inflator;
}
else if(Minimum_IB_Deflator > 0 && calAF < Minimum_IB_Deflator)
{
  calAH = 0;
}
else
{
  calAH = calAF;
}

var calAI = "";
//=IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)<2),0,
//IF(AND(ModelType<=2,SUM('Clean data'!FI59:FR59)>1,'Clean data'!FT59=0),0,AH59))
if(ModelType<=2 && (clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR)<2)
{
  calAI = 0;
}
else if(ModelType<=2 && (clFI + clFJ + clFK +  clFL + clFM + clFN + clFO + clFP + clFQ + clFR)> 1 && clFT == 0)
{
  calAI = 0;
}
else
{
  calAI = calAH;
}





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
console.log('rET', rET);
console.log('rEU', rEU);
console.log('----clean----')
console.log('clF', clF);
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
console.log('clAK', clAK);
console.log('clAL', clAL);
console.log('clAM', clAM);
console.log('clAN', clAN);
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
console.log('clGC', clGC);
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
console.log('clGW', clGW);
console.log('clGX', clGX);
console.log('clGY', clGY);
console.log('clGZ', clGZ);
console.log('clHA', clHA);
console.log('clHB', clHB);
console.log('clHC', clHC);
console.log('clHD', clHD);
console.log('clHE', clHE);
console.log('clHF', clHF);
console.log('clHG', clHG);
console.log('clHH', clHH);
console.log('clHI', clHI);
console.log('clHJ', clHJ);
console.log('clHK', clHK);
console.log('clHL', clHL);
console.log('clHM', clHM);
console.log('clHN', clHN);
console.log('clHO', clHO);
console.log('clHP', clHP);
console.log('clHQ', clHQ);
console.log('clHR', clHR);
console.log('clHS', clHS);
console.log('clHT', clHT);
console.log('clHU', clHU);
console.log('clHV', clHV);
console.log('clHW', clHW);
console.log('clHX', clHX);
console.log('clHY', clHY);
console.log('clHZ', clHZ);
console.log('clIA', clIA);
console.log('clIB', clIB);
console.log('clIC', clIC);
console.log('clID', clID);
console.log('clIE', clIE);
console.log('clIF', clIF);
console.log('scB', scB);
console.log('scC', scC);
console.log('scD', scD);
console.log('scE', scE);
console.log('scF', scF);
console.log('scG', scG);
console.log('scH', scH);
console.log('scI', scI);
console.log('scJ', scJ);
console.log('scK', scK);
console.log('scL', scL);
console.log('scM', scM);
console.log('scN', scN);
console.log('scO', scO);
console.log('scP', scP);
console.log('scQ', scQ);
console.log('scR', scR);
console.log('scS', scS);
console.log('scT', scT);
console.log('scU', scU);
console.log('scV', scV);
console.log('scW', scW);
console.log('scX', scX);
console.log('scY', scY);
console.log('scZ', scZ);
console.log('scAA', scAA);
console.log('scAB', scAB);
console.log('scAC', scAC);
console.log('scAD', scAD);
console.log('scAE', scAE);
console.log('scAF', scAF);
console.log('scAG', scAG);
console.log('scAH', scAH);
console.log('scAI', scAI);
console.log('scAJ', scAJ);
console.log('scAK', scAK);
console.log('scAL', scAL);
console.log('scAM', scAM);
console.log('scAN', scAN);
console.log('scAO', scAO);
console.log('scAP', scAP);
console.log('scAQ', scAQ);
console.log('scAR', scAR);
console.log('scAS', scAS);
console.log('scAT', scAT);
console.log('scAU', scAU);
console.log('scAV', scAV);
console.log('scAW', scAW);
console.log('scAX', scAX);
console.log('scAY', scAY);
console.log('scAZ', scAZ);
console.log('scBA', scBA);
console.log('scBB', scBB);
console.log('scBC', scBC);
console.log('scBD', scBD);
console.log('scBE', scBE);
console.log('scBF', scBF);
console.log('scBG', scBG);
console.log('scBH', scBH);
console.log('scBI', scBI);
console.log('scBJ', scBJ);
console.log('scBK', scBK);
console.log('scBL', scBL);
//moved onto cl line 59 as did wrong RAW data
console.log('scBM', scBM);
console.log('scBN', scBN);
console.log('scBO', scBO);
console.log('scBP', scBP);
console.log('scBQ', scBQ);
console.log('scBR', scBR);
console.log('scBS', scBS);
console.log('scBT', scBT);
console.log('scBU', scBU);
console.log('scBV', scBV);
console.log('scBW', scBW);
console.log('scBX', scBX);
console.log('scBY', scBY);
console.log('scBZ', scBZ);
console.log('scCA', scCA);
console.log('scCB', scCB);
console.log('scCC', scCC);
console.log('scCD', scCD);
console.log('scCE', scCE);
console.log('scCF', scCF);
console.log('scCG', scCG);
console.log('scCH', scCH);
console.log('scCI', scCI);
console.log('scCJ', scCJ);
console.log('scCK', scCK);
console.log('scCL', scCL);
console.log('scCM', scCM);
console.log('scCN', scCN);
console.log('scCO', scCO);
console.log('scCP', scCP);
console.log('scCQ', scCQ);
console.log('scCR', scCR);
console.log('scCS', scCS);
console.log('scCT', scCT);
console.log('scCU', scCU);
console.log('scCV', scCV);
console.log('scCW', scCW);
console.log('scCX', scCX);
console.log('scCY', scCY);
console.log('scCZ', scCZ);
console.log('scDA', scDA);
console.log('scDB', scDB);
console.log('scDC', scDC);
console.log('scDD', scDD);
console.log('scDE', scDE);
console.log('scDF', scDF);
console.log('scDG', scDG);
console.log('scDH', scDH);
console.log('scDI', scDI);
console.log('scDJ', scDJ);
console.log('scDK', scDK);
console.log('scDL', scDL);
console.log('scDM', scDM);
console.log('scDN', scDN);
console.log('scDO', scDO);
console.log('scDP', scDP);
console.log('scDQ', scDQ);
console.log('scDR', scDR);
console.log('scDS', scDS);
console.log('scDT', scDT);
console.log('scDU', scDU);
console.log('scDV', scDV);
console.log('scDW', scDW);
console.log('scDX', scDX);
console.log('scDY', scDY);
console.log('scDZ', scDZ);
console.log('scEA', scEA);
console.log('scEB', scEB);
console.log('scEC', scEC);
console.log('scED', scED);
console.log('scEE', scEE);
console.log('scEF', scEF);
console.log('scEG', scEG);
console.log('scEH', scEH);
console.log('scEI', scEI);
console.log('scEJ', scEJ);
console.log('scEK', scEK);
console.log('scEL', scEL);
console.log('scEM', scEM);
console.log('scEN', scEN);
console.log('scEO', scEO);
console.log('scEP', scEP);
console.log('scEQ', scEQ);
console.log('scER', scER);
console.log('scES', scES);
console.log('scET', scET);
console.log('scEU', scEU);
console.log('scEV', scEV);
console.log('scEW', scEW);
console.log('scEX', scEX);
console.log('scEY', scEY);
console.log('scEZ', scEZ);
console.log('scFA', scFA);
console.log('scFB', scFB);
console.log('scFC', scFC);
console.log('scFD', scFD);
console.log('scFE', scFE);
console.log('scFF', scFF);
console.log('scFG', scFG);
console.log('scFH', scFH);
console.log('scFI', scFI);
console.log('scFJ', scFJ);
console.log('scFK', scFK);
console.log('scFL', scFL);
console.log('scFM', scFM);
console.log('scFN', scFN);
console.log('scFO', scFO);
console.log('scFP', scFP);
console.log('scFQ', scFQ);
console.log('scFR', scFR);
console.log('scFS', scFS);
console.log('scFT', scFT);
console.log('scFU', scFU);
console.log('scFV', scFV);
console.log('scFW', scFW);
console.log('scFX', scFX);
console.log('scFY', scFY);
console.log('scFZ', scFZ);
console.log('scGA', scGA);
console.log('scGB', scGB);
console.log('scGC', scGC);
console.log('scGD', scGD);
console.log('scGE', scGE);
console.log('scGF', scGF);
console.log('scGG', scGG);
console.log('scGH', scGH);
console.log('scGI', scGI);
console.log('scGJ', scGJ);
console.log('scGK', scGK);
console.log('scGL', scGL);
console.log('scGM', scGM);
console.log('scGN', scGN);
console.log('scGO', scGO);
console.log('scGP', scGP);
console.log('scGQ', scGQ);
console.log('scGR', scGR);
console.log('scGS', scGS);
console.log('scGT', scGT);
console.log('scGU', scGU);
console.log('scGV', scGV);
console.log('scGW', scGW);
console.log('scGX', scGX);
console.log('scGY', scGY);
console.log('scGZ', scGZ);
console.log('scHA', scHA); 
console.log('scHB', scHB);
console.log('scHC', scHC);
console.log('scHD', scHD);
console.log('scHE', scHE);
console.log('scHF', scHF);
console.log('scHG', scHG);
console.log('scHH', scHH);
console.log('scHI', scHI);
console.log('scHJ', scHJ);
console.log('scHK', scHK);
console.log('scHL', scHL);
console.log('scHM', scHM);
console.log('scHN', scHN);
console.log('scHO', scHO);
console.log('scHP', scHP);
console.log('scHQ', scHQ);
console.log('scHR', scHR);
console.log('scHS', scHS);
console.log('scHT', scHT);
console.log('scHU', scHU);
console.log('scHV', scHV);
console.log('scHW', scHW);
console.log('scDK', scDK);
console.log('scHY', scHY);
console.log('scHZ', scHZ);
console.log('scIA', scIA);
console.log('scIB', scIB);
console.log('scIC', scIC);
console.log('scID', scID);
console.log('scIE', scIE);
console.log('scIF', scIF);
console.log('scIG', scIG);
console.log('scIH', scIH);
console.log('scII', scII);
console.log('scIJ', scIJ);
console.log('scIK', scIK);
console.log('scIL', scIL);
console.log('scIM', scIM);
console.log('scIN', scIN);
console.log('scIO', scIO);
console.log('scIP', scIP);
console.log('scIQ', scIQ);
console.log('scIR', scIR);
console.log('scIS', scIS);
console.log('scIT', scIT);
console.log('scIU', scIU);
console.log('scIV', scIV);
console.log('scIW', scIW);
console.log('scIX', scIX);
console.log('scIY', scIY);
console.log('scIZ', scIZ);
console.log('scJA', scJA);
console.log('scJB', scJB);
console.log('scJC', scJC);
console.log('scJD', scJD);
console.log('scJE', scJE);
console.log('scJF', scJF);
console.log('scJG', scJG);
console.log('scJH', scJH);
console.log('scJI', scJI);
console.log('scJJ', scJJ);
console.log('scJK', scJK);
console.log('scJL', scJL);
console.log('scJM', scJM);
console.log('scJN', scJN);
console.log('scJO', scJO);
console.log('scJP', scJP);
console.log('scJQ', scJQ);
console.log('scJR', scJR);
console.log('scJS', scJS);
console.log('scJT', scJT);
console.log('scJU', scJU);
console.log('scJV', scJV);
console.log('comB', comB);
console.log('comC', comC);
console.log('comD', comD);
console.log('comC', comC);
console.log('comF', comF);
console.log('comG', comG);
console.log('comH', comH);
console.log('comI', comI);
console.log('comJ', comJ);
console.log('comK', comK);
console.log('comL', comL);
console.log('comM', comM);
console.log('comN', comN);
console.log('comO', comO);
console.log('comP', comP);
console.log('comQ', comQ);
console.log('comR', comR);
console.log('comS', comS);
console.log('comT', comT);
console.log('comU', comU);
console.log('comV', comV);
console.log('comW', comW);
console.log('comX', comX);
console.log('comY', comY);
console.log('comZ', comZ);
console.log('comAA', comAA);
console.log('comAB', comAB);
console.log('comAC', comAC);
console.log('comAD', comAD);
console.log('comAE', comAE);
console.log('comAF', comAF);
console.log('comAG', comAG);
console.log('comAH', comAH);
console.log('comAI', comAI);
console.log('caB', caB);
console.log('caC', caC);
console.log('caD', caD);
console.log('caE', caE);
console.log('caF', caF);
console.log('caG', caG);
console.log('caH', caH);
console.log('caI', caI);
console.log('caJ', caJ);
console.log('caK', caK);
console.log('caL', caL);
console.log('caM', caM);
console.log('caN', caN);
console.log('caO', caO);
console.log('caP', caP);
console.log('caQ', caQ);
console.log('caR', caR);
console.log('caS', caS);
console.log('caT', caT);
console.log('caU', caU);
console.log('caV', caV);
console.log('caW', caW);
console.log('caX', caX);
console.log('caY', caY);
console.log('caZ', caZ);
console.log('caAA', caAA);
console.log('caAB', caAB);
console.log('caAC', caAC);
console.log('caAD', caAD);
console.log('caAE', caAE);
console.log('caAF', caAF);
console.log('caAG', caAG);
console.log('caAH', caAH);
console.log('caAI', caAI);
console.log('caAJ', caAJ);
console.log('caAK', caAK);
console.log('caAL', caAL);
console.log('caAM', caAM);
console.log('caAN', caAN);
console.log('caAO', caAO);
console.log('caAP', caAP);
console.log('caAQ', caAQ);
console.log('caAR', caAR);
console.log('caAS', caAS);
console.log('supB', supB);
console.log('supC', supC);
console.log('supD', supD);
console.log('supE', supE);
console.log('supF', supF);
console.log('supG', supG);
console.log('supH', supH);
console.log('supI', supI);
console.log('supJ', supJ);
console.log('supK', supK);
console.log('supL', supL);
console.log('supM', supM);
console.log('supN', supN);
console.log('supO', supO);
console.log('supP', supP);
console.log('supQ', supQ);
console.log('supR', supR);
console.log('supS', supS);
console.log('supT', supT);
console.log('supU', supU);
console.log('oalB', oalB);
console.log('oalC', oalC);
console.log('oalD', oalD);
console.log('oalE', oalE);
console.log('oalF', oalF);
console.log('oalG', oalG);
console.log('oalH', oalH);
console.log('oalI', oalI);
console.log('oalJ', oalJ);
console.log('oalK', oalK);
console.log('oalL', oalL);
console.log('oalM', oalM);
console.log('oalN', oalN);
console.log('oalO', oalO);
console.log('oalP', oalP);
console.log('oalQ', oalQ);
console.log('oalR', oalR);
console.log('oalS', oalS);
console.log('oalT', oalT);
console.log('oalU', oalU);
console.log('oalV', oalV);
console.log('oalW', oalW);
console.log('oalX', oalX);
console.log('oalY', oalY);
console.log('oalZ', oalZ);
console.log('oalAA', oalAA);
console.log('oalAB', oalAB);
console.log('oalAC', oalAC);
console.log('oalAD', oalAD);
console.log('oalAE', oalAE);
console.log('oalAF', oalAF);
console.log('oalAG', oalAG);
console.log('oalAH', oalAH);
console.log('oalAI', oalAI);
console.log('oalAJ', oalAJ);
console.log('oalAK', oalAK);
console.log('oalAL', oalAL);
console.log('oalAM', oalAM);
console.log('oalAN', oalAN);
console.log('oalAO', oalAO);
console.log('calB', calB);
console.log('calC', calC);
console.log('calD', calD);
console.log('calE', calE);
console.log('calF', calF);
console.log('calG', calG);
console.log('calH', calH);
console.log('calI', calI);
console.log('calJ', calJ);
console.log('calK', calK);
console.log('calL', calL);
console.log('calM', calM);
console.log('calN', calN);
console.log('calO', calO);
console.log('calP', calP);
console.log('calQ', calQ);
console.log('calR', calR);
console.log('calS', calS);
console.log('calT', calT);
console.log('calU', calU);
console.log('calV', calV);
console.log('calW', calW);
console.log('calX', calX);
console.log('calY', calY);
console.log('calZ', calZ);
console.log('calAA', calAA);
console.log('calAB', calAB);
console.log('calAC', calAC);
console.log('calAD', calAD);
console.log('calAE', calAE);
console.log('calAF', calAF);
console.log('calAG', calAG);
console.log('calAH', calAH);
console.log('calAI', calAI);
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
  case "2nd carer":
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
  case "2nd carer":
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
  case "2nd carer":
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
  case "2nd carer":
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
  case "2nd carer": //<----FACE ISSUE
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
  case "2nd carer":
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
  case "2nd carer":
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
  case "2nd carer":
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
  case "2nd carer":
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
  case "2nd carer":
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
  case "2nd carer":
  return 3.5;
  case 0:
  return 0;
  default:
  return 0;
  }
  }
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
  case "2nd carer":
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
  case "2nd carer":
  return 63;
  case "0":
  return 0;
  default:
  return 0;
  }
  }
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
  if (c == 2) {DST_Levels
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
