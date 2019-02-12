import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../../_services/user.services";
import { ChangeRole } from "../../models.barel";
import { NgForm, FormGroup, FormControl, FormArray, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent3 implements OnInit {

  changeRole: ChangeRole;

  myForm: FormGroup = new FormGroup({
    "phones": new FormArray([new FormControl("+3", Validators.required)])
  });

  regiForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Address: string = '';
  DOB: Date = null;
  Gender: string = '';
  Blog: string = '';
  Email: string = '';
  IsAccepted: number = 0;  

 

  constructor(
    private fb: FormBuilder,
    private servUser: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.regiForm = fb.group({
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'Address': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'DOB': [null, Validators.required],
      'Gender': [null, Validators.required],
      'Blog': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.email])],
      'IsAccepted': [null]
    });  

  }

  onChange(event: any) {
    if (event.checked == true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }  


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(rout => {
      let userId = rout.get("userId");
      if (userId) {
        this.loadData(userId);
      }
    });
  }

  loadData(userId: string) {
    this.servUser.getUserEditRoles(userId).subscribe((data: ChangeRole) => {
      this.changeRole = data;
    });
  }

  onSave() {
    
  }


  //submit(form: NgForm){
  //  console.log(form);
  //}

  submit(form: NgForm) {
    console.log(this.myForm);
  }

  addPhone() {
    (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+3", Validators.required));
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
  } 
}
