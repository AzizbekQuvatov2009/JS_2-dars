/*JSda arifmetik amallar*/
/* Data types (malumotlar turlari): String:matn uchiun , number:sonlar uchun. */
/*let x = 55;*/

/*x+=15;*/
/*x-=25*/  /* x=5-2*/
/*x*=5*/   /*x=5*5 */
/*x/=2*/   /*x=5/2*/
/*let qoldiq = x%3;*/
/*let natija = x**5*/  /*5*5*5*5*5 => darajaga kopaytirish*/
/* ++x; qo'shadi, documentda qoshadi */
/* x++; qo'shadi, documentda qoshmaydi */
/* --x; kamaytiradi*/


/* x = block; */
/* number va strim sonda bo'laganida*/
/*document.write(5+ "5");*/ /* yonma-yon chiqarib beradi*/
/*document.write(5 * "5");*/ /* arifmetik amalar ishga tushadi*/
/*document.write(5 -"2");*/ /* arifmetik amalar ishga tushadi */
/*document.write(5 /"2");*/ /* arifmetik amalar ishga tushadi */

/* number va strim son va matn bolganida*/
/*document.write(5 + "salom")*/ /* yonma-yon bo'lganida */
/*document.write(5 * "salom")*/  /* NoN = noto'g'ri */
/*document.write(5 - "salom")*/  /* NoN = noto'g'ri */
/*document.write(5 / "salom")*/  /* NoN = noto'g'ri */


/*
 if = agar                       =>shart formulasi
 else = u holda                  =>shart formulasi
 else if => yoki bolmasa         =>shart formulasi

 1.if, else
 2.if else if, elsa
 */

/*
Shrat (bitta sababli shart) => agar Meni shotim o'chsa ,
Samandarga tel qilomiman.

 Shart ( ikkita sababli shart )=> Agar meni shotim o'chsa , yoki bahona qilsam
 u holda Samandarga tel qilomiman.

 Shrat (bitta sababli shart) => agar men uxlamasam jinni bolib qolaman

 Shart ( ikkita sababli shart )=> agar men uxlamasam , yoki bolmas , hoxishim bolmas
 jini bolib qolaman.
 */

/*if ("salom" == "salo"){
    console.log("Ular teng!");
}else {
    console.log("Ular teng emas!");
}

if ("mana u" == "mana u"){
    console.log("Ular teng!");
}else {
    console.log("Ular teng emas!");
}

if ("mana u" == "mana"){
    console.log("Ular teng!");
}else {
    console.log("Ular teng emas!");
}*/

/* Maqsad 44ga teng sonni topish */
/*if (44 == 45){
    console.log("Birinchi uchiragan son 44ga teng!");
}else if ( 44 == 46){
    console.log("Ikkinchi uchiragan son 44ga teng!");
}else {
    console.log("Yuqoridagi sonlarning hech biri 44ga teng emas!")
}*/


if ( 3+4*2 == 3+4*2 ){
    console.log("Ular teng!");
}else {
    console.log("Ular teng emas!");
}

if ( 3+4*2 == 3*4+2 ){
    console.log("Ular teng!");
}else {
    console.log("Ular teng emas!");
}


if ( 23+405/678 == 23+405/678 ){
    console.log("Ular bir birlariga teng!");
}else {
    console.log("Ular bir birlariga teng emas!");
}

if ( 23+405/678 == 23*305+678 ){
    console.log("Ular bir birlariga teng!");
}else {
    console.log("Ular bir birlariga teng emas!");
}

if ( "Men kecha darsda edim!" == "ular kecha darsda edimi!" ){
    console.log("Birinchi uchiragan  matinga teng!");
}else if ( "Men kecha darsda edim !" == "sizlar kecha darisda ediglarmi!" ){
    console.log("Ikkinchi uchiragan matn birinchi uchiragan matngateng!");
}else {
    console.log("Yuqoridagi matinlarning hech biri,birinchi matinga teng emas, barbir teng emas!")
}

if ( 23*34+45-7/14 == 23*34+45-56-5 ){
    console.log("Birinchi uchiragan son 23*34+45-7/14ga teng!");
}else if ( 23*34+45-7/14 == 23*34+45-9/65){
    console.log("Ikkinchi uchiragan son 23*34+45-7/14ga teng!");
}else {
    console.log("Yuqoridagi sonlarning hech biri 23*34+45-7/14ga teng emas!")
}
