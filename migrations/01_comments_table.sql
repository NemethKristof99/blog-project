create table comments
(
    id         int auto_increment
        primary key,
    body       varchar(255) not null,
    author     varchar(255) not null,
    author_id  int          not null,
    article_id int          not null,
    constraint comments_article_id_fk
        foreign key (article_id) references articles (id),
    constraint comments_author_id_fk
        foreign key (author_id) references users (id)
);