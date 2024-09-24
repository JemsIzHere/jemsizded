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
        repository: "<a href='assets/DATAVIS_Finals_Report.pbix'>Report Link</a>"
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
        repository: "<a href='https://github.com/JemsIzHere/data_science_challenge.git'>Repository Link</a>"
    },
    3: {
        title: "World Happiness Report",
        date: "June 2022",
        location: "De Lasalle College of Saint Benilde",
        img: "img/world-happ.png",
        description_header: "A PowerBi report that looks at the different factors that affect the happiness of a country from 2015 to 2019.",
        description: "The World Happiness Report is a comprehensive analysis of the factors that contribute to the happiness of a country. This was an activity done to familiarize the students with PowerBi and Data Analysis.",
        contribution: "Contribution: <br> <span class='text-light'>Research, Reporting, Visuals, Data Analysis</span>",
        dataset:"<a href='https://www.kaggle.com/datasets/mathurinache/world-happiness-report-20152021'>Dataset Link</a>",
        repository: "<a href='assets/World_Happiness_Report.pbix'>Report Link</a>"
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
        repository: "<a href='https://github.com/JanTalanay/HartCheckWeb'>Repository Link</a>"
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
    document.getElementById('reference').innerHTML = project.reference;
} else {
    document.getElementById('title').innerText = "Project not found.";
}