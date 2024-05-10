import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member } from '../Member';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit {
  members: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.http.get<MembersResponse>('http://localhost:8080/ecommerce/api/members')
      .subscribe(members => {
        this.members = members._embedded.members;
      });
  }
}

interface MembersResponse{
  _embedded:{
    members: Member[];
    _links:{self:{href: string}};
  }
}
