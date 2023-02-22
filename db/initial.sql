CREATE schema test;

CREATE TABLE test."User" (
	id serial4 NOT NULL,
	email text NOT NULL,
	name text NOT NULL,
	CONSTRAINT "User_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "User_email_key" ON test."User" USING btree (email);