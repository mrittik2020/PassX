import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
    selector: 'app-bank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {



    datapp = [
        {
            "id": 0,
            "name": "Dakshayani Tagore",
            "bank_name": "SBI",
            "branch_name": "La Passe",
            "acc_type": "saveings",
            "acc_number": "FI5893497112650776",
            "ifsc_code": "AXISINBBA39"
        },
        {
            "id": 1,
            "name": "Chinmayanand Kaul",
            "bank_name": "SBI",
            "branch_name": "Ressano Garcia",
            "acc_type": "saveings",
            "acc_number": "FI4058415649773156",
            "ifsc_code": "SBININBB291"
        },
        {
            "id": 2,
            "name": "Dhanu Dhawan",
            "bank_name": "SBI",
            "branch_name": "Vilkaviskis",
            "acc_type": "saveings",
            "acc_number": "FI4914672184336497",
            "ifsc_code": "ALLAINBBSIF"
        },
        {
            "id": 3,
            "name": "Gopal Rana",
            "bank_name": "SBI",
            "branch_name": "Cabay",
            "acc_type": "saveings",
            "acc_number": "FI4981842629724692",
            "ifsc_code": "SOININ55128"
        },
        {
            "id": 4,
            "name": "Charumati Kaur",
            "bank_name": "SBI",
            "branch_name": "Road Town",
            "acc_type": "saveings",
            "acc_number": "FI1199774374206187",
            "ifsc_code": "AXISINBB424"
        },
        {
            "id": 5,
            "name": "Vasudha Bharadwaj",
            "bank_name": "SBI",
            "branch_name": "Moanda",
            "acc_type": "saveings",
            "acc_number": "FI6685734068878029",
            "ifsc_code": "PSIBINBB135"
        },
        {
            "id": 6,
            "name": "Bhavani Desai",
            "bank_name": "SBI",
            "branch_name": "Crane",
            "acc_type": "saveings",
            "acc_number": "FI2497608443799303",
            "ifsc_code": "DCBLINBB061"
        },
        {
            "id": 7,
            "name": "Nagabhushanam Kaul",
            "bank_name": "SBI",
            "branch_name": "Ras al-Khaimah",
            "acc_type": "saveings",
            "acc_number": "FI8460669515594101",
            "ifsc_code": "BKIDINBBAGR"
        },
        {
            "id": 8,
            "name": "Chitrali Desai",
            "bank_name": "SBI",
            "branch_name": "San Vicente",
            "acc_type": "saveings",
            "acc_number": "FI3963161495377930",
            "ifsc_code": "CNRBINBBYDT"
        },
        {
            "id": 9,
            "name": "Rageswari Khan",
            "bank_name": "SBI",
            "branch_name": "Debdou",
            "acc_type": "saveings",
            "acc_number": "FI9091858719222579",
            "ifsc_code": "DLXBINBBKPM"
        },
        {
            "id": 10,
            "name": "Ranjeet Kaur",
            "bank_name": "SBI",
            "branch_name": "Mindelo",
            "acc_type": "saveings",
            "acc_number": "FI4494216519101008",
            "ifsc_code": "ORBCINBBSHN"
        },
        {
            "id": 11,
            "name": "Leela Kapoor",
            "bank_name": "SBI",
            "branch_name": "Diawara",
            "acc_type": "saveings",
            "acc_number": "FI3140935296377875",
            "ifsc_code": "CORPINBB389"
        },
        {
            "id": 12,
            "name": "Kalinda Tagore",
            "bank_name": "SBI",
            "branch_name": "Anibare",
            "acc_type": "saveings",
            "acc_number": "FI1660833607236125",
            "ifsc_code": "SBININBB499"
        },
        {
            "id": 13,
            "name": "Bhanumati Abbott",
            "bank_name": "SBI",
            "branch_name": "Bording Kirkeby",
            "acc_type": "saveings",
            "acc_number": "FI2957374102439494",
            "ifsc_code": "AXISINBB044"
        },
        {
            "id": 14,
            "name": "Vasundhara Nair",
            "bank_name": "SBI",
            "branch_name": "Altraga",
            "acc_type": "saveings",
            "acc_number": "FI7047351746503354",
            "ifsc_code": "ICICINBB005"
        },
        {
            "id": 15,
            "name": "Chidambar Pillai",
            "bank_name": "SBI",
            "branch_name": "Mohales Hoek",
            "acc_type": "saveings",
            "acc_number": "FI7000122260238425",
            "ifsc_code": "ESIRINB1"
        },
        {
            "id": 16,
            "name": "Chandradev Kaul",
            "bank_name": "SBI",
            "branch_name": "Obock",
            "acc_type": "saveings",
            "acc_number": "FI3581083646528064",
            "ifsc_code": "ROSPINB1"
        }
    ]

    fixdata = this.datapp.map((user) => {
                let data = { ...user }
                data.acc_number = user.acc_number.slice(2)
                return data;
            });

    ngOnInit(): void {
        // console.log(this.fixdat);
    }


}
