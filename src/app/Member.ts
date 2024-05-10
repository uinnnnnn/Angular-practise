export class Member {
    constructor(
        public name: String,
        public email: String,
        public birth: Date,
        public gender: String,
        public _link: { self: { href: string } }
    ) { }
}