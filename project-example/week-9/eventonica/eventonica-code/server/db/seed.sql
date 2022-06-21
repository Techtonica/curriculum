--
-- PostgreSQL database dump
--
 -- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;


SET lock_timeout = 0;


SET idle_in_transaction_session_timeout = 0;


SET client_encoding = 'UTF8';


SET standard_conforming_strings = on;


SELECT pg_catalog.set_config('search_path', '', false);


SET check_function_bodies = false;


SET xmloption = content;


SET client_min_messages = warning;


SET row_security = off;


SET default_tablespace = '';


SET default_table_access_method = heap;

--
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events ( id integer NOT NULL,
                                        name character varying(255) NOT NULL,
                                                                    category character varying(255) NOT NULL,
                                                                                                    description character varying(255), date date, isfavorite boolean DEFAULT false);


ALTER TABLE public.events OWNER TO postgres;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_id_seq AS integer
START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO postgres;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner:
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;

--
-- Name: users; Type: TABLE; Schema: public; Owner:
--

CREATE TABLE public.users ( id integer NOT NULL,
                                       name character varying(50) NOT NULL,
                                                                  email character varying(50) NOT NULL);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner:
--

CREATE SEQUENCE public.users_id_seq AS integer
START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;

--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
ALTER COLUMN id
SET DEFAULT nextval('public.events_id_seq'::regclass);

--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
ALTER COLUMN id
SET DEFAULT nextval('public.users_id_seq'::regclass);

--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--
 COPY public.events (id, name, category, description, date, isfavorite)
FROM stdin;

46 Birthday Celebration A birthday party
for my best friend 2022-03-18 f 49 JavaScript Study
Group Night Educationx This event is
for people interested in learning Javascript
and later applying
for Techtonica to
work through JavaScript exercises
and code challenges together 2022-03-18 f 48 JS Study Session Education A chance to practice Javascript interview questions 2022-03-30 t 47 Graduation Education The class of 2021 graduates
from East High 2022-03-25 t \. --
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--
 COPY public.users (id, name, email)
FROM stdin;

1 Crush crush@gmail.com 2 coral coral@gmail.com 4 Nemo nemo@gmail.com 27 Marlin Marlin@gmail.com 30 Crush3 crush3@gmail.com \. --
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_id_seq', 49, true);

--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 31, true);

--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events ADD CONSTRAINT events_pkey PRIMARY KEY (id);

--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ADD CONSTRAINT users_email_key UNIQUE (email);

--
-- Name: users users_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ADD CONSTRAINT users_name_key UNIQUE (name);

--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ADD CONSTRAINT users_pkey PRIMARY KEY (id);

--
-- PostgreSQL database dump complete
--
