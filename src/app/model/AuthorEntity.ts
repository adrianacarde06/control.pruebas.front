import { BookEntity } from "./BookEntity";

export class AuthorEntity {
    id: number | undefined;
    name: string | undefined;
    lastName: string | undefined;
    birthDate: Date | undefined;
    country: string | undefined;
    biography: string | undefined;
    books: BookEntity[] | undefined;
}