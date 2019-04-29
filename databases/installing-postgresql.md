# PostgreSQL Installation

## Projected Time

30 minutes.

## Objectives

**Participants will be able to:**

- Install PostgreSQL.

## Materials

- [Installation steps](https://www.postgresql.org/docs/current/install-procedure.html) - using command line.

## Lesson

### 1. Install PostgreSQL through app [On Windows].

* **Step 1** - Go to [postgreSQL downloads](https://www.postgresql.org/download) and select your platform (here Windows).

<img src="https://drive.google.com/uc?id=1s5KJCg41MyTihC7r0mJuDgNb9O0FeNGR" alt="step1">

* **Step 2** - You are given two options:

1. Interactive Installer by EnterpriseDB
2. Graphical Installer by BigSQL

BigSQL currently installs pgAdmin version 3 which is deprecated. It's best to choose EnterpriseDB which installs the latest version 4.

<img src="https://drive.google.com/uc?id=1eEjGVYuHswtt-AhHnqhA4SszsGPY_6f7" alt="step2">

* **Step 3** - You will be prompted to desired PostgreSQL version and operating system. Select the **latest PostgreSQL version** and OS as per your environment. Click the **Download** Button.

<img src="https://drive.google.com/uc?id=17DyGv1TbgdEybCDrl_GbEMfouv5k6X6w" alt="step3">

* **Step 4** - Open the downloaded exe and Click next on the install welcome screen.

<img src="https://drive.google.com/uc?id=1D5u0ZC1zOeG2wopTw1yFuOmKnMRMbXo1" alt="step4">

* **Step 5** - Change the Installation directory if required, else leave it to **default** and click **Next**.

<img src="https://drive.google.com/uc?id=1XT7FwEZuoRWyafVjZviVKIHXrs7XL3A5" alt="step5">

* **Step 6** - You may choose the components you want to install in your system. You may uncheck Stack Builder & click **Next**.

<img src="https://drive.google.com/uc?id=1mn7GOjWWMk2EIQJZOpBRG8qdFl8wfr7E" alt="step6">

* **Step 7** - You may change the data location & click **Next**.

<img src="https://drive.google.com/uc?id=1GEoWSlkSo9hI9eJFuYSfzVWKULwVIeNp" alt="step7">

* **Step 8** - Enter **super user password**. Make a note of it & click **Next**.

<img src="https://drive.google.com/uc?id=1HYCAFzb42ZiLP0LhgE2TQTV5BRa0KRHd" alt="step8">

* **Step 9** - Leave the **port number default** & click **Next**.

<img src="https://drive.google.com/uc?id=1_6V2AtoAw-xFh8kC0tVSPINEMQCeAVUx" alt="step9">

* **Step 10** - Check the pre-installation summary & click **Next**.

<img src="https://drive.google.com/uc?id=199XYQ96gizQD-pcbwH9mDIDnvSN4ciu6" alt="step10">

* **Step 11** - Wait for installation.

<img src="https://drive.google.com/uc?id=1eyU7MQTDy22DUrtdo5dWxhqt8WC-SwMo" alt="step11">

* **Step 12** - Once install is complete you will see the Stack Builder prompt, uncheck that option(for advanced tools). click **Finish**.

<img src="https://drive.google.com/uc?id=1LHAA0id0mYXSbJAmam5XTcO5vl5ODkhv" alt="step12">

* **Step 13** - To launch PostgreSQL go to Start Menu and search pgAdmin 4.

<img src="https://drive.google.com/uc?id=1Le82ZaMFI77G4GQb2rTMVYk5LSbwEiOM" alt="step13">

* **Step 14** - You will see pgAdmin homepage.

<img src="https://drive.google.com/uc?id=1WaMF38UYOdaKwUPiXnrugphv1jWFefzs" alt="step14">

* **Step 15** - Click on Servers > PostgreSQL 11 in the left tree.

<img src="https://drive.google.com/uc?id=1_PDyE3iuyRYJ3cIrMpNKiaXY-15c90bE" alt="step15">

* **Step 16** - Enter super user password set during installation & click **OK**.

<img src="https://drive.google.com/uc?id=1oXR_uPVqI34j7CObVzvZOYPurmRJ9T_1" alt="step16">

* **Step 17** - You will see the Dashboard.

<img src="https://drive.google.com/uc?id=1gXmdtLrZWiHfiQcFlTtY7R1rPC-hUY_3" alt="step17">

### 2. Install PostgreSQL Using Source Code  [On Debian/Ubuntu].

* **Step 1** - First install required prerequisites such as gcc, readline-devel and zlib-devel using package manager.

`# apt install gcc zlib1g-dev libreadline6-dev`.

* **Step 2** - Download the source code tar file from the official postgres website using the following wget command directly on system (we using version 10 here for demonstration).

`# wget https://ftp.postgresql.org/pub/source/v10.0/postgresql-10.0.tar.bz2`.

* **Step 3** - Use tar command to extract the downloaded tarball file. New directory named postgresql-10.0 will be created.

`# tar -xvf postgresql-10.0.tar.bz2`.<br>
`# ll`.
 
 * **Step 4** - Next step for installation procedure is to configure the downloaded source code by choosing the options according to your needs.
 
`# cd postgresql-10.0`.
 
 use `./configure --help` to get help about various options.
 
 * **Step 5** - Now create a directory where you want to install PostgreSQL files and use prefix option with configure.
 
`# mkdir /opt/PostgreSQL-10/`.<br>
`# ./configure --prefix=/opt/PostgreSQL-10`.

* **Step 6** - After configuring, next we will start to build PostgreSQL using make command.

`# make`.

* **Step 7** - After build process finishes, now install PostgreSQL using following command.

`# make install`.

*PostgreSQL 10 has been installed in /opt/PostgreSQL-10 directory.*

## Problems

**Common issues users get while installing:**
* **Using non english characters in password** - Avoid using it.

## Supplemental Materials
- [Commands](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) - A list of PostgreSQL commands on github gist.
