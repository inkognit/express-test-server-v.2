CREATE schema test;

-- test."user" definition

-- Drop table

-- DROP TABLE test."user";

CREATE TABLE test."user" (
	id serial4 NOT NULL,
	email text NOT NULL,
	nickname text NOT NULL,
	create_at timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"password" text NOT NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX user_email_key ON test."user" USING btree (email);
CREATE UNIQUE INDEX user_nickname_key ON test."user" USING btree (nickname);

-- test.blog definition

-- Drop table

-- DROP TABLE test.blog;

CREATE TABLE test.blog (
	id serial4 NOT NULL,
	"text" text NOT NULL,
	create_at timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	user_id int4 NOT NULL,
	CONSTRAINT blog_pkey PRIMARY KEY (id),
	CONSTRAINT blog_user_id_fkey FOREIGN KEY (user_id) REFERENCES test."user"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);
-- test.sessions definition

-- Drop table

-- DROP TABLE test.sessions;

CREATE TABLE test.sessions (
	id serial4 NOT NULL,
	"userId" int4 NOT NULL,
	refresh_token text NULL,
	"access_token" text NULL,
	ip text NULL,
	adress text NULL,
	CONSTRAINT sessions_pkey PRIMARY KEY (id),
	CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES test."user"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);