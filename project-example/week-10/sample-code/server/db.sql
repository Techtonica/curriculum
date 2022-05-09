--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

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

DROP DATABASE IF EXISTS animal_sighting_tracker;
--
-- Name: techtonica1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE animal_sighting_tracker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE animal_sighting_tracker OWNER TO postgres;

\connect animal_sighting_tracker

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
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

-- CREATE TABLE public.species (
-- 	id SERIAL PRIMARY KEY,
-- 	common_name VARCHAR ( 50 ) UNIQUE NOT NULL,
-- 	scientific_name VARCHAR ( 50 ) NOT NULL,
-- 	population integer,
--     conservation_status VARCHAR (2),
-- 	created_on TIMESTAMP WITH TIME zone DEFAULT CURRENT_TIMESTAMP Not null
-- );


-- ALTER TABLE public.species OWNER TO postgres;

--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

-- CREATE SEQUENCE public.students_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.students_id_seq OWNER TO postgres;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

-- ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: postgres
--

-- ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

-- COPY public.students (id, lastname, firstname) FROM stdin;
-- 1	Gomez	Andrea
-- 2	Lee	Becca
-- 3	Smith	Will
-- 4	Pond	Kate
-- 5	Lasso	Jamie
-- 7	Rodriguez	Arepa
-- 8	Smith	Crush
-- 9	Fonca	Billy
-- 10	Gomez	Teresa
-- 11	Tres	Prueba
-- 12	Cuatro	Prueba 
-- 13	Cinco	Prueba
-- \.


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

-- SELECT pg_catalog.setval('public.students_id_seq', 13, true);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

-- ALTER TABLE ONLY public.students
--     ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


-- START HERE




