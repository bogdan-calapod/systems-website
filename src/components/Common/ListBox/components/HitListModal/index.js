/**
 * Course hit list modal
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'rodal'

import Main from './components/Main'

const propTypes = {
  data: PropTypes.array,
  visible: PropTypes.bool,
  onClose: PropTypes.func
}

const defaultProps = {
  visible: false,
  onClose: _ => {},
  data: [
    {
      "course": "USO",
      "id": 389,
      "name": "Diana Grecu ",
      "group": " 313CA",
      "pin": "Lecture",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 388,
      "name": "Alin Roșca ",
      "group": " 313CA",
      "pin": "Lecture",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 387,
      "name": "Ebru RESUL ",
      "group": " 312CA",
      "pin": "Lecture",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 386,
      "name": "Gabriel MATEI ",
      "group": " 311CA",
      "pin": "Final",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 385,
      "name": "Horia DRAGOMIR ",
      "group": " 313CA",
      "pin": "Final",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 384,
      "name": "Andrei RADUTA ",
      "group": " 312CA",
      "pin": "Final",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 383,
      "name": "Alexandru MIHAI ",
      "group": " 312CA",
      "pin": "Final",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 382,
      "name": "Bogdan POPA ",
      "group": " 313CA",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 381,
      "name": "Mihnea SERBAN ",
      "group": " 311CA",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 380,
      "name": "Cristian CRETEANU ",
      "group": " 313CA",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "23.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 379,
      "name": "Bogdan TEACA ",
      "group": " 315CD",
      "pin": "Lecture",
      "comment": "",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 378,
      "name": "Tiberiu LEPADATU ",
      "group": " 312CD",
      "pin": "Lecture",
      "comment": "",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 377,
      "name": "Andrei ZAFIU ",
      "group": " 312CD",
      "pin": "Lecture",
      "comment": "",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 376,
      "name": "Adrian NITA ",
      "group": " 311CD",
      "pin": "Final",
      "comment": "",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 375,
      "name": "Emanuel MURARU ",
      "group": " 313CD",
      "pin": "Final",
      "comment": "",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 374,
      "name": "Philip DUMITRU ",
      "group": " 314CD",
      "pin": "Final",
      "comment": "",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 373,
      "name": "Robert RADA ",
      "group": " 312CD",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 372,
      "name": "Horia ION ",
      "group": " 311CD",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 371,
      "name": "George NEACSU ",
      "group": " 311CD",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "21.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 370,
      "name": "Rares FOLEA ",
      "group": " 314CC",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 369,
      "name": "George DIACONU ",
      "group": " 313CD",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 368,
      "name": "Catalin VAJAIALA-TOMICI ",
      "group": " 312CB",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 367,
      "name": "Iuliana BRINZOI ",
      "group": " 313CC",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 366,
      "name": "Bogdan DUMITRANA ",
      "group": " 312CC",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 365,
      "name": "Ionuț MIHALACHE ",
      "group": " 314CA",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 364,
      "name": "Alexandru FAZAKAS ",
      "group": " 311CC",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 363,
      "name": "Valentin MOCANU ",
      "group": " 311CD",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 362,
      "name": "Edwin GRIGORE ",
      "group": " 314CB",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 361,
      "name": "Luca ISTRATE ",
      "group": " 311CA",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 360,
      "name": "Andreia OCANOAIA ",
      "group": " 315CD",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 359,
      "name": "Cosmin TUDOR ",
      "group": " 312CD",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 358,
      "name": "Alexandru LAZAR ",
      "group": " 313CA",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 357,
      "name": "Theo CHIHAIA ",
      "group": " 311CB",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 356,
      "name": "Paul OLARU ",
      "group": " 312CA",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 355,
      "name": "Gabriel BOROGHINA ",
      "group": " 313CB",
      "pin": "Lab",
      "comment": "",
      "date": "20.01.2017",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 354,
      "name": "Andreea SULUGIU ",
      "group": " 316CC",
      "pin": "Midterm",
      "comment": "Hands-on",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 353,
      "name": "Victor DOCA ",
      "group": " 312CC",
      "pin": "Midterm",
      "comment": "Hands-on",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 352,
      "name": "Robert SAMOILESCU ",
      "group": " 315CB",
      "pin": "Midterm",
      "comment": "Hands-on",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 351,
      "name": "Darius NEATU ",
      "group": " 315CA",
      "pin": "Midterm",
      "comment": "Hands-on",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 350,
      "name": "Silvia PRIPOAE ",
      "group": " 311CA",
      "pin": "Midterm",
      "comment": "Hands-on",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 349,
      "name": "Tudor TUDORUȚ ",
      "group": " 311CA",
      "pin": "Midterm",
      "comment": "Hands-on",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 348,
      "name": "Andrei CRIVIDENCO ",
      "group": " 313CC",
      "pin": "Lab",
      "comment": "",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 347,
      "name": "Lucian PERJU ",
      "group": " 314CC",
      "pin": "Lab",
      "comment": "",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 346,
      "name": "George PIRTOACA ",
      "group": " 316CB",
      "pin": "Lab",
      "comment": "",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 345,
      "name": "Cristina IONESCU ",
      "group": " 315CB",
      "pin": "Lab",
      "comment": "",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 344,
      "name": "Vlad PANTEA ",
      "group": " 314CA",
      "pin": "Lab",
      "comment": "",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 343,
      "name": "Andrei STEFANESCU ",
      "group": " 313CA",
      "pin": "Lab",
      "comment": "",
      "date": "08.12.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 342,
      "name": "Mihaela TUDOR",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "02.02.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 341,
      "name": "Călin CRUCERU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "02.02.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 340,
      "name": "Mihai MASALA",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "02.02.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 339,
      "name": "Vlad POȘTOACĂ",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "29.01.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 338,
      "name": "Mihai NAN",
      "group": "",
      "pin": "Lab",
      "comment": "Workshops",
      "date": "29.01.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 337,
      "name": "Paul-Cristian-Florian GHEORGHE",
      "group": "",
      "pin": "Lab",
      "comment": "Workshops",
      "date": "29.01.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 336,
      "name": "Bogdan-Marian MUREŞEANU",
      "group": "",
      "pin": "Lab",
      "comment": "Fourth Assignment",
      "date": "29.01.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 335,
      "name": "Iulian Razvan MATESICA",
      "group": "",
      "pin": "Lab",
      "comment": "Third Assignment",
      "date": "29.01.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 334,
      "name": "Cristi-Alexandru VASILE",
      "group": "",
      "pin": "Final",
      "comment": "Greatest score [1CA]",
      "date": "21.01.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 333,
      "name": "Alexandru ŞORODOC",
      "group": "",
      "pin": "Final",
      "comment": "Final quiz [1CA]",
      "date": "21.01.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 332,
      "name": "Gabriel CRISTACHE",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [1CA]",
      "date": "21.01.2014",
      "oldpin": ""
    },
    {
      "course": "USO",
      "id": 331,
      "name": "Mihai Cătălin ARSENESCU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "21.01.2014",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 330,
      "name": "Denisa TROZNAY",
      "group": "",
      "pin": "Lab",
      "comment": "Workshops",
      "date": "21.01.2014",
      "oldpin": "Workshops"
    },
    {
      "course": "USO",
      "id": 329,
      "name": "Dennis – Adrian PLOSCEANU",
      "group": "",
      "pin": "Lab",
      "comment": "Workshops",
      "date": "21.01.2014",
      "oldpin": "Workshops"
    },
    {
      "course": "USO",
      "id": 328,
      "name": "Flavia OPREA",
      "group": "",
      "pin": "Lab",
      "comment": "Workshops",
      "date": "21.01.2014",
      "oldpin": "Workshops"
    },
    {
      "course": "USO",
      "id": 327,
      "name": "Alexandru-Bogdan IARU",
      "group": "",
      "pin": "Lab",
      "comment": "First Assignment",
      "date": "21.01.2014",
      "oldpin": "First Assignment"
    },
    {
      "course": "USO",
      "id": 326,
      "name": "Doru FILIP",
      "group": "",
      "pin": "Lecture",
      "comment": "Course activity [1CA]",
      "date": "13.01.2014",
      "oldpin": "Course activity [1CA]"
    },
    {
      "course": "USO",
      "id": 325,
      "name": "Ştefan MANCIU",
      "group": "",
      "pin": "Lab",
      "comment": "First Assignment",
      "date": "25.11.2013",
      "oldpin": "First Assignment"
    },
    {
      "course": "USO",
      "id": 324,
      "name": "Marius PETCU",
      "group": "",
      "pin": "Midterm",
      "comment": "Hands-on [1CC]",
      "date": "25.11.2013",
      "oldpin": "Hands-on Exams Midterm [1CC]"
    },
    {
      "course": "USO",
      "id": 323,
      "name": "Alin GHEORGHE",
      "group": "",
      "pin": "Midterm",
      "comment": "Hands-on [1CA]",
      "date": "25.11.2013",
      "oldpin": "Hands-on Exams Midterm [1CA]"
    },
    {
      "course": "USO",
      "id": 322,
      "name": "Vlad MUSCALU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "25.11.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 321,
      "name": "Mihai BRĂNESCU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "25.11.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 320,
      "name": "Codruț GROSU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "25.11.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 319,
      "name": "Theodor SAVUSCAN",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "25.11.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 318,
      "name": "Ştefan BUŞILĂ",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "25.11.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 317,
      "name": "Tiberiu BARBU",
      "group": "",
      "pin": "Lab",
      "comment": "Assignments",
      "date": "01.10.2013",
      "oldpin": "Assignments"
    },
    {
      "course": "USO",
      "id": 316,
      "name": "Mihai BĂRBULESCU",
      "group": "",
      "pin": "Extra",
      "comment": "Lab  Author",
      "date": "01.10.2013",
      "oldpin": "Lab Author"
    },
    {
      "course": "USO",
      "id": 315,
      "name": "Petre EFTIMIE",
      "group": "",
      "pin": "Lab",
      "comment": "Assignments",
      "date": "01.10.2013",
      "oldpin": "Assignments"
    },
    {
      "course": "USO",
      "id": 314,
      "name": "Adrian STRATULAT",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Review",
      "date": "01.10.2013",
      "oldpin": "Lab Reviewer"
    },
    {
      "course": "USO",
      "id": 313,
      "name": "Alex TOMESCU",
      "group": "",
      "pin": "Lab",
      "comment": "Assignments",
      "date": "01.10.2013",
      "oldpin": "Assignments"
    },
    {
      "course": "USO",
      "id": 312,
      "name": "Silvia STEGARU",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Review",
      "date": "01.10.2013",
      "oldpin": "Lab Review"
    },
    {
      "course": "USO",
      "id": 311,
      "name": "Ioana CULIC",
      "group": "",
      "pin": "Final",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Greatest score"
    },
    {
      "course": "USO",
      "id": 310,
      "name": "Cosmin BOACĂ",
      "group": "",
      "pin": "Final",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Greatest score "
    },
    {
      "course": "USO",
      "id": 309,
      "name": "Alexandru ORHEAN",
      "group": "",
      "pin": "Final",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Final Quiz"
    },
    {
      "course": "USO",
      "id": 308,
      "name": "Robert BÎNDAR",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on Exams",
      "date": "08.02.2013",
      "oldpin": "Hands-on Exams"
    },
    {
      "course": "USO",
      "id": 307,
      "name": "Eugen STOICA",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on Exams",
      "date": "08.02.2013",
      "oldpin": "Hands-on Exams"
    },
    {
      "course": "USO",
      "id": 306,
      "name": "Cosmin PETRIȘOR",
      "group": "",
      "pin": "Final",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Final Quiz"
    },
    {
      "course": "USO",
      "id": 305,
      "name": "Alexandru ȚIFREA",
      "group": "",
      "pin": "Final",
      "comment": "Greatest score",
      "date": "08.02.2013",
      "oldpin": "Greatest score"
    },
    {
      "course": "USO",
      "id": 304,
      "name": "Ștefan MIREA",
      "group": "",
      "pin": "Extra",
      "comment": "Workshop",
      "date": "08.02.2013",
      "oldpin": "Workshop"
    },
    {
      "course": "USO",
      "id": 303,
      "name": "Robert ALEXE",
      "group": "",
      "pin": "Extra",
      "comment": "Workshop",
      "date": "08.02.2013",
      "oldpin": "Workshop"
    },
    {
      "course": "USO",
      "id": 302,
      "name": "Vlad Dumitrescu",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall Activity"
    },
    {
      "course": "USO",
      "id": 301,
      "name": "Roxana CIOBANU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 300,
      "name": "Cristian SOARE",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 299,
      "name": "Cristian BUZĂ",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 298,
      "name": "Diana DESPA",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 297,
      "name": "Răzvan MATEI",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 296,
      "name": "Constantin SOARE",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 295,
      "name": "Mădălina HRISTACHE",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 294,
      "name": "Bogdan MARIN",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 293,
      "name": "Marius UNGUREANU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 292,
      "name": "Andrei APRODU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 291,
      "name": "Andrei ȚUICU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "08.02.2013",
      "oldpin": "Overall activity"
    },
    {
      "course": "USO",
      "id": 290,
      "name": "Cristian-Alexandru MOCANU",
      "group": "",
      "pin": "Lab",
      "comment": "Fifth Assignment",
      "date": "14.01.2013",
      "oldpin": "Fifth Assignment"
    },
    {
      "course": "USO",
      "id": 289,
      "name": "Dragos Andrei Calinescu",
      "group": "",
      "pin": "Lab",
      "comment": "Fourth Assignment",
      "date": "14.01.2013",
      "oldpin": "Fourth Assignment"
    },
    {
      "course": "USO",
      "id": 288,
      "name": "Andrei-Dragoş MANEA",
      "group": "",
      "pin": "Lab",
      "comment": "Third Assignment",
      "date": "14.01.2013",
      "oldpin": "Third Assignment"
    },
    {
      "course": "USO",
      "id": 287,
      "name": "Adrian-Mihai IOSIF",
      "group": "",
      "pin": "Lecture",
      "comment": "",
      "date": "14.01.2013",
      "oldpin": "Course activity"
    },
    {
      "course": "USO",
      "id": 286,
      "name": "Alexander Stöckel",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "17.12.2012",
      "oldpin": "Hands-on Exams"
    },
    {
      "course": "USO",
      "id": 285,
      "name": "Georgiana-Diana Ciocîrdel",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "17.12.2012",
      "oldpin": "Hands-on Exams"
    },
    {
      "course": "USO",
      "id": 284,
      "name": "Nicolae Cudlenco",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "17.12.2012",
      "oldpin": "Hands-on Exams"
    },
    {
      "course": "USO",
      "id": 283,
      "name": "Andrei-Dorian Duma",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "17.12.2012",
      "oldpin": "Hands-on Exams"
    },
    {
      "course": "USO",
      "id": 282,
      "name": "Bogdan Calapod",
      "group": "",
      "pin": "Lecture",
      "comment": "",
      "date": "17.12.2012",
      "oldpin": "Course activity"
    },
    {
      "course": "USO",
      "id": 281,
      "name": "Nicolae Bădescu",
      "group": "",
      "pin": "Lab",
      "comment": "Second Assignment",
      "date": "17.12.2012",
      "oldpin": "Second Assignment"
    },
    {
      "course": "USO",
      "id": 280,
      "name": "Andrei Costin Lică",
      "group": "",
      "pin": "Lab",
      "comment": "First Assignment",
      "date": "17.12.2012",
      "oldpin": "First Assignment"
    },
    {
      "course": "USO",
      "id": 279,
      "name": "Andrei Vasiliu",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "17.12.2012",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "USO",
      "id": 278,
      "name": "Tudor Vișan",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "17.12.2012",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "USO",
      "id": 277,
      "name": "Alex Juncu",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Infrastructure",
      "date": "07.10.2012",
      "oldpin": "Lab Infrastructure"
    },
    {
      "course": "USO",
      "id": 276,
      "name": "Voichița Iancu",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "07.10.2012",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "USO",
      "id": 275,
      "name": "Mihnea Dobrescu",
      "group": "",
      "pin": "Extra",
      "comment": "Engine WoUSO",
      "date": "07.10.2012",
      "oldpin": "Engine WoUSO"
    },
    {
      "course": "USO",
      "id": 274,
      "name": "Alexandru Radovici",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "07.10.2012",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "USO",
      "id": 273,
      "name": "Sorina Sandu",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Author",
      "date": "07.10.2012",
      "oldpin": "Lab Author"
    },
    {
      "course": "USO",
      "id": 272,
      "name": "Paul Vlase",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Author",
      "date": "07.10.2012",
      "oldpin": "Lab Author"
    },
    {
      "course": "USO",
      "id": 271,
      "name": "Valentin Ilie",
      "group": "",
      "pin": "Lab",
      "comment": "Assignments",
      "date": "07.10.2012",
      "oldpin": "Assignments"
    },
    {
      "course": "USO",
      "id": 270,
      "name": "Răzvan Pricope",
      "group": "",
      "pin": "Lab",
      "comment": "Assignments",
      "date": "07.10.2012",
      "oldpin": "Assignments"
    },
    {
      "course": "USO",
      "id": 269,
      "name": "Adrian Șendroiu",
      "group": "",
      "pin": "Lab",
      "comment": "Assignments",
      "date": "07.10.2012",
      "oldpin": "Assignments"
    },
    {
      "course": "USO",
      "id": 268,
      "name": "Fănel Ghiță",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Infrastructure",
      "date": "07.10.2012",
      "oldpin": "Lab Infrastructure"
    },
    {
      "course": "USO",
      "id": 267,
      "name": "Eliana Târșa",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "07.10.2012",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "USO",
      "id": 266,
      "name": "Răzvan Dobre",
      "group": "",
      "pin": "Lab",
      "comment": "Linux Assignment",
      "date": "07.10.2012",
      "oldpin": "Linux Assignment"
    },
    {
      "course": "USO",
      "id": 265,
      "name": "Alexandru Olteanu",
      "group": "",
      "pin": "Extra",
      "comment": "Course Quiz",
      "date": "07.10.2012",
      "oldpin": "Course Quiz"
    },
    {
      "course": "USO",
      "id": 264,
      "name": "Alexandru Eftimie",
      "group": "",
      "pin": "Extra",
      "comment": "Engine WoUSO",
      "date": "07.10.2012",
      "oldpin": "Engine WoUSO"
    },
    {
      "course": "USO",
      "id": 263,
      "name": "Mihai Maruseac",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Author",
      "date": "07.10.2012",
      "oldpin": "Lab Author"
    },
    {
      "course": "USO",
      "id": 262,
      "name": "Răzvan Deaconescu",
      "group": "",
      "pin": "Extra",
      "comment": "Course",
      "date": "07.10.2012",
      "oldpin": "Course"
    },
    {
      "course": "USO",
      "id": 261,
      "name": "Răzvan Rughiniș",
      "group": "",
      "pin": "Extra",
      "comment": "Course",
      "date": "07.10.2012",
      "oldpin": "Course"
    },
    {
      "course": "USO",
      "id": 260,
      "name": "Alexandru Heișanu",
      "group": "",
      "pin": "Extra",
      "comment": "Course",
      "date": "07.10.2012",
      "oldpin": "Course"
    },
    {
      "course": "USO",
      "id": 259,
      "name": "Mircea Bardac",
      "group": "",
      "pin": "Extra",
      "comment": "Linux Assignment",
      "date": "07.10.2012",
      "oldpin": "Linux Assignment"
    },
    {
      "course": "USO",
      "id": 258,
      "name": "George Milescu",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2009",
      "date": "07.10.2012",
      "oldpin": "Curriculum Lead 2009"
    },
    {
      "course": "USO",
      "id": 257,
      "name": "Vlad Dogaru",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2010",
      "date": "07.10.2012",
      "oldpin": "Curriculum Lead 2010"
    },
    {
      "course": "USO",
      "id": 256,
      "name": "Laura Vasilescu",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2012",
      "date": "07.10.2012",
      "oldpin": "Curriculum Lead 2012"
    },
    {
      "course": "RL",
      "id": 425,
      "name": "Adrian PANDELICĂ ",
      "group": " 335CC",
      "pin": "Lecture",
      "comment": "CC",
      "date": "28.01.2017",
      "oldpin": "Lecture activity [CC]"
    },
    {
      "course": "RL",
      "id": 424,
      "name": "Robert Tănase ",
      "group": " 334CC",
      "pin": "Lecture",
      "comment": "CC",
      "date": "28.01.2017",
      "oldpin": "Lecture activity [CC]"
    },
    {
      "course": "RL",
      "id": 423,
      "name": "Alexandra CÎRSTIAN ",
      "group": " 333CC",
      "pin": "Lecture",
      "comment": "CC",
      "date": "28.01.2017",
      "oldpin": "Lecture activity [CC]"
    },
    {
      "course": "RL",
      "id": 422,
      "name": "Alexandru ACHIRIŢOAEI ",
      "group": " 335CC",
      "pin": "Final",
      "comment": "CC",
      "date": "28.01.2017",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 421,
      "name": "Cristian MONDIRU ",
      "group": " 334CC",
      "pin": "Final",
      "comment": "CC",
      "date": "28.01.2017",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 420,
      "name": "Alexandru ELISEI ",
      "group": " 333CC",
      "pin": "Final",
      "comment": "CC",
      "date": "28.01.2017",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 419,
      "name": "Andreea DIEACONU ",
      "group": " 335CA",
      "pin": "Lecture",
      "comment": "CA",
      "date": "28.01.2017",
      "oldpin": "Lecture activity [CA]"
    },
    {
      "course": "RL",
      "id": 418,
      "name": "Andrei IONEANU ",
      "group": " 334CA",
      "pin": "Lecture",
      "comment": "CA",
      "date": "28.01.2017",
      "oldpin": "Lecture activity [CA]"
    },
    {
      "course": "RL",
      "id": 417,
      "name": "Sabina HORINCAR ",
      "group": " 331CA",
      "pin": "Lecture",
      "comment": "CA",
      "date": "28.01.2017",
      "oldpin": "Lecture activity [CA]"
    },
    {
      "course": "RL",
      "id": 416,
      "name": "Andrei ŞTEFĂNESCU ",
      "group": " 333CA",
      "pin": "Final",
      "comment": "CA",
      "date": "28.01.2017",
      "oldpin": "Written exam [CA]"
    },
    {
      "course": "RL",
      "id": 415,
      "name": "Laurențiu PICIU ",
      "group": " 333CA",
      "pin": "Final",
      "comment": "CA",
      "date": "28.01.2017",
      "oldpin": "Written exam [CA]"
    },
    {
      "course": "RL",
      "id": 414,
      "name": "Ciprian COSTEA ",
      "group": " 332CA",
      "pin": "Final",
      "comment": "CA",
      "date": "28.01.2017",
      "oldpin": "Written exam [CA]"
    },
    {
      "course": "RL",
      "id": 413,
      "name": "Andreea GURIŢĂ ",
      "group": " 335CB",
      "pin": "Lecture",
      "comment": "CB",
      "date": "23.01.2017",
      "oldpin": "Lecture activity [CB]"
    },
    {
      "course": "RL",
      "id": 412,
      "name": "Ionut OPREA ",
      "group": " 334CB",
      "pin": "Lecture",
      "comment": "CB",
      "date": "23.01.2017",
      "oldpin": "Lecture activity [CB]"
    },
    {
      "course": "RL",
      "id": 411,
      "name": "Rareș VISALOM ",
      "group": " 333CB",
      "pin": "Lecture",
      "comment": "CB",
      "date": "23.01.2017",
      "oldpin": "Lecture activity [CB]"
    },
    {
      "course": "RL",
      "id": 410,
      "name": "Raul PIPIS ",
      "group": " 331CB",
      "pin": "Final",
      "comment": "CB",
      "date": "23.01.2017",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 409,
      "name": "GeorgePÎRTOACĂ ",
      "group": " 335CB",
      "pin": "Final",
      "comment": "CB",
      "date": "23.01.2017",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 408,
      "name": "Mircea TĂNASE ",
      "group": " 335CB",
      "pin": "Final",
      "comment": "CB",
      "date": "23.01.2017",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 407,
      "name": "Liana PĂNĂTĂU ",
      "group": " 335CA",
      "pin": "Lab",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 406,
      "name": "Elena MARINICA ",
      "group": " 335CA",
      "pin": "Lab",
      "comment": "",
      "date": "23.01.2017",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 405,
      "name": "Alexandra GAMAN ",
      "group": " 334CA",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 404,
      "name": "Sergiu WEISZ ",
      "group": " 333CB",
      "pin": "Final",
      "comment": "Hands-on [89 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [89 min]"
    },
    {
      "course": "RL",
      "id": 403,
      "name": "Relu DRAGAN ",
      "group": " 331CB",
      "pin": "Final",
      "comment": "Hands-on [87 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [87 min]"
    },
    {
      "course": "RL",
      "id": 402,
      "name": "Denisa SANDU ",
      "group": " 332CA",
      "pin": "Final",
      "comment": "Hands-on [87 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [87 min]"
    },
    {
      "course": "RL",
      "id": 401,
      "name": "Tudor TUDORUT ",
      "group": " 331CA",
      "pin": "Final",
      "comment": "Hands-on [80 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [80 min]"
    },
    {
      "course": "RL",
      "id": 400,
      "name": "Vlad CORNECI ",
      "group": " 335CC",
      "pin": "Final",
      "comment": "Hands-on [79 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [79 min]"
    },
    {
      "course": "RL",
      "id": 399,
      "name": "Dragos STURZU ",
      "group": " 333CB",
      "pin": "Final",
      "comment": "Hands-on [75 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [75 min]"
    },
    {
      "course": "RL",
      "id": 398,
      "name": "Cosmin PRUNARU ",
      "group": " 332CC",
      "pin": "Final",
      "comment": "Hands-on [73 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [73 min]"
    },
    {
      "course": "RL",
      "id": 397,
      "name": "Alexandru MUSTATA ",
      "group": " 331CB",
      "pin": "Final",
      "comment": "Hands-on [71 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [71 min]"
    },
    {
      "course": "RL",
      "id": 396,
      "name": "Andrei PETRESCU ",
      "group": " 331CB",
      "pin": "Final",
      "comment": "Hands-on [59 min]",
      "date": "14.01.2017",
      "oldpin": "Hands-on Exam [59 min]"
    },
    {
      "course": "RL",
      "id": 395,
      "name": "Cristiana TRIFU ",
      "group": " 335CC",
      "pin": "Lab",
      "comment": "",
      "date": "05.12.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 394,
      "name": "Lucian PERJU ",
      "group": " 334CC",
      "pin": "Lab",
      "comment": "",
      "date": "05.12.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 393,
      "name": "Victor Silviu DOCA ",
      "group": " 332CC",
      "pin": "Lab",
      "comment": "",
      "date": "05.12.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 392,
      "name": "Roxana RADU ",
      "group": " 335CB",
      "pin": "Lab",
      "comment": "",
      "date": "05.12.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 391,
      "name": "Filip MUNTEANU ",
      "group": " 332CB",
      "pin": "Lab",
      "comment": "",
      "date": "05.12.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 390,
      "name": "Razvan CHITU ",
      "group": " 335CA",
      "pin": "Lab",
      "comment": "",
      "date": "05.12.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 389,
      "name": "Radu Stochitoiu ",
      "group": " 332CA",
      "pin": "Lab",
      "comment": "",
      "date": "05.12.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 388,
      "name": "Silvia PRIPOAE ",
      "group": " 331 CA",
      "pin": "Lab",
      "comment": "",
      "date": "05.12.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 387,
      "name": "Mircea PLATON ",
      "group": " 331CC",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2016",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 386,
      "name": "Andrei MARDALE ",
      "group": " 334CB",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2016",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 385,
      "name": "Robert-Florian SAMOILESCU ",
      "group": " 335CB",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2016",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 384,
      "name": "Alexandru MOCANU ",
      "group": " 331CB",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2016",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 383,
      "name": "Ştefan-Adrian POPA ",
      "group": " 331CA",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2016",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 382,
      "name": "FILIP Ion-Dorinel",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "23.01.2016",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 381,
      "name": "PREDA Ştefan-Alexandru",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "23.01.2016",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 380,
      "name": "GHIȚĂ Cristian-Alin",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "23.01.2016",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 379,
      "name": "PETCU Marius",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "23.01.2016",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 378,
      "name": "Diana ION",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "23.01.2016",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 377,
      "name": "Vasile ŢONCU",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "23.01.2016",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 376,
      "name": "Iulian-Răzvan MATEŞICĂ",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "23.01.2016",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 375,
      "name": "MURARU George-Cristian",
      "group": "",
      "pin": "Lecture",
      "comment": "CB",
      "date": "22.01.2016",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 374,
      "name": "ENE Orlando-Georgian",
      "group": "",
      "pin": "Lecture",
      "comment": "CB",
      "date": "22.01.2016",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 373,
      "name": "Alin-Andrei GRIGOREAN",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "22.01.2016",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 372,
      "name": "Bogdan Cristian BĂLOI",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "22.01.2016",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 371,
      "name": "Ştefan STAMATE",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "22.01.2016",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 370,
      "name": "Călin-Cristian CRUCERU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "22.01.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 369,
      "name": "Andrei-Alexandru STOIA",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "22.01.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 368,
      "name": "Andrei URSACHE",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "22.01.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 367,
      "name": "MUSCALU Vlad",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "22.01.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 366,
      "name": "Paul DUMITRIU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "22.01.2016",
      "oldpin": "Overall involvement"
    },
    {
      "course": "RL",
      "id": 365,
      "name": "Bogdan GHIŢĂ",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on ",
      "date": "19.01.2016",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 364,
      "name": "Andrei-Silviu DRAGNEA",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on ",
      "date": "19.01.2016",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 363,
      "name": "Flavia OPREA",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on ",
      "date": "19.01.2016",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 362,
      "name": "Alexandru BĂLAN",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on ",
      "date": "19.01.2016",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 361,
      "name": "Dragoş-Florin COSTEA",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on ",
      "date": "19.01.2016",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 360,
      "name": "Alexandros DIMOS",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on ",
      "date": "19.01.2016",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 359,
      "name": "Dennis-Adrian PLOSCEANU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on ",
      "date": "19.01.2016",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 358,
      "name": "Călin-Cristian CRUCERU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2015",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 357,
      "name": "Radu-Adrian OANCEA",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2015",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 356,
      "name": "Ştefan-Cristian ŞTEFANCA",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2015",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 355,
      "name": "Dan-Ioan BOLOHAN",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2015",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 354,
      "name": "George Bogdan OPREA",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2015",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 353,
      "name": "Răzvan ZAVATE",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2015",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 352,
      "name": "Răzvan-Marcel BĂRBĂSCU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2015",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 351,
      "name": "Ştefan-Dan CIOCÎRLAN",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "23.11.2015",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 350,
      "name": "Lucian OANCEA",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [80 min]",
      "date": "17.01.2015",
      "oldpin": "Hands-on Exam [80 min]"
    },
    {
      "course": "RL",
      "id": 349,
      "name": "Andrei DUMA",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [77 min]",
      "date": "17.01.2015",
      "oldpin": "Hands-on Exam [77 min]"
    },
    {
      "course": "RL",
      "id": 348,
      "name": "Andrei Costin LICA",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [75 min]",
      "date": "17.01.2015",
      "oldpin": "Hands-on Exam [75 min]"
    },
    {
      "course": "RL",
      "id": 347,
      "name": "Ciprian NUȚESCU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [74 min]",
      "date": "17.01.2015",
      "oldpin": "Hands-on Exam [74 min]"
    },
    {
      "course": "RL",
      "id": 346,
      "name": "Alexandra GHIȚĂ",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [70 min]",
      "date": "17.01.2015",
      "oldpin": "Hands-on Exam [70 min]"
    },
    {
      "course": "RL",
      "id": 345,
      "name": "Victor CIUREL",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [69 min]",
      "date": "17.01.2015",
      "oldpin": "Hands-on Exam [69 min]"
    },
    {
      "course": "RL",
      "id": 344,
      "name": "Marius Stefan UNGUREANU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [64 min]",
      "date": "17.01.2015",
      "oldpin": "Hands-on Exam [64 min]"
    },
    {
      "course": "RL",
      "id": 343,
      "name": "Andreea-Lucia ILIEș",
      "group": "",
      "pin": "Lab",
      "comment": "week 14",
      "date": "16.01.2015",
      "oldpin": "Overall involvement [week 14]"
    },
    {
      "course": "RL",
      "id": 342,
      "name": "Constantin-Eduard STANILOIU",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "14.01.2015",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 341,
      "name": "Robert-Ioan ROVENTA",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "14.01.2015",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 340,
      "name": "Ioana TEODORESCU",
      "group": "",
      "pin": "Lab",
      "comment": "week 12",
      "date": "14.01.2015",
      "oldpin": "Overall involvement [week 12]"
    },
    {
      "course": "RL",
      "id": 339,
      "name": "Constantin COSTESCU",
      "group": "",
      "pin": "Lab",
      "comment": "week 9",
      "date": "14.01.2015",
      "oldpin": "Overall involvement [week 9]"
    },
    {
      "course": "RL",
      "id": 338,
      "name": "Octavian GRIGORESCU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "02.12.2014",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 337,
      "name": "Oana STROIE",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "02.12.2014",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 336,
      "name": "Alexandru Marian STANCIOIU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "02.12.2014",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 335,
      "name": "Radu CONSTANTINESCU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "02.12.2014",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 334,
      "name": "Mihai-Alexandru VASILIU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "02.12.2014",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 333,
      "name": "Bogdan CIOBANU",
      "group": "",
      "pin": "Lab",
      "comment": "week 6",
      "date": "02.12.2014",
      "oldpin": "Overall involvement [week 6]"
    },
    {
      "course": "RL",
      "id": 332,
      "name": "Stefan-Gabriel MIREA",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "12.11.2014",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 331,
      "name": "Gabriel SAMOILĂ",
      "group": "",
      "pin": "Lecture",
      "comment": "CB",
      "date": "11.11.2014",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 330,
      "name": "Madalina HRISTACHE",
      "group": "",
      "pin": "Lab",
      "comment": "week 3",
      "date": "11.11.2014",
      "oldpin": "Overall involvement [week 3]"
    },
    {
      "course": "RL",
      "id": 329,
      "name": "Cristian GRIGORAŞ",
      "group": "",
      "pin": "Lecture",
      "comment": "Lecture involvement [CC]",
      "date": "18.01.2014",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 328,
      "name": "Lorena-Roberta DOBRESCU",
      "group": "",
      "pin": "Lecture",
      "comment": "Lecture involvement [CC]",
      "date": "18.01.2014",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 327,
      "name": "Ramon NĂSTASE",
      "group": "",
      "pin": "Lecture",
      "comment": "Lecture involvement [CB]",
      "date": "18.01.2014",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 326,
      "name": "Bogdan Daniel NICULA",
      "group": "",
      "pin": "Lecture",
      "comment": "Lecture involvement [CB]",
      "date": "18.01.2014",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 325,
      "name": "Mădălina-Andreea GROSU",
      "group": "",
      "pin": "Lecture",
      "comment": "Lecture involvement [CB]",
      "date": "18.01.2014",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 324,
      "name": "Ionuţ-Răzvan IONIŢĂ",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "18.01.2014",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 323,
      "name": "Theodor-Cosmin DIDII",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "18.01.2014",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 322,
      "name": "Mihai-Dragoş TIRIPLICĂ",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "18.01.2014",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 321,
      "name": "Alexandru CONSTANTIN",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "18.01.2014",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 320,
      "name": "Raul-Constantin TABACU",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "18.01.2014",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 319,
      "name": "Valentina-Camelia BOJAN",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "18.01.2014",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 318,
      "name": "Nicolae IVAN",
      "group": "",
      "pin": "Lab",
      "comment": "week 14",
      "date": "15.01.2014",
      "oldpin": "Overall involvement [week 14]"
    },
    {
      "course": "RL",
      "id": 317,
      "name": "Alexandru-Ciprian FĂRCĂŞANU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [80 min]",
      "date": "11.01.2014",
      "oldpin": "Hands-on Exam [80 min]"
    },
    {
      "course": "RL",
      "id": 316,
      "name": "Corneliu-Florin PASCU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [80 min]",
      "date": "11.01.2014",
      "oldpin": "Hands-on Exam [80 min]"
    },
    {
      "course": "RL",
      "id": 315,
      "name": "Andrei POENARU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [73 min]",
      "date": "11.01.2014",
      "oldpin": "Hands-on Exam [73 min]"
    },
    {
      "course": "RL",
      "id": 314,
      "name": "Andrei Daniel DATCU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [71 min]",
      "date": "11.01.2014",
      "oldpin": "Hands-on Exam [71 min]"
    },
    {
      "course": "RL",
      "id": 313,
      "name": "Dragos BADEA",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on [64 min]",
      "date": "11.01.2014",
      "oldpin": "Hands-on Exam [64 min]"
    },
    {
      "course": "RL",
      "id": 312,
      "name": "Mihai ZAMFIRESCU",
      "group": "",
      "pin": "Lab",
      "comment": "week 12",
      "date": "08.01.2014",
      "oldpin": "Overall involvement [week 12]"
    },
    {
      "course": "RL",
      "id": 311,
      "name": "Andrei Marius DINCU",
      "group": "",
      "pin": "Lab",
      "comment": "week 9",
      "date": "18.12.2013",
      "oldpin": "Overall involvement [week 9]"
    },
    {
      "course": "RL",
      "id": 310,
      "name": "Ionuţ-Gabriel RĂDUCU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "20.11.2013",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 309,
      "name": "Andrei PREDA",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "20.11.2013",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 308,
      "name": "Ionel Valentin GHIŢĂ",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "20.11.2013",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 307,
      "name": "Dragoş DUMITRESCU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "20.11.2013",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 306,
      "name": "Laura-Adriana SAVU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "20.11.2013",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 305,
      "name": "Paul URZICEANU",
      "group": "",
      "pin": "Lab",
      "comment": "week 6",
      "date": "19.11.2013",
      "oldpin": "Overall involvement [week 6]"
    },
    {
      "course": "RL",
      "id": 304,
      "name": "Alexandru SURDU",
      "group": "",
      "pin": "Lab",
      "comment": "week 3",
      "date": "29.10.2013",
      "oldpin": "Overall involvement [week 3]"
    },
    {
      "course": "RL",
      "id": 303,
      "name": "Constantin CARAPENCEA",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "21.01.2013",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 302,
      "name": "Alexandru SÎRBU",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "21.01.2013",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 301,
      "name": "Vladimir DIACONESCU",
      "group": "",
      "pin": "Final",
      "comment": "CB",
      "date": "21.01.2013",
      "oldpin": "Written exam [CB]"
    },
    {
      "course": "RL",
      "id": 300,
      "name": "Oana Georgiana NICULĂESCU",
      "group": "",
      "pin": "Lecture",
      "comment": "CB",
      "date": "21.01.2013",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 299,
      "name": "Marius AVRAM",
      "group": "",
      "pin": "Lecture",
      "comment": "CB",
      "date": "21.01.2013",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 298,
      "name": "Şerban-Mihnea WALTTER",
      "group": "",
      "pin": "Lecture",
      "comment": "CB",
      "date": "21.01.2013",
      "oldpin": "Lecture involvement [CB]"
    },
    {
      "course": "RL",
      "id": 297,
      "name": "Constantin-Alin UNGUREANU",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "20.01.2013",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 296,
      "name": "Nicolae Valentin CIOBANU",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "20.01.2013",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 295,
      "name": "Valentina Mihaela MANEA",
      "group": "",
      "pin": "Final",
      "comment": "CC",
      "date": "20.01.2013",
      "oldpin": "Written exam [CC]"
    },
    {
      "course": "RL",
      "id": 294,
      "name": "Marian  Octavian PREDA",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "20.01.2013",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 293,
      "name": "Vlad-Daniel BAROSAN",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "20.01.2013",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 292,
      "name": "Robert DOLCA",
      "group": "",
      "pin": "Lecture",
      "comment": "CC",
      "date": "20.01.2013",
      "oldpin": "Lecture involvement [CC]"
    },
    {
      "course": "RL",
      "id": 291,
      "name": "Andreea MARTINOVICI",
      "group": "",
      "pin": "Lab",
      "comment": "week 14",
      "date": "16.01.2013",
      "oldpin": "Overall involvement [week 14]"
    },
    {
      "course": "RL",
      "id": 290,
      "name": "Vlad-Ştefan GRIGORIŢĂ",
      "group": "",
      "pin": "Lab",
      "comment": "week 12",
      "date": "12.01.2013",
      "oldpin": "Overall involvement [week 12]"
    },
    {
      "course": "RL",
      "id": 289,
      "name": "Mihai-Cristian COŞĂREANU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "12.01.2013",
      "oldpin": "Top score [hands-on exam]"
    },
    {
      "course": "RL",
      "id": 288,
      "name": "Ancuţa-Petronela BÂRZU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "12.01.2013",
      "oldpin": "Top score [hands-on exam]"
    },
    {
      "course": "RL",
      "id": 287,
      "name": "Andrei Radu PĂTRĂŞCOIU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "12.01.2013",
      "oldpin": "Top score [hands-on exam]"
    },
    {
      "course": "RL",
      "id": 286,
      "name": "Simion Vlad BOGOLIN",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "12.01.2013",
      "oldpin": "Top score [hands-on exam]"
    },
    {
      "course": "RL",
      "id": 285,
      "name": "Andrei Bogdan PARVU",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "12.01.2013",
      "oldpin": "Top score [hands-on exam]"
    },
    {
      "course": "RL",
      "id": 284,
      "name": "Paul SĂPUNARU",
      "group": "",
      "pin": "Lab",
      "comment": "week 9",
      "date": "28.11.2012",
      "oldpin": "Overall involvement [week 9]"
    },
    {
      "course": "RL",
      "id": 283,
      "name": "Carol Robert MUTULEANU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "28.11.2012",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 282,
      "name": "Mariana MĂRĂȘOIU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "28.11.2012",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 281,
      "name": "Cozmin VELCIU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "28.11.2012",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 280,
      "name": "Cristian RUŢĂ",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "28.11.2012",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 279,
      "name": "Alexandru  Teodor PREDA",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "28.11.2012",
      "oldpin": "Top score [midterm quiz]"
    },
    {
      "course": "RL",
      "id": 278,
      "name": "Dragos FOIANU",
      "group": "",
      "pin": "Lab",
      "comment": "week 6",
      "date": "20.11.2012",
      "oldpin": "Overall involvement [week 6]"
    },
    {
      "course": "RL",
      "id": 277,
      "name": "Victor DODON",
      "group": "",
      "pin": "Lab",
      "comment": "week 3",
      "date": "31.10.2012",
      "oldpin": "Overall involvement [week 3]"
    },
    {
      "course": "RL",
      "id": 276,
      "name": "Alexandru JUNCU",
      "group": "",
      "pin": "Extra",
      "comment": "Linux Homework",
      "date": "06.10.2012",
      "oldpin": "Linux Homework"
    },
    {
      "course": "RL",
      "id": 275,
      "name": "George Milescu",
      "group": "",
      "pin": "Extra",
      "comment": "Hands-on Exam Coordinator",
      "date": "06.10.2012",
      "oldpin": "Hands-on Exam Coordinator"
    },
    {
      "course": "RL",
      "id": 274,
      "name": "Florin Stancu",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "06.10.2012",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 273,
      "name": "Razvan Prejbeanu",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "06.10.2012",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 272,
      "name": "Alina Vlăduțu",
      "group": "",
      "pin": "Extra",
      "comment": "Lecture Quizzes",
      "date": "06.10.2012",
      "oldpin": "Lecture Quizzes"
    },
    {
      "course": "RL",
      "id": 271,
      "name": "Silvia Marcu",
      "group": "",
      "pin": "Extra",
      "comment": "Quiz",
      "date": "06.10.2012",
      "oldpin": "Quiz"
    },
    {
      "course": "RL",
      "id": 270,
      "name": "Rares Dumitrache",
      "group": "",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "06.10.2012",
      "oldpin": "Hands-on Exam"
    },
    {
      "course": "RL",
      "id": 269,
      "name": "Andrei Epure",
      "group": "",
      "pin": "Extra",
      "comment": "Site de curs",
      "date": "06.10.2012",
      "oldpin": "Site de curs"
    },
    {
      "course": "RL",
      "id": 268,
      "name": "Cătălin Frățilă",
      "group": "",
      "pin": "Extra",
      "comment": "Hands-on Exam Supervisor",
      "date": "06.10.2012",
      "oldpin": "Hands-on Exam Supervisor"
    },
    {
      "course": "RL",
      "id": 267,
      "name": "Sergiu Costea",
      "group": "",
      "pin": "Extra",
      "comment": "Lecture Slides",
      "date": "06.10.2012",
      "oldpin": "Lecture Slides"
    },
    {
      "course": "RL",
      "id": 266,
      "name": "Fănel Ghiță",
      "group": "",
      "pin": "Extra",
      "comment": "Facilities",
      "date": "06.10.2012",
      "oldpin": "Facilities"
    },
    {
      "course": "RL",
      "id": 265,
      "name": "Mihai Prică",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Content Supervisor",
      "date": "06.10.2012",
      "oldpin": "Lab Content Supervisor"
    },
    {
      "course": "RL",
      "id": 264,
      "name": "Cristian Chilipirea",
      "group": "",
      "pin": "Extra",
      "comment": "Lecture Slides",
      "date": "06.10.2012",
      "oldpin": "Lecture Slides"
    },
    {
      "course": "RL",
      "id": 263,
      "name": "Cătălin Nicuțar",
      "group": "",
      "pin": "Extra",
      "comment": "Lab Cheat Sheets",
      "date": "06.10.2012",
      "oldpin": "Lab Cheat Sheets"
    },
    {
      "course": "RL",
      "id": 262,
      "name": "Răzvan Dobre",
      "group": "",
      "pin": "Extra",
      "comment": "Workshop",
      "date": "06.10.2012",
      "oldpin": "Workshop"
    },
    {
      "course": "RL",
      "id": 261,
      "name": "Laura Ruse",
      "group": "",
      "pin": "Extra",
      "comment": "Quiz",
      "date": "06.10.2012",
      "oldpin": "Quiz"
    },
    {
      "course": "RL",
      "id": 260,
      "name": "Răzvan Deaconescu",
      "group": "",
      "pin": "Extra",
      "comment": "Linux Homework",
      "date": "06.10.2012",
      "oldpin": "Linux Homework"
    },
    {
      "course": "RL",
      "id": 259,
      "name": "Răzvan Rughiniș",
      "group": "",
      "pin": "Extra",
      "comment": "Course",
      "date": "06.10.2012",
      "oldpin": "Course"
    },
    {
      "course": "RL",
      "id": 258,
      "name": "Nicolae Țăpuș",
      "group": "",
      "pin": "Extra",
      "comment": "Course",
      "date": "06.10.2012",
      "oldpin": "Course"
    },
    {
      "course": "RL",
      "id": 257,
      "name": "Mircea Bardac",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2009",
      "date": "06.10.2012",
      "oldpin": "Curriculum Lead 2009"
    },
    {
      "course": "RL",
      "id": 256,
      "name": "Traian Popeea",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2010",
      "date": "06.10.2012",
      "oldpin": "Curriculum Lead 2010"
    },
    {
      "course": "RL",
      "id": 255,
      "name": "Mihai Bucicoiu",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2011",
      "date": "06.10.2012",
      "oldpin": "Curriculum Lead 2011"
    },
    {
      "course": "RL",
      "id": 254,
      "name": "Mihai Carabaș",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2012",
      "date": "06.10.2012",
      "oldpin": "Curriculum Lead 2012"
    },
    {
      "course": "PR",
      "id": 304,
      "name": "Ana Ruxandra STAMATIU",
      "group": "343C2",
      "pin": "Final",
      "comment": "Top score & Hands-on",
      "date": "10.02.2017",
      "oldpin": "Hand-on Exam & Top score"
    },
    {
      "course": "PR",
      "id": 303,
      "name": "Horia STOENESCU",
      "group": "341C1",
      "pin": "Final",
      "comment": "",
      "date": "10.02.2017",
      "oldpin": "Top score"
    },
    {
      "course": "PR",
      "id": 302,
      "name": "Radu-Paul RĂDULESCU ",
      "group": "342C1",
      "pin": "Final",
      "comment": "",
      "date": "10.02.2017",
      "oldpin": "Top score"
    },
    {
      "course": "PR",
      "id": 301,
      "name": "Darius MIHAI ",
      "group": "342C1",
      "pin": "Final",
      "comment": "",
      "date": "10.02.2017",
      "oldpin": "Top score"
    },
    {
      "course": "PR",
      "id": 300,
      "name": "Flavia OPREA ",
      "group": "341C1",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "10.02.2017",
      "oldpin": "Hand-on Exam"
    },
    {
      "course": "PR",
      "id": 299,
      "name": "Irina-Georgiana VLĂDULESCU ",
      "group": "343C1",
      "pin": "Final",
      "comment": "Hands-on",
      "date": "10.02.2017",
      "oldpin": "Hand-on Exam"
    },
    {
      "course": "PR",
      "id": 298,
      "name": "Ion-Dorinel FILIP ",
      "group": "341C1",
      "pin": "Final",
      "comment": "Top score & Hands-on",
      "date": "10.02.2017",
      "oldpin": "Hand-on Exam & Top score"
    },
    {
      "course": "PR",
      "id": 297,
      "name": "Cristian-Marian MĂRCULESCU ",
      "group": "343C1",
      "pin": "Final",
      "comment": "",
      "date": "10.02.2017",
      "oldpin": "Final Quiz"
    },
    {
      "course": "PR",
      "id": 296,
      "name": "Iulian-Răzvan MATEȘICĂ ",
      "group": "342C1",
      "pin": "Final",
      "comment": "",
      "date": "10.02.2017",
      "oldpin": "Final Quiz"
    },
    {
      "course": "PR",
      "id": 295,
      "name": "CRUCERU Călin-Cristian ",
      "group": "341C3",
      "pin": "Final",
      "comment": "",
      "date": "08.02.2017",
      "oldpin": "Final Quiz"
    },
    {
      "course": "PR",
      "id": 294,
      "name": "Madalin-Andrei ANDREICA ",
      "group": "341C1",
      "pin": "Final ",
      "comment": "",
      "date": "08.02.2017",
      "oldpin": "Final Quiz"
    },
    {
      "course": "PR",
      "id": 293,
      "name": "Laurentiu Ionut POPESCU ",
      "group": "1232E",
      "pin": "Midterm",
      "comment": "",
      "date": "24.11.2016",
      "oldpin": "Midterm Quiz"
    },
    {
      "course": "PR",
      "id": 292,
      "name": "George Bogdan OPREA ",
      "group": "342C1",
      "pin": "Midterm",
      "comment": "",
      "date": "24.11.2016",
      "oldpin": "Midterm Quiz & Top score"
    },
    {
      "course": "PR",
      "id": 291,
      "name": "Dragoș-Florin COSTEA ",
      "group": "341C1",
      "pin": "Midterm",
      "comment": "",
      "date": "24.11.2016",
      "oldpin": "Midterm Quiz"
    },
    {
      "course": "PR",
      "id": 291,
      "name": "Dragoș-Florin COSTEA ",
      "group": "341C1",
      "pin": "Final",
      "comment": "Top score & Hands-on",
      "date": "24.11.2016",
      "oldpin": "Hand-on Exam Top score"
    },
    {
      "course": "PR",
      "id": 290,
      "name": "Dan-Ștefan CIOCÎRLAN",
      "group": "343C1",
      "pin": "Final",
      "comment": "Top score & Hands-on",
      "date": "24.11.2016",
      "oldpin": "Final Quiz\nHand-on Exam Top score"
    },
    {
      "course": "PR",
      "id": 290,
      "name": "Dan-Ștefan CIOCÎRLAN ",
      "group": "343C1",
      "pin": "Midterm",
      "comment": "",
      "date": "24.11.2016",
      "oldpin": "Midterm Quiz\n"
    },
    {
      "course": "PR",
      "id": 289,
      "name": "Octavian GRIGORESCU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "10.12.2015",
      "oldpin": "Midterm Quiz"
    },
    {
      "course": "PR",
      "id": 288,
      "name": "Adrian DOBRICĂ",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "10.12.2015",
      "oldpin": "Midterm Quiz"
    },
    {
      "course": "PR",
      "id": 287,
      "name": "Eliza-Maria MARCU",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "10.12.2015",
      "oldpin": "Midterm Quiz"
    },
    {
      "course": "PR",
      "id": 286,
      "name": "Ionuț RADUCU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "04.12.2014",
      "oldpin": "Overall activity"
    },
    {
      "course": "PR",
      "id": 285,
      "name": "Florin PAPA",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "04.12.2014",
      "oldpin": "Best score [midterm]"
    },
    {
      "course": "PR",
      "id": 284,
      "name": "Valentina BOJAN",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "04.12.2014",
      "oldpin": "Best score [midterm]"
    },
    {
      "course": "PR",
      "id": 283,
      "name": "Valentin GHITA",
      "group": "",
      "pin": "Midterm",
      "comment": "",
      "date": "04.12.2014",
      "oldpin": "Best score [midterm]"
    },
    {
      "course": "PR",
      "id": 282,
      "name": "Raul TABACU",
      "group": "",
      "pin": "Lab",
      "comment": "",
      "date": "04.12.2014",
      "oldpin": "Overall activity"
    },
    {
      "course": "PR",
      "id": 281,
      "name": "Cristian Ruță",
      "group": "",
      "pin": "Final",
      "comment": "Best time for hands-on exam [20.01.2014]",
      "date": "20.01.2014",
      "oldpin": "Best time for hands-on exam [20.01.2014]"
    },
    {
      "course": "PR",
      "id": 280,
      "name": "Mihail Dunaev",
      "group": "",
      "pin": "Lab",
      "comment": "week 14",
      "date": "16.01.2014",
      "oldpin": "Overall involvement [Week 14]"
    },
    {
      "course": "PR",
      "id": 279,
      "name": "Laura Savu",
      "group": "",
      "pin": "Lab",
      "comment": "week 14",
      "date": "16.01.2014",
      "oldpin": "Overall involvement [Week 14]"
    },
    {
      "course": "PR",
      "id": 278,
      "name": "Ruxandra Trandafir",
      "group": "",
      "pin": "Extra",
      "comment": "Question of the Night",
      "date": "16.01.2014",
      "oldpin": "Question of the Night"
    },
    {
      "course": "PR",
      "id": 277,
      "name": "Oana Niculăescu",
      "group": "",
      "pin": "Extra",
      "comment": "On-line activity",
      "date": "16.01.2014",
      "oldpin": "On-line activity"
    },
    {
      "course": "PR",
      "id": 276,
      "name": "Vlad Traistă Popescu",
      "group": "",
      "pin": "Lab",
      "comment": "week 12",
      "date": "16.01.2014",
      "oldpin": "Overall involvement [Week 12]"
    },
    {
      "course": "PR",
      "id": 275,
      "name": "Victor Dodon",
      "group": "",
      "pin": "Lab",
      "comment": "week 9",
      "date": "16.01.2014",
      "oldpin": "Overall involvement [Week 9]"
    },
    {
      "course": "PR",
      "id": 274,
      "name": "Andreea Martinovici",
      "group": "",
      "pin": "Extra",
      "comment": "Question of the Night",
      "date": "28.10.2013",
      "oldpin": "Question of the Night"
    },
    {
      "course": "PR",
      "id": 273,
      "name": "Mariana Mărășoiu",
      "group": "",
      "pin": "Extra",
      "comment": "On-line activity",
      "date": "28.10.2013",
      "oldpin": "On-line activity"
    },
    {
      "course": "PR",
      "id": 272,
      "name": "Dragoș Foianu",
      "group": "",
      "pin": "Lab",
      "comment": "week 6",
      "date": "28.10.2013",
      "oldpin": "Overall involvement [Week 6]"
    },
    {
      "course": "PR",
      "id": 271,
      "name": "Mihai Coșăreanu",
      "group": "",
      "pin": "Lab",
      "comment": "week 3",
      "date": "14.10.2013",
      "oldpin": "Overall involvement [Week 3]"
    },
    {
      "course": "PR",
      "id": 270,
      "name": "Mihai Pleșea",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "PR",
      "id": 269,
      "name": "Cosmin Stoica",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "PR",
      "id": 268,
      "name": "Iulia Florea",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "PR",
      "id": 267,
      "name": "Răzvan Prejbeanu",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "PR",
      "id": 266,
      "name": "Dana Apostol",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "PR",
      "id": 265,
      "name": "Andreea Dragomir",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "PR",
      "id": 264,
      "name": "Alex Juncu",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant"
    },
    {
      "course": "PR",
      "id": 263,
      "name": "Cristian Ocnărescu",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant 2009",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant 2009"
    },
    {
      "course": "PR",
      "id": 262,
      "name": "Andrei Ciorba",
      "group": "",
      "pin": "Extra",
      "comment": "Teaching Assistant 2009",
      "date": "01.10.2013",
      "oldpin": "Teaching Assistant 2009"
    },
    {
      "course": "PR",
      "id": 261,
      "name": "Răzvan Rughiniș",
      "group": "",
      "pin": "Extra",
      "comment": "Course",
      "date": "01.10.2013",
      "oldpin": "Course"
    },
    {
      "course": "PR",
      "id": 260,
      "name": "Sergiu Costea",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Design",
      "date": "01.10.2013",
      "oldpin": "Curriculum Design"
    },
    {
      "course": "PR",
      "id": 259,
      "name": "Mihai Bucicoiu",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2010",
      "date": "01.10.2013",
      "oldpin": "Curriculum Lead 2010"
    },
    {
      "course": "PR",
      "id": 258,
      "name": "Bogdan Doinea",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2011",
      "date": "01.10.2013",
      "oldpin": "Curriculum Lead 2011"
    },
    {
      "course": "PR",
      "id": 257,
      "name": "Traian Popeea",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2012",
      "date": "01.10.2013",
      "oldpin": "Curriculum Lead 2012"
    },
    {
      "course": "PR",
      "id": 256,
      "name": "Lucia Roșculete",
      "group": "",
      "pin": "Extra",
      "comment": "Curriculum Lead 2013",
      "date": "01.10.2013",
      "oldpin": "Curriculum Lead 2013"
    }
   ]
}

function unique (list) {
  return list.filter((x, i) => list.indexOf(x) === i)
}

class HitListModal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      year: '2017'
    }
  }

  setYear = year => this.setState({...this.state, year: year.toString()})

  get data () {
    return this.props.data.filter(x => x.date.includes(this.state.year))
  }

  get years () {
    let years = this.props.data.map(x => x.date.split('.')[2])
    return unique(years).sort().reverse()
  }

  get tables () {
    let values = ['Midterm', 'Lab', 'Lecture', 'Final', 'Community']
    let tables = {}
    let data = this.data

    values.forEach(
      category => tables[category] = data.filter(x => x.pin === category)
    )

    tables['Extra'] = data.filter(x => !values.includes(x.pin))

    return values.map(x => {return {data: tables[x], type: x}})
  }

  render () {
    let selectedYear = this.state.year
    let {visible, onClose, abbreviation} = this.props

    return (
      <Modal visible={visible} onClose={onClose} width={1200} height={800}>
        <Main
          setYear={this.setYear}
          years={this.years}
          selectedYear={selectedYear}
          tables={this.tables}
          abbreviation={abbreviation}
          />
      </Modal>
    )
  }
}

HitListModal.propTypes = propTypes
HitListModal.defaultProps = defaultProps

export default HitListModal
