import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../constants/constants';
import './NewStudentDashboard.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function NewStudentDashboard() {
    
    const [fullName, setFullName] = useState('');
    const [collegeName, setCollegeName] = useState('');
    
  

  const announcements = [
    {
      date: 'November 28, 2020',
      content:
        'Please register your projects, registrations close on December 6, 2020',
    },
  ];

  const resources = [
    {
      message: 'Writing Kickass READMEs',
      url: 'http://www.bauva.com/blog/Writing-Kickass-READMEs/',
      avatar: 'http://www.bauva.com/images/bio-photo.jpg',
    },
    {
      message: 'Everything you need to ace KWoC',
      url:
        'https://medium.com/kharagpur-open-source-society/an-informal-introduction-to-kwoc-62fc5e686f79',
      avatar: 'https://miro.medium.com/max/66/1*S7YHjDmgGnBEJcE116qQ7w.jpeg',
    },
    {
      message: 'How to choose a Project for KWoC',
      url: 'https://telegra.ph/How-to-choose-a-Project-for-KWoC-12-01',
      avatar: 'https://telegra.ph/favicon.ico',
    },
    {
      message: 'Codeacademy: Learn Git',
      url: 'https://www.codecademy.com/learn/learn-git',
      avatar: 'https://www.codecademy.com/favicon.ico',
    },
    {
      message: 'Git Flight Rules: Cookbook for Git',
      url: 'https://github.com/k88hudson/git-flight-rules',
      avatar: 'https://github.com/k88hudson.png',
    },
    {
      message: 'GitHub: Hello World Tutorial',
      url: 'https://guides.github.com/activities/hello-world/',
      avatar: 'https://guides.github.com/favicon.ico',
    },
  ];

  useEffect(() => {
    // check that its not null
    const student_loggedout = localStorage.getItem('student_jwt') === null || localStorage.getItem('student_jwt') === undefined
    if (student_loggedout)
      window.location.pathname = ''

    const URL = `${BACKEND_URL}/student/dashboard`;
    const data = {
      username: localStorage.getItem('student_username'),
    };
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('res is  ', res);
        setFullName(res.name);
        setCollegeName(res.college);
      })
      .catch((err) => {
        console.log('err is ', err);
        alert('Server Error, Please try again');
      });
  }, []);

  // sample data kept for future reference
  // let data = {
  //   name: 'Aditya Vikram Singh',
  //   github: 'xypnox',
  //   college: 'IIT Kharagpur',
  //   commits: {
  //     count: 235,
  //     commits: [
  //       {
  //         hash: '234rrt',
  //         project: 'xypnox/xyplot',
  //         messsage: 'Compress residual images for faster loading speed',
  //       },
  //       {
  //         hash: 'aw3548',
  //         project: 'kossiitkgp/darkHorse',
  //         messsage: 'Fix: Typo and spacing',
  //       },
  //       {
  //         hash: 'hhstb32',
  //         project: 'xypnox/todxpy',
  //         messsage: 'Introduce new sorting for todos',
  //       },
  //       {
  //         hash: 'y67eb6',
  //         project: 'kossiitkgp/KWoC',
  //         messsage: 'Replace navbar with footer for fun',
  //       },
  //     ],
  //   },
  //   // this is the total sum of PRs for all the projects that he has been mentoring.
  //   pullRequests: {
  //     count: 12,
  //     open: 5,
  //     closed: 6,
  //   },
  //   linesOfCode: {
  //     count: '126k',
  //   },
  //   languages: ['Python', 'Javascript', 'HTML', 'CSS'],
  //   projects: ['darkHorse', 'todxpy', 'KWoC'],
  //   resources: [
  //     {
  //       message: 'Writing Kickass READMEs',
  //       url: 'http://www.bauva.com/blog/Writing-Kickass-READMEs/',
  //       avatar: 'http://www.bauva.com/images/bio-photo.jpg',
  //     },
  //     {
  //       message: 'Make a README',
  //       url: 'https://www.makeareadme.com/',
  //       avatar:
  //         'https://d33wubrfki0l68.cloudfront.net/ca149ad795cbdbe3a450dd7985baf0d763cc2fb6/0220f/images/owlbert.jpg',
  //     },
  //     {
  //       message: 'How to Write Beautiful and Meaningful README.md',
  //       url:
  //         'https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991',
  //       avatar:
  //         'https://miro.medium.com/fit/c/96/96/1*50FKErsxynOeSmrUZk5Bsw.jpeg',
  //     },
  //     {
  //       message: 'What being a Google Summer of Code mentor taught me?',
  //       url:
  //         'https://hackernoon.com/what-being-a-google-summer-of-code-mentor-taught-me-8c97aad503a5',
  //       avatar:
  //         'https://hackernoon.com/avatars/pwtNTVrD7BPYArwg776n1wGXP193.png',
  //     },
  //     {
  //       message: 'Official GSoC Mentoring Guide',
  //       url: 'https://google.github.io/gsocguides/mentor/mind-the-gap',
  //       avatar: 'https://google.github.io/gsocguides/images/sun-small.png',
  //     },
  //     {
  //       message: 'OSS Maintainer and being a Mentor',
  //       url: 'https://www.bwplotka.dev/2020/how-to-became-oss-maintainer/',
  //       avatar: 'https://www.bwplotka.dev/images/profile.jpg',
  //     },
  //   ],
  //   student: ['yashrsharma44', 'rakaar', 'orkohunter'],
  //   announcement: [
  //     'Hi the KWOC has just started!',
  //     'Make sure you have submitted the mideval feedback for the student!',
  //     'Hi \n, the end evals have been finished!',
  //   ],
  //   evals: 'Mid Eval',
  // };

  let resourceList = [];
  for (const [index, elements] in resources.entries()) {
    resourceList.push(<li key={index}>{elements}</li>);
  }

  return (
    <div className='mentor-dashboard'>
      <link
        href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
        rel='stylesheet'
      ></link>
      <link rel='stylesheet' href='font-awesome/css/font-awesome.css'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
        rel='stylesheet'
      ></link>
      {/*

         Mentor Dashboard here
            Plans to include the following
             -> Useful links - how to write README, others if any?
             -> Important Announcements
             -> Stats of indiv Mentor ???
      */}
      <Navbar className='is-black' />
      <div className='title-dashboard'><h1>Student Dashboard</h1></div>
      <div className='intro-card'>
        <div className='avatar grow-card'>
          <img
            src={`https://github.com/${localStorage.getItem(
              'mentor_username'
            )}.png`}
            id='avatar-img'
          ></img>
          <br />
          <div className='avatar-content'>
            <p id='mentor-name'>{fullName}</p>
            <p>({localStorage.getItem('student_username')})</p>
            <p>{collegeName}</p>

          </div>
        </div>

        <div className='mentor-stats '>
          <div className='mentor-stats-header'>
            <h1>Stats</h1>
            <p>(Stats will be updated once coding period begins)</p><br/>
          </div>
          <div className='mentor-stats-content'>
            <div className='card-component mstats grow-card'>
              <p className='font-mentor-header'>Commits</p>
              <p className='font-mentor-stats'>0</p>
            </div>
          
            <div className='card-component mstats grow-card'>
              <p className='font-mentor-header'>Pull Requests</p>
              <p className='font-mentor-stats'>0</p>
            </div>

            <div className='card-component mstats grow-card'>
              <p className='font-mentor-header'>Lines of Code</p>
              <p className='font-mentor-stats'>0</p>
            </div>
        </div>
      </div>
     
      </div>

      <div className='projects'>
          <div className='project-header'>
              <h1>Projects</h1>
              <h2 style ={{ textAlign: 'center'}}>Coding period starts from 6th December. You can browse some added projects <a href='/projects'>here</a></h2>
          </div>
         
      </div>

      <section className='resource-card'>
        <div className='resource-header'>
          <b>Resources</b>
        </div>

        <table className='table is-bordered is-striped'>
          <th>Resource Link</th>
          <th>Details</th>

          <tbody>
            {resources.map((resourceCard) => {
              const message = resourceCard.message;
              const url = resourceCard.url;
              const avatar = resourceCard.avatar;

              return (
                <tr>
                  <td>
                    <a href={url}>
                      <img
                        src={avatar}
                        className='avatar-resource'
                        alt='link'
                      ></img>
                    </a>
                  </td>
                  <td>
                    <a href={url}>
                      <p>{message}</p>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <div className='announcements'>
        <h1>Announcements</h1>

        {announcements.map((item, index) => {
          return (
            <div className='anc-card card-component grow-card'>
              <h1>{item.date}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
