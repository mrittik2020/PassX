import { DatashearService } from './../../services/datashear.service';
import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAnglesRight, faAnglesLeft, faAngleRight, faAngleLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { PassinfoComponent } from '../passinfo/passinfo.component';

// import * as _ from 'lodash';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnDestroy {
  dd = faFacebook;
  AnglesRight = faAnglesRight;
  AnglesLeft = faAnglesLeft;
  AngleRight = faAngleRight;
  AngleLeft = faAngleLeft;
  uparrow = faArrowUp;

  headerArray = ["SL No", "Website", "Name", "User Name", "DOB", "Last Seen", "Action"];
  dataSheet = [{
    "id": 1,
    "name": "Berky Lesmonde",
    "username": "blesmonde0",
    "dob": "10/28/1999",
    "last_seen": "1990-02-05 20:02:39"
  }, {
    "id": 2,
    "name": "Daniel Greensides",
    "username": "dgreensides1",
    "dob": "8/29/1962",
    "last_seen": "2016-08-26 05:12:23"
  }, {
    "id": 3,
    "name": "Claudell Andover",
    "username": "candover2",
    "dob": "7/13/1972",
    "last_seen": "1963-09-20 01:28:20"
  }, {
    "id": 4,
    "name": "Milton Glisane",
    "username": "mglisane3",
    "dob": "7/31/1965",
    "last_seen": "1988-03-18 00:29:29"
  }, {
    "id": 5,
    "name": "Moreen Glide",
    "username": "mglide4",
    "dob": "9/1/1984",
    "last_seen": "2015-11-27 04:26:22"
  }, {
    "id": 6,
    "name": "Joycelin MacDougal",
    "username": "jmacdougal5",
    "dob": "1/10/1998",
    "last_seen": "1986-05-14 08:42:56"
  }, {
    "id": 7,
    "name": "Marylynne Hellis",
    "username": "mhellis6",
    "dob": "8/21/2018",
    "last_seen": "1997-04-01 23:28:51"
  }, {
    "id": 8,
    "name": "Antonius Cinelli",
    "username": "acinelli7",
    "dob": "10/8/1990",
    "last_seen": "2007-09-10 19:02:27"
  }, {
    "id": 9,
    "name": "Don Grisenthwaite",
    "username": "dgrisenthwaite8",
    "dob": "5/11/1984",
    "last_seen": "1965-04-03 15:58:57"
  }, {
    "id": 10,
    "name": "Dorian Ainsby",
    "username": "dainsby9",
    "dob": "12/30/1963",
    "last_seen": "1963-12-29 10:36:50"
  }, {
    "id": 11,
    "name": "Aliza Goodayle",
    "username": "agoodaylea",
    "dob": "12/28/2016",
    "last_seen": "1992-01-24 20:00:45"
  }, {
    "id": 12,
    "name": "Lonna Hyndes",
    "username": "lhyndesb",
    "dob": "9/28/2018",
    "last_seen": "2011-07-23 17:23:27"
  }, {
    "id": 13,
    "name": "Glynn Bengtson",
    "username": "gbengtsonc",
    "dob": "6/25/2012",
    "last_seen": "1984-04-06 20:02:57"
  }, {
    "id": 14,
    "name": "Bradan Rodman",
    "username": "brodmand",
    "dob": "5/12/1979",
    "last_seen": "2001-07-01 21:00:09"
  }, {
    "id": 15,
    "name": "Waldemar Reading",
    "username": "wreadinge",
    "dob": "6/3/1972",
    "last_seen": "1985-12-20 08:50:48"
  }, {
    "id": 16,
    "name": "Sanderson Lamprecht",
    "username": "slamprechtf",
    "dob": "2/11/2010",
    "last_seen": "2004-07-16 00:45:47"
  }, {
    "id": 17,
    "name": "Hallie Nellies",
    "username": "hnelliesg",
    "dob": "7/18/1986",
    "last_seen": "2010-04-12 06:15:41"
  }, {
    "id": 18,
    "name": "Kerry Bresnahan",
    "username": "kbresnahanh",
    "dob": "8/16/2005",
    "last_seen": "1964-01-04 06:22:52"
  }, {
    "id": 19,
    "name": "Daile Mouland",
    "username": "dmoulandi",
    "dob": "10/21/1994",
    "last_seen": "1978-08-09 08:01:10"
  }, {
    "id": 20,
    "name": "Derry Jacombs",
    "username": "djacombsj",
    "dob": "8/27/1998",
    "last_seen": "1996-08-04 06:38:25"
  }, {
    "id": 21,
    "name": "Demetrius Kohrding",
    "username": "dkohrdingk",
    "dob": "4/12/1992",
    "last_seen": "2006-06-22 17:13:42"
  }, {
    "id": 22,
    "name": "Gregor Simo",
    "username": "gsimol",
    "dob": "5/22/1972",
    "last_seen": "2010-03-18 03:40:32"
  }, {
    "id": 23,
    "name": "Brandie Feldmann",
    "username": "bfeldmannm",
    "dob": "1/31/2019",
    "last_seen": "1970-08-30 02:40:05"
  }, {
    "id": 24,
    "name": "Pepillo Winslet",
    "username": "pwinsletn",
    "dob": "1/27/1992",
    "last_seen": "2009-05-29 13:55:08"
  }, {
    "id": 25,
    "name": "Elyssa Fison",
    "username": "efisono",
    "dob": "1/5/1963",
    "last_seen": "1967-09-22 17:26:38"
  }, {
    "id": 26,
    "name": "Konstantin Aronovitz",
    "username": "karonovitzp",
    "dob": "9/6/2004",
    "last_seen": "1961-07-14 13:52:11"
  }, {
    "id": 27,
    "name": "Brenna Giggie",
    "username": "bgiggieq",
    "dob": "1/26/1973",
    "last_seen": "1984-06-28 14:26:07"
  }, {
    "id": 28,
    "name": "Douglas Covil",
    "username": "dcovilr",
    "dob": "1/12/1968",
    "last_seen": "1996-01-22 04:29:00"
  }, {
    "id": 29,
    "name": "Suzanna Ashbee",
    "username": "sashbees",
    "dob": "10/20/2019",
    "last_seen": "2018-02-15 14:31:57"
  }, {
    "id": 30,
    "name": "Florinda Koppeck",
    "username": "fkoppeckt",
    "dob": "1/9/1996",
    "last_seen": "1965-09-08 17:51:16"
  }, {
    "id": 31,
    "name": "Felicle Watkiss",
    "username": "fwatkissu",
    "dob": "10/22/1980",
    "last_seen": "1964-02-13 00:36:45"
  }, {
    "id": 32,
    "name": "Arte Fredi",
    "username": "afrediv",
    "dob": "2/16/1987",
    "last_seen": "1979-06-25 11:46:22"
  }, {
    "id": 33,
    "name": "Gav Huckell",
    "username": "ghuckellw",
    "dob": "5/3/1962",
    "last_seen": "1988-10-30 15:42:07"
  }, {
    "id": 34,
    "name": "Caitlin Boland",
    "username": "cbolandx",
    "dob": "1/26/2007",
    "last_seen": "1991-10-29 01:32:09"
  }, {
    "id": 35,
    "name": "Turner Codi",
    "username": "tcodiy",
    "dob": "10/18/2010",
    "last_seen": "2002-06-12 16:52:56"
  }, {
    "id": 36,
    "name": "Ferdinanda Crimin",
    "username": "fcriminz",
    "dob": "5/18/1964",
    "last_seen": "1987-07-27 22:18:18"
  }, {
    "id": 37,
    "name": "Fair Carde",
    "username": "fcarde10",
    "dob": "6/11/1968",
    "last_seen": "1974-04-18 08:20:19"
  }, {
    "id": 38,
    "name": "Maison Eaddy",
    "username": "meaddy11",
    "dob": "6/23/1995",
    "last_seen": "2008-08-24 16:40:15"
  }, {
    "id": 39,
    "name": "Benton Wonfar",
    "username": "bwonfar12",
    "dob": "4/28/1969",
    "last_seen": "2016-11-09 07:25:25"
  }, {
    "id": 40,
    "name": "Donelle Inder",
    "username": "dinder13",
    "dob": "10/22/1970",
    "last_seen": "1989-09-05 12:50:24"
  }, {
    "id": 41,
    "name": "Ingrid Krauze",
    "username": "ikrauze14",
    "dob": "3/18/1977",
    "last_seen": "1979-04-26 13:08:47"
  }, {
    "id": 42,
    "name": "Ericha Fothergill",
    "username": "efothergill15",
    "dob": "9/14/2004",
    "last_seen": "2012-12-07 22:58:48"
  }, {
    "id": 43,
    "name": "Beverley Hulls",
    "username": "bhulls16",
    "dob": "11/12/1991",
    "last_seen": "2011-11-18 16:19:06"
  }, {
    "id": 44,
    "name": "Dun Van der Daal",
    "username": "dvan17",
    "dob": "2/12/1986",
    "last_seen": "1975-05-25 21:18:57"
  }, {
    "id": 45,
    "name": "Gustaf Dace",
    "username": "gdace18",
    "dob": "7/4/1978",
    "last_seen": "1997-11-19 10:08:23"
  }, {
    "id": 46,
    "name": "Frasier Rosenblath",
    "username": "frosenblath19",
    "dob": "9/13/2002",
    "last_seen": "1983-07-30 01:12:27"
  }, {
    "id": 47,
    "name": "Hymie Turnell",
    "username": "hturnell1a",
    "dob": "2/3/2000",
    "last_seen": "1987-07-02 23:09:22"
  }, {
    "id": 48,
    "name": "Aron Bleibaum",
    "username": "ableibaum1b",
    "dob": "3/24/1982",
    "last_seen": "1968-10-18 04:59:41"
  }, {
    "id": 49,
    "name": "Celinka Mattson",
    "username": "cmattson1c",
    "dob": "9/8/1976",
    "last_seen": "1962-03-22 00:00:07"
  }, {
    "id": 50,
    "name": "Ellis Jinkinson",
    "username": "ejinkinson1d",
    "dob": "4/15/2003",
    "last_seen": "2001-11-02 03:51:05"
  }, {
    "id": 51,
    "name": "Laureen Shimwall",
    "username": "lshimwall1e",
    "dob": "11/18/1996",
    "last_seen": "1971-04-07 03:34:38"
  }, {
    "id": 52,
    "name": "Perry Duhig",
    "username": "pduhig1f",
    "dob": "9/20/2000",
    "last_seen": "1980-12-04 11:07:40"
  }, {
    "id": 53,
    "name": "Kylen Sarsons",
    "username": "ksarsons1g",
    "dob": "10/19/1976",
    "last_seen": "2017-02-18 16:58:25"
  }, {
    "id": 54,
    "name": "Chickie Jantot",
    "username": "cjantot1h",
    "dob": "4/28/2012",
    "last_seen": "1994-11-26 21:45:08"
  }, {
    "id": 55,
    "name": "Beret Ellingham",
    "username": "bellingham1i",
    "dob": "2/13/2002",
    "last_seen": "1986-10-23 14:24:20"
  }, {
    "id": 56,
    "name": "Sandy Dron",
    "username": "sdron1j",
    "dob": "7/24/1971",
    "last_seen": "2005-07-04 09:31:06"
  }, {
    "id": 57,
    "name": "Patricia Cranmore",
    "username": "pcranmore1k",
    "dob": "6/16/1964",
    "last_seen": "1998-10-01 05:10:06"
  }, {
    "id": 58,
    "name": "Zonnya Trenholme",
    "username": "ztrenholme1l",
    "dob": "5/2/1965",
    "last_seen": "2021-11-27 04:24:51"
  }, {
    "id": 59,
    "name": "Ameline Wootton",
    "username": "awootton1m",
    "dob": "9/6/1964",
    "last_seen": "1967-03-21 04:15:46"
  }, {
    "id": 60,
    "name": "Cathrine Braunle",
    "username": "cbraunle1n",
    "dob": "5/4/2003",
    "last_seen": "2013-07-12 23:00:06"
  }, {
    "id": 61,
    "name": "Waite Larkkem",
    "username": "wlarkkem1o",
    "dob": "6/19/1976",
    "last_seen": "1978-03-29 06:06:45"
  }, {
    "id": 62,
    "name": "Meris Denacamp",
    "username": "mdenacamp1p",
    "dob": "10/17/2022",
    "last_seen": "2000-02-17 02:04:43"
  }, {
    "id": 63,
    "name": "Jobyna Townsend",
    "username": "jtownsend1q",
    "dob": "3/15/2010",
    "last_seen": "1982-03-12 08:22:18"
  }, {
    "id": 64,
    "name": "Bernie Ardron",
    "username": "bardron1r",
    "dob": "4/9/1997",
    "last_seen": "1982-06-12 15:11:54"
  }, {
    "id": 65,
    "name": "Joye Cameron",
    "username": "jcameron1s",
    "dob": "12/23/1998",
    "last_seen": "1983-04-22 20:15:41"
  }, {
    "id": 66,
    "name": "Stacey Stiant",
    "username": "sstiant1t",
    "dob": "11/13/2009",
    "last_seen": "1998-04-08 07:59:42"
  }, {
    "id": 67,
    "name": "Alex Berkery",
    "username": "aberkery1u",
    "dob": "9/10/1967",
    "last_seen": "2019-04-01 15:20:35"
  }, {
    "id": 68,
    "name": "Corrina Blind",
    "username": "cblind1v",
    "dob": "9/23/2004",
    "last_seen": "1987-10-28 19:40:04"
  }, {
    "id": 69,
    "name": "Hugo Garrud",
    "username": "hgarrud1w",
    "dob": "9/10/1976",
    "last_seen": "2013-02-16 13:55:32"
  }, {
    "id": 70,
    "name": "Lexis Bahde",
    "username": "lbahde1x",
    "dob": "5/16/1966",
    "last_seen": "1969-03-09 15:19:02"
  }, {
    "id": 71,
    "name": "Tommi Maes",
    "username": "tmaes1y",
    "dob": "5/28/1967",
    "last_seen": "1963-10-13 16:44:44"
  }, {
    "id": 72,
    "name": "Merrick Goldney",
    "username": "mgoldney1z",
    "dob": "9/21/1972",
    "last_seen": "2005-08-05 19:26:55"
  }, {
    "id": 73,
    "name": "Philip Iaduccelli",
    "username": "piaduccelli20",
    "dob": "7/26/1982",
    "last_seen": "1969-09-09 10:19:38"
  }, {
    "id": 74,
    "name": "Mordecai Patria",
    "username": "mpatria21",
    "dob": "1/26/1982",
    "last_seen": "1967-07-09 22:20:02"
  }, {
    "id": 75,
    "name": "Brittni Dannatt",
    "username": "bdannatt22",
    "dob": "1/29/1961",
    "last_seen": "1993-07-12 10:08:24"
  }, {
    "id": 76,
    "name": "Devy Murrhaupt",
    "username": "dmurrhaupt23",
    "dob": "8/24/1989",
    "last_seen": "1982-10-22 00:30:38"
  }, {
    "id": 77,
    "name": "Alasteir O'Hanley",
    "username": "aohanley24",
    "dob": "1/17/1977",
    "last_seen": "2009-05-18 10:17:21"
  }, {
    "id": 78,
    "name": "Bernadine Dennant",
    "username": "bdennant25",
    "dob": "6/24/1984",
    "last_seen": "1970-09-18 17:45:08"
  }, {
    "id": 79,
    "name": "Carol-jean Morphey",
    "username": "cmorphey26",
    "dob": "2/14/1980",
    "last_seen": "2011-04-29 09:46:31"
  }, {
    "id": 80,
    "name": "Stepha Abramchik",
    "username": "sabramchik27",
    "dob": "2/9/2018",
    "last_seen": "1970-03-18 23:43:47"
  }, {
    "id": 81,
    "name": "Chucho Lemmers",
    "username": "clemmers28",
    "dob": "12/2/1980",
    "last_seen": "1993-12-02 15:04:57"
  }, {
    "id": 82,
    "name": "Borg Gjerde",
    "username": "bgjerde29",
    "dob": "7/24/1971",
    "last_seen": "2016-02-26 00:32:56"
  }, {
    "id": 83,
    "name": "Willette Halliwell",
    "username": "whalliwell2a",
    "dob": "9/3/2020",
    "last_seen": "2007-07-21 09:38:24"
  }, {
    "id": 84,
    "name": "Faunie Bricknall",
    "username": "fbricknall2b",
    "dob": "6/18/2005",
    "last_seen": "1992-04-30 05:13:37"
  }, {
    "id": 85,
    "name": "Ramonda Rockingham",
    "username": "rrockingham2c",
    "dob": "12/23/1979",
    "last_seen": "2003-08-06 22:16:45"
  }, {
    "id": 86,
    "name": "Chastity Fashion",
    "username": "cfashion2d",
    "dob": "6/21/1990",
    "last_seen": "1989-03-18 01:02:48"
  }, {
    "id": 87,
    "name": "Leonid Dines",
    "username": "ldines2e",
    "dob": "12/4/1986",
    "last_seen": "1980-01-26 02:03:28"
  }, {
    "id": 88,
    "name": "Genia Butterfill",
    "username": "gbutterfill2f",
    "dob": "1/27/2007",
    "last_seen": "1962-02-21 02:19:23"
  }, {
    "id": 89,
    "name": "Dorthea Gleder",
    "username": "dgleder2g",
    "dob": "7/29/2021",
    "last_seen": "1994-10-24 23:22:09"
  }, {
    "id": 90,
    "name": "Amalea Beentjes",
    "username": "abeentjes2h",
    "dob": "12/10/1998",
    "last_seen": "1996-06-23 03:10:54"
  }, {
    "id": 91,
    "name": "Avie Pirson",
    "username": "apirson2i",
    "dob": "1/24/1966",
    "last_seen": "1966-05-28 07:15:41"
  }, {
    "id": 92,
    "name": "Brewster Barrett",
    "username": "bbarrett2j",
    "dob": "4/4/1979",
    "last_seen": "1983-04-18 07:20:49"
  }, {
    "id": 93,
    "name": "Kearney Teas",
    "username": "kteas2k",
    "dob": "3/11/2014",
    "last_seen": "1983-01-29 18:33:55"
  }, {
    "id": 94,
    "name": "Blake Capron",
    "username": "bcapron2l",
    "dob": "1/3/1966",
    "last_seen": "1985-08-24 05:20:44"
  }, {
    "id": 95,
    "name": "Thomasina Skene",
    "username": "tskene2m",
    "dob": "8/13/2021",
    "last_seen": "2007-07-28 23:39:04"
  }, {
    "id": 96,
    "name": "Maressa Ondra",
    "username": "mondra2n",
    "dob": "6/4/1989",
    "last_seen": "1970-07-19 22:01:23"
  }, {
    "id": 97,
    "name": "Oralle Denisyuk",
    "username": "odenisyuk2o",
    "dob": "10/15/1985",
    "last_seen": "1984-07-24 12:16:24"
  }, {
    "id": 98,
    "name": "Sonny Fyers",
    "username": "sfyers2p",
    "dob": "8/10/1991",
    "last_seen": "2019-10-31 13:38:33"
  }, {
    "id": 99,
    "name": "Chandal O'Shee",
    "username": "coshee2q",
    "dob": "12/23/1969",
    "last_seen": "2014-05-02 09:42:09"
  }, {
    "id": 100,
    "name": "Alec Nock",
    "username": "anock2r",
    "dob": "7/8/1975",
    "last_seen": "1997-08-21 22:52:38"
  }];
  rowNumber = this.dataSheet.length;
  keys = Object.keys(this.dataSheet[0]);

  selected = '10';
  currentPage: number = 1;
  item_per_page: number = Number(this.selected);
  lastPage = this.lastpage();

  // Default Sorting...
  fild: string = 'id';
  type: string = 'Num';
  order: boolean = true;

  // Filter
  filter: any;
  ddf: any;

  lastpage() {
    this.item_per_page = Number(this.selected);
    let lpg = Math.trunc(this.rowNumber / this.item_per_page);
    if (this.rowNumber % this.item_per_page > 0) {
      lpg = lpg + 1;
    }
    else {
      lpg = lpg;
    }
    this.lastPage = lpg;
    return lpg
  }

  tHeadElement = (<HTMLElement>this.elem.nativeElement);

  mousein(e1: String) {
    try {
      const pp = this.tHeadElement.querySelector('#' + e1 + '[area-sort="none"]') as HTMLElement;
      pp.style.cssText = "opacity: 0.5;";
    } catch (error) {
    }
  }

  mouseout(e1: String) {
    try {
      const pp = this.tHeadElement.querySelector('#' + e1 + '[area-sort="none"]') as HTMLElement;
      pp.style.cssText = "opacity: 0;";
    } catch (error) {
    }
  }

  onClick(e1: String) {
    const pp = this.tHeadElement.querySelector('#' + e1) as HTMLElement;
    var a_ttr: String = pp.getAttribute('area-sort') || '';

    if (a_ttr === "none") {
      // Clear the area-sort
      this.attrClear();
      //-->apply sort
      pp.setAttribute('area-sort', 'ascending');
      pp.style.cssText = "opacity: 1";
      this.order = true;
    }
    else if (a_ttr === "ascending") {
      pp.setAttribute('area-sort', 'descending');
      pp.style.cssText = " transform: rotate(180deg) translateX(5px); opacity: 1; ";
      this.order = false;
    }
    else if (a_ttr === "descending") {
      pp.setAttribute('area-sort', 'none');
      pp.style.cssText = "opacity: 0; transform: rotate(0deg);";
      this.order = true;
    }
    else {
      console.log("---xxxx--- Fatal Error! xxx---xxx");
    }
  }

  attrClear() {
    //--> ascending clear
    try {
      const pp1 = this.tHeadElement.querySelector('[area-sort="ascending"]') as HTMLElement;
      pp1.setAttribute('area-sort', 'none');
      pp1.style.cssText = "opacity: 0;";
    } catch (error) {
      // console.log(error);
    }
    //--> descending clear
    try {
      const pp1 = this.tHeadElement.querySelector('[area-sort="descending"]') as HTMLElement;
      pp1.setAttribute('area-sort', 'none');
      pp1.style.cssText = "opacity: 0;";
    } catch (error) {
      // console.log(error);
    }
  }

  edit(e: any) {
    console.log(e);
    const mdiv = this.tHeadElement.querySelectorAll('.editbtn') as NodeListOf<HTMLElement>;
    const cbtn = this.tHeadElement.querySelectorAll('.act_btn') as NodeListOf<HTMLElement>;
    const btn = this.tHeadElement.querySelector('#b' + e) as HTMLElement;
    const div = this.tHeadElement.querySelector('.edit_d' + e) as HTMLElement;
    mdiv.forEach(element => {
      element.style.cssText = "display: none  !important;";
    });
    cbtn.forEach(element => {
      element.style.cssText = "display: block  !important;";
    });
    btn.style.cssText = "display:  none  !important;";
    div.style.cssText = "display:  block !important;";
  }

  save() {

  }

  cancel(e: any) {
    console.log(e);
    const mdiv = this.tHeadElement.querySelectorAll('.editbtn') as NodeListOf<HTMLElement>;
    const cbtn = this.tHeadElement.querySelectorAll('.act_btn') as NodeListOf<HTMLElement>;
    const btn = this.tHeadElement.querySelector('#b' + e) as HTMLElement;
    const div = this.tHeadElement.querySelector('.edit_d' + e) as HTMLElement;
    mdiv.forEach(element => {
      element.style.cssText = "display: none  !important;";
    });
    cbtn.forEach(element => {
      element.style.cssText = "display: block  !important;";
    });
    btn.style.cssText = "display: block !important;";
    div.style.cssText = "display: none !important;";
  }





  constructor(private elem: ElementRef, private dataShare: DatashearService, private dialog: MatDialog) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(PassinfoComponent, {
      width: '50%',
      // data: { message: 'This is a Material Dialog!' }
    });
  }

  ngOnInit() {
    this.ddf = this.dataShare.data$.subscribe((data) => {
      this.filter = data;
    });
  }

  ngOnDestroy(): void {
    this.ddf.unsubscribe();
  }

}
