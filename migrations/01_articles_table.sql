create table articles
(
    id         int auto_increment
        primary key,
    title      varchar(255) not null,
    body       varchar(255) null,
    created_at varchar(255) not null,
    author_id  int          not null,
    constraint author_user_id_fk
        foreign key (author_id) references users (id)
);