// Function to get URL parameters
function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the project parameter from the URL
const projectId = getQueryParameter('project');

// Define project content
const projects = {
    1: {
        title: "Visualization on Students' Adaptability to Online Education",
        date: "August 2022",
        location: "De Lasalle College of Saint Benilde",
        img: "img/finals_pic.PNG",
        description_header: "This visualization aims to illustrate how students are adapting to online education, highlighting key factors that influence their challenges in a virtual learning environment.",
        description: "The visualization provides a comprehensive look at students’ adaptability to online education, illustrating both the successes and challenges faced. By understanding these dynamics, educators and institutions can better support students in navigating their learning journeys.",
        contribution: "Contribution: <br> <span class='text-light'>Research, Reporting, Visuals, Data Analysis</span>",
        dataset: "<a href='https://www.kaggle.com/datasets/mdmahmudulhasansuzan/students-adaptability-level-in-online-education'>Dataset Link</a>",
        repository: "<a href='assets/DATAVIS_Finals_Report.pbix'>Report Link</a>",
        pres:""
    },
    2: {
        title: "Data Science Challenge: Customer Behavior Analysis",
        date: "December 2022",
        location: "De Lasalle College of Saint Benilde, UBPX",
        img: "img/datachall.PNG",
        description_header: "The UBPX data science challenge tasked students to analyze customer behavior from a given dataset. ",
        description: "The group utilized RFM (Recency, Frequency, Monetary) analysis, time series analysis, and K-means clustering. <br> The group leveraged data science techniques to drive actionable business insights, ultimately enhancing customer satisfaction and loyalty as they gained hands-on experience with these data science techniques in a practical context.",
        contribution: "Contribution: <br> <span class='text-light'>Research, Reporting, Model Development, Data Analysis</span>",
        dataset:'',
        repository: "<a href='https://github.com/JemsIzHere/data_science_challenge.git'>Repository Link</a>",
        pres:""
    },
    3: {
        title: "Fraud Detection Using Logistic Regression",
        date: "June 2023",
        location: "De Lasalle College of Saint Benilde",
        img: "img/fraud_pic.PNG",
        description_header: "This project aims to develop a robust fraud detection system utilizing logistic regression to identify fraudulent transactions in a financial datasets from Taiwan 2005.",
        description: "Originally a Spark and Hive project, it was then converted to a python notebook. By analyzing historical transaction data, the model classifies transactions as either legitimate or fraudulent based on various features such as transaction amount, user behavior, and time of transaction. The goal is to enhance accuracy in fraud detection while minimizing false positives, ultimately improving the security and reliability of financial transactions.",
        contribution: "Contribution: <br> <span class='text-light'>Research, Reporting, Model Development, Data Analysis</span>",
        dataset:"<a href='https://www.kaggle.com/datasets/uciml/default-of-credit-card-clients-dataset/data'>Dataset Link</a>",
        repository: "<a href='https://github.com/JemsIzHere/fraud_detection_bigdata'>Repository Link</a>",
        pres:"<a href='assets/bigdata_final_presentation.pdf'>Report Link</a>"
    },
    4: {
        title: "HärtCheck: A Mobile and Web App for Blood Pressure Monitoring",
        date: "March 2024",
        location: "De Lasalle College of Saint Benilde",
        img: "img/hartcheck.png",
        description_header: "HärtCheck is a mobile and web application designed to monitor a user's blood pressure and provide them with convenient access to doctor consultations.",
        description: "HärtCheck allows users and doctors to monitor blood pressure, receive real-time alerts, and schedule doctor consultations. The app offers a user-friendly interface that simplifies blood pressure tracking, making it easy for users to log their readings and view trends over time. ",
        contribution: "Contribution: <br> UX/UI Design, Research, Mobile and Web Development",
        dataset:"",
        repository: "<a href='https://github.com/JanTalanay/HartCheckWeb'>Repository Link</a>",
        pres:""
    }
};

// Populate the content based on the project ID
const project = projects[projectId];

if (project) {
    document.getElementById('title').innerText = project.title;
    document.getElementById('date').innerText = project.date;
    document.getElementById('location').innerText = project.location;
    document.getElementById('img').innerHTML = `<img src="${project.img}" alt="${project.title}" class="rounded-lg w-full">`;
    document.getElementById('description_header').innerText = project.description_header;
    document.getElementById('description').innerHTML = project.description;
    document.getElementById('contribution').innerHTML = project.contribution;
    document.getElementById('repository').innerHTML = project.repository;
    document.getElementById('dataset').innerHTML = project.dataset;
    document.getElementById('pres').innerHTML = project.pres;
} else {
    document.getElementById('title').innerText = "Project not found.";
}