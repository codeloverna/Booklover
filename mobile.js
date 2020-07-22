let bookID, page, pageName, book;


let title, writer, totalPages, formatedPages, proofedPages, bestVolunteer, completed, taskPages = [], lastPageInTask = 0;
let rawText, filterText, latestText, imageLink, format, proof, version, volunteer;

let text, newVolunteer = '', email, uid, credit, lastpage;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB70YqPwS1A-oN9OzPXZ43jSCaa5hH_TJQ",
    authDomain: "testbook-6d3ca.firebaseapp.com",
    databaseURL: "https://testbook-6d3ca.firebaseio.com",
    projectId: "testbook-6d3ca",
    storageBucket: "testbook-6d3ca.appspot.com",
    messagingSenderId: "428976291283",
    appId: "1:428976291283:web:540de795db0e54153e0326",
    measurementId: "G-SY2V1E8WMN"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.database();
let obj = document.getElementById("textid");

var images = ['./pdf_pages/pdf2img0000.png', './pdf_pages/pdf2img0001.png', './pdf_pages/pdf2img0002.png', './pdf_pages/pdf2img0003.png', './pdf_pages/pdf2img0004.png', './pdf_pages/pdf2img0005.png', './pdf_pages/pdf2img0006.png', './pdf_pages/pdf2img0007.png', './pdf_pages/pdf2img0008.png', './pdf_pages/pdf2img0009.png', './pdf_pages/pdf2img0010.png', './pdf_pages/pdf2img0011.png', './pdf_pages/pdf2img0012.png', './pdf_pages/pdf2img0013.png', './pdf_pages/pdf2img0014.png', './pdf_pages/pdf2img0015.png', './pdf_pages/pdf2img0016.png', './pdf_pages/pdf2img0017.png', './pdf_pages/pdf2img0018.png', './pdf_pages/pdf2img0019.png', './pdf_pages/pdf2img0020.png', './pdf_pages/pdf2img0021.png', './pdf_pages/pdf2img0022.png', './pdf_pages/pdf2img0023.png', './pdf_pages/pdf2img0024.png', './pdf_pages/pdf2img0025.png', './pdf_pages/pdf2img0026.png', './pdf_pages/pdf2img0027.png', './pdf_pages/pdf2img0028.png', './pdf_pages/pdf2img0029.png', './pdf_pages/pdf2img0030.png', './pdf_pages/pdf2img0031.png', './pdf_pages/pdf2img0032.png', './pdf_pages/pdf2img0033.png', './pdf_pages/pdf2img0034.png', './pdf_pages/pdf2img0035.png', './pdf_pages/pdf2img0036.png', './pdf_pages/pdf2img0037.png', './pdf_pages/pdf2img0038.png', './pdf_pages/pdf2img0039.png', './pdf_pages/pdf2img0040.png', './pdf_pages/pdf2img0041.png', './pdf_pages/pdf2img0042.png', './pdf_pages/pdf2img0043.png', './pdf_pages/pdf2img0044.png', './pdf_pages/pdf2img0045.png', './pdf_pages/pdf2img0046.png', './pdf_pages/pdf2img0047.png', './pdf_pages/pdf2img0048.png', './pdf_pages/pdf2img0049.png', './pdf_pages/pdf2img0050.png', './pdf_pages/pdf2img0051.png', './pdf_pages/pdf2img0052.png', './pdf_pages/pdf2img0053.png', './pdf_pages/pdf2img0054.png', './pdf_pages/pdf2img0055.png', './pdf_pages/pdf2img0056.png', './pdf_pages/pdf2img0057.png', './pdf_pages/pdf2img0058.png', './pdf_pages/pdf2img0059.png', './pdf_pages/pdf2img0060.png', './pdf_pages/pdf2img0061.png', './pdf_pages/pdf2img0062.png', './pdf_pages/pdf2img0063.png', './pdf_pages/pdf2img0064.png', './pdf_pages/pdf2img0065.png', './pdf_pages/pdf2img0066.png', './pdf_pages/pdf2img0067.png', './pdf_pages/pdf2img0068.png', './pdf_pages/pdf2img0069.png', './pdf_pages/pdf2img0070.png', './pdf_pages/pdf2img0071.png', './pdf_pages/pdf2img0072.png', './pdf_pages/pdf2img0073.png', './pdf_pages/pdf2img0074.png', './pdf_pages/pdf2img0075.png', './pdf_pages/pdf2img0076.png', './pdf_pages/pdf2img0077.png', './pdf_pages/pdf2img0078.png', './pdf_pages/pdf2img0079.png', './pdf_pages/pdf2img0080.png', './pdf_pages/pdf2img0081.png', './pdf_pages/pdf2img0082.png', './pdf_pages/pdf2img0083.png', './pdf_pages/pdf2img0084.png', './pdf_pages/pdf2img0085.png', './pdf_pages/pdf2img0086.png', './pdf_pages/pdf2img0087.png', './pdf_pages/pdf2img0088.png', './pdf_pages/pdf2img0089.png', './pdf_pages/pdf2img0090.png', './pdf_pages/pdf2img0091.png', './pdf_pages/pdf2img0092.png', './pdf_pages/pdf2img0093.png', './pdf_pages/pdf2img0094.png', './pdf_pages/pdf2img0095.png', './pdf_pages/pdf2img0096.png', './pdf_pages/pdf2img0097.png', './pdf_pages/pdf2img0098.png', './pdf_pages/pdf2img0099.png', './pdf_pages/pdf2img0100.png', './pdf_pages/pdf2img0101.png', './pdf_pages/pdf2img0102.png', './pdf_pages/pdf2img0103.png', './pdf_pages/pdf2img0104.png', './pdf_pages/pdf2img0105.png', './pdf_pages/pdf2img0106.png', './pdf_pages/pdf2img0107.png', './pdf_pages/pdf2img0108.png', './pdf_pages/pdf2img0109.png', './pdf_pages/pdf2img0110.png', './pdf_pages/pdf2img0111.png', './pdf_pages/pdf2img0112.png', './pdf_pages/pdf2img0113.png', './pdf_pages/pdf2img0114.png', './pdf_pages/pdf2img0115.png', './pdf_pages/pdf2img0116.png', './pdf_pages/pdf2img0117.png', './pdf_pages/pdf2img0118.png', './pdf_pages/pdf2img0119.png', './pdf_pages/pdf2img0120.png', './pdf_pages/pdf2img0121.png', './pdf_pages/pdf2img0122.png', './pdf_pages/pdf2img0123.png', './pdf_pages/pdf2img0124.png', './pdf_pages/pdf2img0125.png', './pdf_pages/pdf2img0126.png', './pdf_pages/pdf2img0127.png', './pdf_pages/pdf2img0128.png', './pdf_pages/pdf2img0129.png', './pdf_pages/pdf2img0130.png', './pdf_pages/pdf2img0131.png', './pdf_pages/pdf2img0132.png', './pdf_pages/pdf2img0133.png', './pdf_pages/pdf2img0134.png', './pdf_pages/pdf2img0135.png', './pdf_pages/pdf2img0136.png', './pdf_pages/pdf2img0137.png', './pdf_pages/pdf2img0138.png', './pdf_pages/pdf2img0139.png', './pdf_pages/pdf2img0140.png', './pdf_pages/pdf2img0141.png', './pdf_pages/pdf2img0142.png', './pdf_pages/pdf2img0143.png', './pdf_pages/pdf2img0144.png', './pdf_pages/pdf2img0145.png', './pdf_pages/pdf2img0146.png', './pdf_pages/pdf2img0147.png', './pdf_pages/pdf2img0148.png', './pdf_pages/pdf2img0149.png', './pdf_pages/pdf2img0150.png', './pdf_pages/pdf2img0151.png', './pdf_pages/pdf2img0152.png', './pdf_pages/pdf2img0153.png', './pdf_pages/pdf2img0154.png', './pdf_pages/pdf2img0155.png', './pdf_pages/pdf2img0156.png', './pdf_pages/pdf2img0157.png', './pdf_pages/pdf2img0158.png', './pdf_pages/pdf2img0159.png', './pdf_pages/pdf2img0160.png', './pdf_pages/pdf2img0161.png', './pdf_pages/pdf2img0162.png', './pdf_pages/pdf2img0163.png', './pdf_pages/pdf2img0164.png', './pdf_pages/pdf2img0165.png', './pdf_pages/pdf2img0166.png', './pdf_pages/pdf2img0167.png', './pdf_pages/pdf2img0168.png', './pdf_pages/pdf2img0169.png', './pdf_pages/pdf2img0170.png', './pdf_pages/pdf2img0171.png', './pdf_pages/pdf2img0172.png', './pdf_pages/pdf2img0173.png', './pdf_pages/pdf2img0174.png', './pdf_pages/pdf2img0175.png', './pdf_pages/pdf2img0176.png', './pdf_pages/pdf2img0177.png', './pdf_pages/pdf2img0178.png', './pdf_pages/pdf2img0179.png', './pdf_pages/pdf2img0180.png', './pdf_pages/pdf2img0181.png', './pdf_pages/pdf2img0182.png', './pdf_pages/pdf2img0183.png', './pdf_pages/pdf2img0184.png', './pdf_pages/pdf2img0185.png', './pdf_pages/pdf2img0186.png', './pdf_pages/pdf2img0187.png', './pdf_pages/pdf2img0188.png', './pdf_pages/pdf2img0189.png', './pdf_pages/pdf2img0190.png', './pdf_pages/pdf2img0191.png', './pdf_pages/pdf2img0192.png', './pdf_pages/pdf2img0193.png', './pdf_pages/pdf2img0194.png', './pdf_pages/pdf2img0195.png', './pdf_pages/pdf2img0196.png', './pdf_pages/pdf2img0197.png', './pdf_pages/pdf2img0198.png', './pdf_pages/pdf2img0199.png', './pdf_pages/pdf2img0200.png', './pdf_pages/pdf2img0201.png', './pdf_pages/pdf2img0202.png', './pdf_pages/pdf2img0203.png', './pdf_pages/pdf2img0204.png', './pdf_pages/pdf2img0205.png', './pdf_pages/pdf2img0206.png', './pdf_pages/pdf2img0207.png', './pdf_pages/pdf2img0208.png', './pdf_pages/pdf2img0209.png', './pdf_pages/pdf2img0210.png', './pdf_pages/pdf2img0211.png', './pdf_pages/pdf2img0212.png', './pdf_pages/pdf2img0213.png', './pdf_pages/pdf2img0214.png', './pdf_pages/pdf2img0215.png', './pdf_pages/pdf2img0216.png', './pdf_pages/pdf2img0217.png', './pdf_pages/pdf2img0218.png', './pdf_pages/pdf2img0219.png', './pdf_pages/pdf2img0220.png', './pdf_pages/pdf2img0221.png', './pdf_pages/pdf2img0222.png', './pdf_pages/pdf2img0223.png', './pdf_pages/pdf2img0224.png', './pdf_pages/pdf2img0225.png', './pdf_pages/pdf2img0226.png', './pdf_pages/pdf2img0227.png', './pdf_pages/pdf2img0228.png', './pdf_pages/pdf2img0229.png', './pdf_pages/pdf2img0230.png', './pdf_pages/pdf2img0231.png', './pdf_pages/pdf2img0232.png', './pdf_pages/pdf2img0233.png', './pdf_pages/pdf2img0234.png', './pdf_pages/pdf2img0235.png', './pdf_pages/pdf2img0236.png', './pdf_pages/pdf2img0237.png', './pdf_pages/pdf2img0238.png', './pdf_pages/pdf2img0239.png', './pdf_pages/pdf2img0240.png', './pdf_pages/pdf2img0241.png', './pdf_pages/pdf2img0242.png', './pdf_pages/pdf2img0243.png', './pdf_pages/pdf2img0244.png', './pdf_pages/pdf2img0245.png', './pdf_pages/pdf2img0246.png', './pdf_pages/pdf2img0247.png', './pdf_pages/pdf2img0248.png', './pdf_pages/pdf2img0249.png', './pdf_pages/pdf2img0250.png', './pdf_pages/pdf2img0251.png', './pdf_pages/pdf2img0252.png', './pdf_pages/pdf2img0253.png', './pdf_pages/pdf2img0254.png', './pdf_pages/pdf2img0255.png', './pdf_pages/pdf2img0256.png', './pdf_pages/pdf2img0257.png', './pdf_pages/pdf2img0258.png', './pdf_pages/pdf2img0259.png', './pdf_pages/pdf2img0260.png', './pdf_pages/pdf2img0261.png', './pdf_pages/pdf2img0262.png', './pdf_pages/pdf2img0263.png'];
var index = 0;

function nextPage() {
    index+=1;
    if (index > images.length - 1) {
     index = 0;
    }

     document.getElementById('imgsrc').src = images[index];

}
//'Previous' button

previous.addEventListener('click', previousPage);

function previousPage(){
    index-=1;
    if (index < 0) {
     index = images.length - 1;
    }

     document.getElementById('imgsrc').src = images[index];

}

function getLatest() {
    obj.value = latestText;

    document.getElementById("version-table").value = version;
    document.getElementById("go-version").value = version;

    document.getElementById("textid").value = latestText;

    document.getElementById("volunteer-table").value = volunteer;
}

function getRaw() {
    obj.value = rawText;
}

function getFilter() {
    obj.value = filterText;
}

function clearTextArea() {
    obj.value = "";
}


function checkSubmit() {
    let proof = document.getElementById("proof-checkbox");
    let format = document.getElementById("format-checkbox");
    let submitbutton = document.getElementById("submit-button");
    if (proof.checked == true && format.checked == true)
        submitbutton.disabled = false;
    else
        submitbutton.disabled = true;
}

function update() {
    data = obj.value;
    newVersion = Number(version) + 1;

    var ref = db.ref("book/" + book + "/pages/" + pageName);
    ref.update({
        "text": data,
        "volunteer": newVolunteer,
        "version": newVersion,
        "format": true,
        "proof": true,
    });



    var ref = db.ref("book/" + book + "/history/" + pageName + "/" + newVersion);
    ref.update({
        "text": data,
        "volunteer": newVolunteer,
    });



    proofedPages[page] = true;
    formatedPages[page] = true;
    var ref = db.ref("book/" + book + "/combine/");
    ref.update({
        "proof": proofedPages,
        "format": formatedPages,
    });


    // var ref = db.ref("book/" + book + "/volunteers/" + uid);
    // ref.update({
    //     "lastpage": Number(page),
    //     "credit": credit + 1,
    // });

    // newPage();
    updateBookDetails();
    incompletedPage();
}


function updateBookDetails() {
    totalProofedPages = 0;
    for (i = 1; i <= proofedPages.length; i++)
        if (proofedPages[i])
            totalProofedPages += 1;

    totalFormatedPages = totalProofedPages;
    completed = (((totalProofedPages) / totalPages) * 100).toFixed(2);

    document.getElementById("bookname-table").value = title;
    document.getElementById("writer-table").value = writer;
    document.getElementById("totalpages-table").value = totalPages;
    document.getElementById("formatedpages-table").value = totalFormatedPages;
    document.getElementById("proofedpages-table").value = totalProofedPages;
    document.getElementById("completed-table").value = completed + '%';
}

function getBookDetails() {
    book = (10000 + bookID).toString();
    ref = db.ref("book/" + book + "/combine");
    ref.on("value", function (snapsot) {
        title = snapsot.val().title;
        writer = snapsot.val().writer;
        totalPages = snapsot.val().pages;
        formatedPages = snapsot.val().format;
        proofedPages = snapsot.val().proof;

        updateBookDetails();
    });
    getTaskedPageNumber();
}


function getTaskedPageNumber() {
    taskPages = [];
    for (let count = 0, i = lastPageInTask + 1; i <= totalPages && count < 5; i++) {
        if (proofedPages[i] == false) {
            count++;
            taskPages.push(i);
            lastPageInTask = i;
        }
    }

    if (taskPages.length == 0) {
        for (i = 0; i < totalPages; i++)
            if (proofedPages[i] == false) {
                lastPageInTask = 0;
                break;
            }

        if (lastPageInTask == 0 && totalPages != undefined) {
            getBookDetails();
            getTaskedPageNumber();
        }
        else
            console.log("All Completed in this book. \nPlease change Book ID");
    }
    console.log(taskPages)
}


function newPage() {
    pageName = (1000 + Number(page)).toString();
    book = (10000 + bookID).toString();


    ref = db.ref("book/" + book + "/pages/" + pageName);

    ref.on("value", function (snapsot) {
        format = snapsot.val().format;
        proof = snapsot.val().proof;
        version = snapsot.val().version;
        volunteer = snapsot.val().volunteer;
        imageLink = snapsot.val().image;

        rawText = snapsot.val().raw;
        filterText = snapsot.val().filter;
        latestText = snapsot.val().text;


        document.getElementById("bookid-table").value = book;
        document.getElementById("page-table").value = page;
        document.getElementById("version-table").value = version;
        document.getElementById("proof-table").value = proof ? "Yes" : "NO";
        document.getElementById("format-table").value = format ? "Yes" : "NO";
        document.getElementById("volunteer-table").value = volunteer;
        document.getElementById("page-image-table").href = imageLink;

        document.getElementById("bookid-nav").value = Number(book);

        document.getElementById("bookid-table-right").value = book;

        document.getElementById("go-bookid").value = Number(book);
        document.getElementById("go-page").value = page;



        document.getElementById("textid").value = latestText;
        document.getElementById("imageid").src = imageLink;


        document.getElementById("go-version").value = version;
    });

    document.getElementById("proof-checkbox").checked = false;
    document.getElementById("format-checkbox").checked = false;
    document.getElementById("submit-button").disabled = true;
}

function goPage() {
    page = Number(document.getElementById("go-page").value)
    bookID = Number(document.getElementById("go-bookid").value) - 10000;
    newPage();
}

function goVersion() {
    oldVersion = Number(document.getElementById("go-version").value);

    ref = db.ref("book/" + book + "/history/" + pageName + "/" + oldVersion);
    ref.on("value", function (snapsot) {

        oldText = snapsot.val().text;
        oldVolunteer = snapsot.val().volunteer;

        document.getElementById("version-table").value = oldVersion;
        document.getElementById("go-version").value = oldVersion;

        document.getElementById("textid").value = oldText;

        document.getElementById("volunteer-table").value = oldVolunteer;

    });
}


function incompletedPage() {
    if ((totalProofedPages != totalPages) && (page + 1) > totalPages)
        page = 0;

    for (i = page + 1; i <= totalPages; i++) {
        if (proofedPages[i] == false) {
            page = i;
            newPage();
            break;
        }
    }
}

function registration() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
        window.location.href = 'index.html'

        //Here if you want you can sign in the user
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage)
    });
}

function isLogin() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            uid = user.uid;
            var providerData = user.providerData;

            newVolunteer = email;

            document.getElementById("profile-button").innerHTML = email;
            // ...
        } else {
            // User is signed out.
            // ...
            window.location.href = 'login.html'
        }
    });
}

function login() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function onSuccess(...args) {
            window.location.href = 'index.html'
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert(errorMessage)
        });
}

function logout() {
    firebase.auth().signOut().then(function () {
        window.location.href = "index.html"
    }).catch(function (error) {
        // An error happened.
        alert(error)
    });
}

function reduceWidth(){
    let image = document.getElementById("imageid");
    image.style.width = (image.clientWidth - 50) + 'px'
}

function increaseWidth(){
    let image = document.getElementById("imageid");
    image.style.width = (image.clientWidth + 50) + 'px'
}

function reduceHeight(){
    let image = document.getElementById("imageid");
    image.style.height = (image.clientHeight - 50) + 'px'
}

function increaseHeight(){
    let image = document.getElementById("imageid");
    image.style.height = (image.clientHeight + 50) + 'px'
}

function initial() {
    isLogin();
    bookID = 1;
    book = (10000 + bookID).toString();


    // ref = db.ref("/book/10006/volunteers/ZFEQBIt3FCTgxJt3MhuP7PF23eF2");
    // ref = db.ref("book/" + book + "/volunteers/" + uid);

    // ref.on("value", function (snapsot) {
    //     console.log(snapsot.val())
    //     lastpage = snapsot.val().lastpage;
    //     credit = Number(snapsot.val().credit);
    // });

    lastpage = 11;
    page = lastpage;
    newPage();
    getBookDetails();
}
