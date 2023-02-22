CREATE schema test;

CREATE TABLE test."User" (
	id serial4 NOT NULL,
	email text NOT NULL,
	name text NOT NULL,
	CONSTRAINT "User_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "User_email_key" ON test."User" USING btree (email);

CREATE TABLE test."Airplain" (
	id serial4 NOT NULL,
	model text NULL,
	create_at timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "Airplain_pkey" PRIMARY KEY (id)
);