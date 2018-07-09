/* eslint-disable */
export const travisLog = {
  data: `travis_fold:start:worker_info
  [0K[33;1mWorker information[0m
  hostname: bb2e1d7a-89af-444e-8e68-db4ac5848821@1.production-1-worker-org-03-packet
  version: v3.10.0 https://github.com/travis-ci/worker/tree/fe0fc6b62205b7548599ce4537c49ead63122c38
  instance: 7f958fe travisci/ci-garnet:packer-1512502276-986baf0 (via amqp)
  startup: 508.033617ms
  travis_fold:end:worker_info
  [0Ktravis_fold:start:system_info
  [0K[33;1mBuild system information[0m
  Build language: node_js
  Build group: stable
  Build dist: trusty
  Build id: 401570395
  Job id: 401570396
  Runtime kernel version: 4.4.0-112-generic
  travis-build version: e2a995511
  [34m[1mBuild image provisioning date and time[0m
  Tue Dec  5 20:11:19 UTC 2017
  [34m[1mOperating System Details[0m
  Distributor ID:	Ubuntu
  Description:	Ubuntu 14.04.5 LTS
  Release:	14.04
  Codename:	trusty
  [34m[1mCookbooks Version[0m
  7c2c6a6 https://github.com/travis-ci/travis-cookbooks/tree/7c2c6a6
  [34m[1mgit version[0m
  git version 2.15.1
  [34m[1mbash version[0m
  GNU bash, version 4.3.11(1)-release (x86_64-pc-linux-gnu)
  [34m[1mgcc version[0m
  gcc (Ubuntu 4.8.4-2ubuntu1~14.04.3) 4.8.4
  Copyright (C) 2013 Free Software Foundation, Inc.
  This is free software; see the source for copying conditions.  There is NO
  warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

  [34m[1mdocker version[0m
  Client:
   Version:      17.09.0-ce
   API version:  1.32
   Go version:   go1.8.3
   Git commit:   afdb6d4
   Built:        Tue Sep 26 22:39:28 2017
   OS/Arch:      linux/amd64
  [34m[1mclang version[0m
  clang version 5.0.0 (tags/RELEASE_500/final)
  Target: x86_64-unknown-linux-gnu
  Thread model: posix
  InstalledDir: /usr/local/clang-5.0.0/bin
  [34m[1mjq version[0m
  jq-1.5
  [34m[1mbats version[0m
  Bats 0.4.0
  [34m[1mshellcheck version[0m
  0.4.6
  [34m[1mshfmt version[0m
  v2.0.0
  [34m[1mccache version[0m
  ccache version 3.1.9

  Copyright (C) 2002-2007 Andrew Tridgell
  Copyright (C) 2009-2011 Joel Rosdahl

  This program is free software; you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation; either version 3 of the License, or (at your option) any later
  version.
  [34m[1mcmake version[0m
  cmake version 3.9.2

  CMake suite maintained and supported by Kitware (kitware.com/cmake).
  [34m[1mheroku version[0m
  heroku-cli/6.14.39-addc925 (linux-x64) node-v9.2.0
  [34m[1mimagemagick version[0m
  Version: ImageMagick 6.7.7-10 2017-07-31 Q16 http://www.imagemagick.org
  [34m[1mmd5deep version[0m
  4.2
  [34m[1mmercurial version[0m
  Mercurial Distributed SCM (version 4.2.2)
  (see https://mercurial-scm.org for more information)

  Copyright (C) 2005-2017 Matt Mackall and others
  This is free software; see the source for copying conditions. There is NO
  warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  [34m[1mmysql version[0m
  mysql  Ver 14.14 Distrib 5.6.33, for debian-linux-gnu (x86_64) using  EditLine wrapper
  [34m[1mopenssl version[0m
  OpenSSL 1.0.1f 6 Jan 2014
  [34m[1mpacker version[0m
  Packer v1.0.2

  Your version of Packer is out of date! The latest version
  is 1.1.2. You can update by downloading from www.packer.io
  [34m[1mpostgresql client version[0m
  psql (PostgreSQL) 9.6.6
  [34m[1mragel version[0m
  Ragel State Machine Compiler version 6.8 Feb 2013
  Copyright (c) 2001-2009 by Adrian Thurston
  [34m[1msubversion version[0m
  svn, version 1.8.8 (r1568071)
     compiled Aug 10 2017, 17:20:39 on x86_64-pc-linux-gnu

  Copyright (C) 2013 The Apache Software Foundation.
  This software consists of contributions made by many people;
  see the NOTICE file for more information.
  Subversion is open source software, see http://subversion.apache.org/

  The following repository access (RA) modules are available:

  * ra_svn : Module for accessing a repository using the svn network protocol.
    - with Cyrus SASL authentication
    - handles 'svn' scheme
  * ra_local : Module for accessing a repository on local disk.
    - handles 'file' scheme
  * ra_serf : Module for accessing a repository via WebDAV protocol using serf.
    - using serf 1.3.3
    - handles 'http' scheme
    - handles 'https' scheme

  [34m[1msudo version[0m
  Sudo version 1.8.9p5
  Configure options: --prefix=/usr -v --with-all-insults --with-pam --with-fqdn --with-logging=syslog --with-logfac=authpriv --with-env-editor --with-editor=/usr/bin/editor --with-timeout=15 --with-password-timeout=0 --with-passprompt=[sudo] password for %p:  --without-lecture --with-tty-tickets --disable-root-mailer --enable-admin-flag --with-sendmail=/usr/sbin/sendmail --with-timedir=/var/lib/sudo --mandir=/usr/share/man --libexecdir=/usr/lib/sudo --with-sssd --with-sssd-lib=/usr/lib/x86_64-linux-gnu --with-selinux
  Sudoers policy plugin version 1.8.9p5
  Sudoers file grammar version 43

  Sudoers path: /etc/sudoers
  Authentication methods: 'pam'
  Syslog facility if syslog is being used for logging: authpriv
  Syslog priority to use when user authenticates successfully: notice
  Syslog priority to use when user authenticates unsuccessfully: alert
  Send mail if the user is not in sudoers
  Use a separate timestamp for each user/tty combo
  Lecture user the first time they run sudo
  Root may run sudo
  Allow some information gathering to give useful error messages
  Require fully-qualified hostnames in the sudoers file
  Visudo will honor the EDITOR environment variable
  Set the LOGNAME and USER environment variables
  Length at which to wrap log file lines (0 for no wrap): 80
  Authentication timestamp timeout: 15.0 minutes
  Password prompt timeout: 0.0 minutes
  Number of tries to enter a password: 3
  Umask to use or 0777 to use user's: 022
  Path to mail program: /usr/sbin/sendmail
  Flags for mail program: -t
  Address to send mail to: root
  Subject line for mail messages: *** SECURITY information for %h ***
  Incorrect password message: Sorry, try again.
  Path to authentication timestamp dir: /var/lib/sudo
  Default password prompt: [sudo] password for %p:
  Default user to run commands as: root
  Value to override user's $PATH with: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin
  Path to the editor for use by visudo: /usr/bin/editor
  When to require a password for 'list' pseudocommand: any
  When to require a password for 'verify' pseudocommand: all
  File descriptors >= 3 will be closed before executing a command
  Environment variables to check for sanity:
    TZ
    TERM
    LINGUAS
    LC_*
    LANGUAGE
    LANG
    COLORTERM
  Environment variables to remove:
    RUBYOPT
    RUBYLIB
    PYTHONUSERBASE
    PYTHONINSPECT
    PYTHONPATH
    PYTHONHOME
    TMPPREFIX
    ZDOTDIR
    READNULLCMD
    NULLCMD
    FPATH
    PERL5DB
    PERL5OPT
    PERL5LIB
    PERLLIB
    PERLIO_DEBUG
    JAVA_TOOL_OPTIONS
    SHELLOPTS
    GLOBIGNORE
    PS4
    BASH_ENV
    ENV
    TERMCAP
    TERMPATH
    TERMINFO_DIRS
    TERMINFO
    _RLD*
    LD_*
    PATH_LOCALE
    NLSPATH
    HOSTALIASES
    RES_OPTIONS
    LOCALDOMAIN
    CDPATH
    IFS
  Environment variables to preserve:
    JAVA_HOME
    TRAVIS
    CI
    DEBIAN_FRONTEND
    XAUTHORIZATION
    XAUTHORITY
    PS2
    PS1
    PATH
    LS_COLORS
    KRB5CCNAME
    HOSTNAME
    HOME
    DISPLAY
    COLORS
  Locale to use while parsing sudoers: C
  Directory in which to store input/output logs: /var/log/sudo-io
  File in which to store the input/output log: %{seq}
  Add an entry to the utmp/utmpx file when allocating a pty
  PAM service name to use
  PAM service name to use for login shells
  Create a new PAM session for the command to run in
  Maximum I/O log sequence number: 0

  Local IP address and netmask pairs:
    172.17.0.2/255.255.0.0

  Sudoers I/O plugin version 1.8.9p5
  [34m[1mgzip version[0m
  gzip 1.6
  Copyright (C) 2007, 2010, 2011 Free Software Foundation, Inc.
  Copyright (C) 1993 Jean-loup Gailly.
  This is free software.  You may redistribute copies of it under the terms of
  the GNU General Public License <http://www.gnu.org/licenses/gpl.html>.
  There is NO WARRANTY, to the extent permitted by law.

  Written by Jean-loup Gailly.
  [34m[1mzip version[0m
  Copyright (c) 1990-2008 Info-ZIP - Type 'zip "-L"' for software license.
  This is Zip 3.0 (July 5th 2008), by Info-ZIP.
  Currently maintained by E. Gordon.  Please send bug reports to
  the authors using the web page at www.info-zip.org; see README for details.

  Latest sources and executables are at ftp://ftp.info-zip.org/pub/infozip,
  as of above date; see http://www.info-zip.org/ for other sites.

  Compiled with gcc 4.8.2 for Unix (Linux ELF) on Oct 21 2013.

  Zip special compilation options:
    USE_EF_UT_TIME       (store Universal Time)
    BZIP2_SUPPORT        (bzip2 library version 1.0.6, 6-Sept-2010)
        bzip2 code and library copyright (c) Julian R Seward
        (See the bzip2 license for terms of use)
    SYMLINK_SUPPORT      (symbolic links supported)
    LARGE_FILE_SUPPORT   (can read and write large files on file system)
    ZIP64_SUPPORT        (use Zip64 to store large files in archives)
    UNICODE_SUPPORT      (store and read UTF-8 Unicode paths)
    STORE_UNIX_UIDs_GIDs (store UID/GID sizes/values using new extra field)
    UIDGID_NOT_16BIT     (old Unix 16-bit UID/GID extra field not used)
    [encryption, version 2.91 of 05 Jan 2007] (modified for Zip 3)

  Encryption notice:
    The encryption code of this program is not copyrighted and is
    put in the public domain.  It was originally written in Europe
    and, to the best of our knowledge, can be freely distributed
    in both source and object forms from any country, including
    the USA under License Exception TSU of the U.S. Export
    Administration Regulations (section 740.13(e)) of 6 June 2002.

  Zip environment options:
               ZIP:  [none]
            ZIPOPT:  [none]
  [34m[1mvim version[0m
  VIM - Vi IMproved 7.4 (2013 Aug 10, compiled Nov 24 2016 16:43:18)
  Included patches: 1-52
  Extra patches: 8.0.0056
  Modified by pkg-vim-maintainers@lists.alioth.debian.org
  Compiled by buildd@
  Huge version without GUI.  Features included (+) or not (-):
  +acl             +farsi           +mouse_netterm   +syntax
  +arabic          +file_in_path    +mouse_sgr       +tag_binary
  +autocmd         +find_in_path    -mouse_sysmouse  +tag_old_static
  -balloon_eval    +float           +mouse_urxvt     -tag_any_white
  -browse          +folding         +mouse_xterm     -tcl
  ++builtin_terms  -footer          +multi_byte      +terminfo
  +byte_offset     +fork()          +multi_lang      +termresponse
  +cindent         +gettext         -mzscheme        +textobjects
  -clientserver    -hangul_input    +netbeans_intg   +title
  -clipboard       +iconv           +path_extra      -toolbar
  +cmdline_compl   +insert_expand   -perl            +user_commands
  +cmdline_hist    +jumplist        +persistent_undo +vertsplit
  +cmdline_info    +keymap          +postscript      +virtualedit
  +comments        +langmap         +printer         +visual
  +conceal         +libcall         +profile         +visualextra
  +cryptv          +linebreak       +python          +viminfo
  +cscope          +lispindent      -python3         +vreplace
  +cursorbind      +listcmds        +quickfix        +wildignore
  +cursorshape     +localmap        +reltime         +wildmenu
  +dialog_con      -lua             +rightleft       +windows
  +diff            +menu            -ruby            +writebackup
  +digraphs        +mksession       +scrollbind      -X11
  -dnd             +modify_fname    +signs           -xfontset
  -ebcdic          +mouse           +smartindent     -xim
  +emacs_tags      -mouseshape      -sniff           -xsmp
  +eval            +mouse_dec       +startuptime     -xterm_clipboard
  +ex_extra        +mouse_gpm       +statusline      -xterm_save
  +extra_search    -mouse_jsbterm   -sun_workshop    -xpm
     system vimrc file: "$VIM/vimrc"
       user vimrc file: "$HOME/.vimrc"
   2nd user vimrc file: "~/.vim/vimrc"
        user exrc file: "$HOME/.exrc"
    fall-back for $VIM: "/usr/share/vim"
  Compilation: gcc -c -I. -Iproto -DHAVE_CONFIG_H     -g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=1
  Linking: gcc   -Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,--as-needed -o vim        -lm -ltinfo -lnsl  -lselinux  -lacl -lattr -lgpm -ldl    -L/usr/lib/python2.7/config-x86_64-linux-gnu -lpython2.7 -lpthread -ldl -lutil -lm -Xlinker -export-dynamic -Wl,-O1 -Wl,-Bsymbolic-functions
  [34m[1miptables version[0m
  iptables v1.4.21
  [34m[1mcurl version[0m
  curl 7.35.0 (x86_64-pc-linux-gnu) libcurl/7.35.0 OpenSSL/1.0.1f zlib/1.2.8 libidn/1.28 librtmp/2.3
  [34m[1mwget version[0m
  GNU Wget 1.15 built on linux-gnu.
  [34m[1mrsync version[0m
  rsync  version 3.1.0  protocol version 31
  [34m[1mgimme version[0m
  v1.2.0
  [34m[1mnvm version[0m
  0.33.6
  [34m[1mperlbrew version[0m
  /home/travis/perl5/perlbrew/bin/perlbrew  - App::perlbrew/0.80
  [34m[1mphpenv version[0m
  rbenv 1.1.1-25-g6aa70b6
  [34m[1mrvm version[0m
  rvm 1.29.3 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
  [34m[1mdefault ruby version[0m
  ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-linux]
  [34m[1mCouchDB version[0m
  couchdb 1.6.1
  [34m[1mElasticSearch version[0m
  5.5.0
  [34m[1mInstalled Firefox version[0m
  firefox 56.0.2
  [34m[1mMongoDB version[0m
  MongoDB 3.4.10
  [34m[1mPhantomJS version[0m
  2.1.1
  [34m[1mPre-installed PostgreSQL versions[0m
  9.2.24
  9.3.20
  9.4.15
  9.5.10
  9.6.6
  [34m[1mRabbitMQ Version[0m
  3.6.14
  [34m[1mRedis version[0m
  redis-server 4.0.6
  [34m[1mriak version[0m
  2.2.3
  [34m[1mPre-installed Go versions[0m
  1.7.4
  [34m[1mant version[0m
  Apache Ant(TM) version 1.9.3 compiled on April 8 2014
  [34m[1mmvn version[0m
  Apache Maven 3.5.2 (138edd61fd100ec658bfa2d307c43b76940a5d7d; 2017-10-18T07:58:13Z)
  Maven home: /usr/local/maven-3.5.2
  Java version: 1.8.0_151, vendor: Oracle Corporation
  Java home: /usr/lib/jvm/java-8-oracle/jre
  Default locale: en_US, platform encoding: UTF-8
  OS name: "linux", version: "4.4.0-101-generic", arch: "amd64", family: "unix"
  [34m[1mgradle version[0m

  ------------------------------------------------------------
  Gradle 4.0.1
  ------------------------------------------------------------

  Build time:   2017-07-07 14:02:41 UTC
  Revision:     38e5dc0f772daecca1d2681885d3d85414eb6826

  Groovy:       2.4.11
  Ant:          Apache Ant(TM) version 1.9.6 compiled on June 29 2015
  JVM:          1.8.0_151 (Oracle Corporation 25.151-b12)
  OS:           Linux 4.4.0-101-generic amd64

  [34m[1mlein version[0m
  Leiningen 2.8.1 on Java 1.8.0_151 Java HotSpot(TM) 64-Bit Server VM
  [34m[1mPre-installed Node.js versions[0m
  v4.8.6
  v6.12.0
  v6.12.1
  v8.9
  v8.9.1
  [34m[1mphpenv versions[0m
    system
    5.6
  * 5.6.32 (set by /home/travis/.phpenv/version)
    7.0
    7.0.25
    7.1
    7.1.11
    hhvm
    hhvm-stable
  [34m[1mcomposer --version[0m
  Composer version 1.5.2 2017-09-11 16:59:25
  [34m[1mPre-installed Ruby versions[0m
  ruby-2.2.7
  ruby-2.3.4
  ruby-2.4.1
  travis_fold:end:system_info
  [0K
  [32;1mNetwork availability confirmed.[0m


  travis_fold:start:git.checkout
  [0Ktravis_time:start:147d2656
  [0K$ git clone --depth=50 https://github.com/pixelmixer/github-ci-monitor-example.git pixelmixer/github-ci-monitor-example
  Cloning into 'pixelmixer/github-ci-monitor-example'...
  remote: Counting objects: 60, done.[K
  remote: Compressing objects:   3% (1/31)   [K
  remote: Compressing objects:   6% (2/31)   [K
  remote: Compressing objects:   9% (3/31)   [K
  remote: Compressing objects:  12% (4/31)   [K
  remote: Compressing objects:  16% (5/31)   [K
  remote: Compressing objects:  19% (6/31)   [K
  remote: Compressing objects:  22% (7/31)   [K
  remote: Compressing objects:  25% (8/31)   [K
  remote: Compressing objects:  29% (9/31)   [K
  remote: Compressing objects:  32% (10/31)   [K
  remote: Compressing objects:  35% (11/31)   [K
  remote: Compressing objects:  38% (12/31)   [K
  remote: Compressing objects:  41% (13/31)   [K
  remote: Compressing objects:  45% (14/31)   [K
  remote: Compressing objects:  48% (15/31)   [K
  remote: Compressing objects:  51% (16/31)   [K
  remote: Compressing objects:  54% (17/31)   [K
  remote: Compressing objects:  58% (18/31)   [K
  remote: Compressing objects:  61% (19/31)   [K
  remote: Compressing objects:  64% (20/31)   [K
  remote: Compressing objects:  67% (21/31)   [K
  remote: Compressing objects:  70% (22/31)   [K
  remote: Compressing objects:  74% (23/31)   [K
  remote: Compressing objects:  77% (24/31)   [K
  remote: Compressing objects:  80% (25/31)   [K
  remote: Compressing objects:  83% (26/31)   [K
  remote: Compressing objects:  87% (27/31)   [K
  remote: Compressing objects:  90% (28/31)   [K
  remote: Compressing objects:  93% (29/31)   [K
  remote: Compressing objects:  96% (30/31)   [K
  remote: Compressing objects: 100% (31/31)   [K
  remote: Compressing objects: 100% (31/31), done.[K
  Unpacking objects:   1% (1/60)
  Unpacking objects:   3% (2/60)
  Unpacking objects:   5% (3/60)
  Unpacking objects:   6% (4/60)
  Unpacking objects:   8% (5/60)
  Unpacking objects:  10% (6/60)
  Unpacking objects:  11% (7/60)
  Unpacking objects:  13% (8/60)
  Unpacking objects:  15% (9/60)
  Unpacking objects:  16% (10/60)
  Unpacking objects:  18% (11/60)
  Unpacking objects:  20% (12/60)
  Unpacking objects:  21% (13/60)
  Unpacking objects:  23% (14/60)
  Unpacking objects:  25% (15/60)
  Unpacking objects:  26% (16/60)
  Unpacking objects:  28% (17/60)
  Unpacking objects:  30% (18/60)
  Unpacking objects:  31% (19/60)
  Unpacking objects:  33% (20/60)
  Unpacking objects:  35% (21/60)
  Unpacking objects:  36% (22/60)
  Unpacking objects:  38% (23/60)
  Unpacking objects:  40% (24/60)
  Unpacking objects:  41% (25/60)
  Unpacking objects:  43% (26/60)
  Unpacking objects:  45% (27/60)
  Unpacking objects:  46% (28/60)
  Unpacking objects:  48% (29/60)
  remote: Total 60 (delta 27), reused 58 (delta 26), pack-reused 0[K
  Unpacking objects:  50% (30/60)
  Unpacking objects:  51% (31/60)
  Unpacking objects:  53% (32/60)
  Unpacking objects:  55% (33/60)
  Unpacking objects:  56% (34/60)
  Unpacking objects:  58% (35/60)
  Unpacking objects:  60% (36/60)
  Unpacking objects:  61% (37/60)
  Unpacking objects:  63% (38/60)
  Unpacking objects:  65% (39/60)
  Unpacking objects:  66% (40/60)
  Unpacking objects:  68% (41/60)
  Unpacking objects:  70% (42/60)
  Unpacking objects:  71% (43/60)
  Unpacking objects:  73% (44/60)
  Unpacking objects:  75% (45/60)
  Unpacking objects:  76% (46/60)
  Unpacking objects:  78% (47/60)
  Unpacking objects:  80% (48/60)
  Unpacking objects:  81% (49/60)
  Unpacking objects:  83% (50/60)
  Unpacking objects:  85% (51/60)
  Unpacking objects:  86% (52/60)
  Unpacking objects:  88% (53/60)
  Unpacking objects:  90% (54/60)
  Unpacking objects:  91% (55/60)
  Unpacking objects:  93% (56/60)
  Unpacking objects:  95% (57/60)
  Unpacking objects:  96% (58/60)
  Unpacking objects:  98% (59/60)
  Unpacking objects: 100% (60/60)
  Unpacking objects: 100% (60/60), done.

  travis_time:end:147d2656:start=1531095892008901502,finish=1531095892369371517,duration=360470015
  [0K$ cd pixelmixer/github-ci-monitor-example
  travis_time:start:107660a5
  [0K$ git fetch origin +refs/pull/2/merge:
  remote: Counting objects: 13, done.[K
  remote: Compressing objects:  14% (1/7)   [K
  remote: Compressing objects:  28% (2/7)   [K
  remote: Compressing objects:  42% (3/7)   [K
  remote: Compressing objects:  57% (4/7)   [K
  remote: Compressing objects:  71% (5/7)   [K
  remote: Compressing objects:  85% (6/7)   [K
  remote: Compressing objects: 100% (7/7)   [K
  remote: Compressing objects: 100% (7/7), done.[K
  remote: Total 13 (delta 9), reused 9 (delta 6), pack-reused 0[K
  Unpacking objects:   7% (1/13)
  Unpacking objects:  15% (2/13)
  Unpacking objects:  23% (3/13)
  Unpacking objects:  30% (4/13)
  Unpacking objects:  38% (5/13)
  Unpacking objects:  46% (6/13)
  Unpacking objects:  53% (7/13)
  Unpacking objects:  61% (8/13)
  Unpacking objects:  69% (9/13)
  Unpacking objects:  76% (10/13)
  Unpacking objects:  84% (11/13)
  Unpacking objects:  92% (12/13)
  Unpacking objects: 100% (13/13)
  Unpacking objects: 100% (13/13), done.
  From https://github.com/pixelmixer/github-ci-monitor-example
   * branch            refs/pull/2/merge -> FETCH_HEAD

  travis_time:end:107660a5:start=1531095892373389981,finish=1531095892639713295,duration=266323314
  [0K$ git checkout -qf FETCH_HEAD
  travis_fold:end:git.checkout
  [0K$ export PATH=./node_modules/.bin:$PATH
  [33;1mUpdating nvm[0m
  [33;1mUsing nodejs version from .nvmrc[0m
  travis_fold:start:nvm.install
  [0Ktravis_time:start:18c66060
  [0K$ nvm install $(< .nvmrc)
  Downloading and installing node v8.11.1...
  Downloading https://nodejs.org/dist/v8.11.1/node-v8.11.1-linux-x64.tar.xz...
  Computing checksum with sha256sum
  Checksums matched!
  Now using node v8.11.1 (npm v5.6.0)

  travis_time:end:18c66060:start=1531095893245348644,finish=1531095895782334391,duration=2536985747
  [0Ktravis_fold:end:nvm.install
  [0Ktravis_fold:start:install.yarn
  [0Ktravis_fold:end:install.yarn
  [0Ktravis_fold:start:cache.1
  [0KSetting up build cache
  $ export CASHER_DIR=$HOME/.casher
  travis_time:start:04224a56
  [0K$ Installing caching utilities

  travis_time:end:04224a56:start=1531095900557716904,finish=1531095900611944414,duration=54227510
  [0Ktravis_time:start:1796438d
  [0K
  travis_time:end:1796438d:start=1531095900618642389,finish=1531095900623240175,duration=4597786
  [0Ktravis_time:start:03c24acd
  [0K[32;1mattempting to download cache archive[0m
  [32;1mfetching PR.2/cache-linux-trusty-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855--node-.tgz[0m
  [32;1mfetching PR.2/cache--node-.tgz[0m
  [32;1mfetching master/cache-linux-trusty-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855--node-.tgz[0m
  [32;1mfound cache[0m

  travis_time:end:03c24acd:start=1531095900628253193,finish=1531095906211071214,duration=5582818021
  [0Ktravis_time:start:2644d34a
  [0K
  travis_time:end:2644d34a:start=1531095906214684244,finish=1531095906217925934,duration=3241690
  [0Ktravis_time:start:0f0dfff1
  [0K[32;1madding /home/travis/build/pixelmixer/github-ci-monitor-example/node_modules to cache[0m
  [32;1mcreating directory /home/travis/build/pixelmixer/github-ci-monitor-example/node_modules[0m

  travis_time:end:0f0dfff1:start=1531095906221565454,finish=1531095908812933079,duration=2591367625
  [0Ktravis_fold:end:cache.1
  [0K$ node --version
  v8.11.1
  $ npm --version
  5.6.0
  $ nvm --version
  0.33.11
  $ yarn --version
  1.3.2
  travis_fold:start:install
  [0Ktravis_time:start:00b137c0
  [0K$ yarn
  [2K[1G[1myarn install v1.3.2[22m
  [2K[1G[2m[1/4][22m Resolving packages...
  [1G[0K[2K[1G[2K[1G[32msuccess[39m Already up-to-date.
  [2K[1GDone in 0.56s.

  travis_time:end:00b137c0:start=1531095909312427712,finish=1531095910172054742,duration=859627030
  [0Ktravis_fold:end:install
  [0Ktravis_time:start:080ed3d9
  [0K$ yarn test
  [2K[1G[1myarn run v1.3.2[22m
  [2K[1G[2m$ jest src[22m
  [0m[7m[1m[31m FAIL [39m[22m[27m[0m [2msrc/[22m[1msum.test.js[22m
    [31m✕[39m [2mSum correctly adds two basic numbers (10ms)[22m
    [32m✓[39m [2mSum adds an arbitrary amount of numbers (2ms)[22m
    [31m✕[39m [2mSums are calculated consistently (1ms)[22m

  [1m[31m  [1m● [1mSum correctly adds two basic numbers[39m[22m

      [2mexpect([22m[31mreceived[39m[2m).toBe([22m[32mexpected[39m[2m) // Object.is equality[22m

      Expected: [32m5[39m
      Received: [31m4[39m
  [2m[22m
  [2m    [0m [90m 2 | [39m[0m[22m
  [2m    [0m [90m 3 | [39mtest([32m'Sum correctly adds two basic numbers'[39m[33m,[39m () [33m=>[39m {[0m[22m
  [2m    [0m[31m[1m>[2m[39m[90m 4 | [39m  expect(sum([35m2[39m[33m,[39m [35m2[39m))[33m.[39mtoBe([35m5[39m)[33m;[39m[0m[22m
  [2m    [0m [90m   | [39m                    [31m[1m^[2m[39m[0m[22m
  [2m    [0m [90m 5 | [39m})[33m;[39m[0m[22m
  [2m    [0m [90m 6 | [39m[0m[22m
  [2m    [0m [90m 7 | [39mtest([32m'Sum adds an arbitrary amount of numbers'[39m[33m,[39m () [33m=>[39m {[0m[22m
  [2m[22m
  [2m      [2mat Object.<anonymous> ([2m[0m[36msrc/sum.test.js[39m[0m[2m:4:21)[2m[22m

  [1m[31m  [1m● [1mSums are calculated consistently[39m[22m

      [2mexpect([22m[31mreceived[39m[2m).toBeGreaterThan([22m[32mexpected[39m[2m)[22m

      Expected: [32m111[39m
      Received: [31m30[39m
  [2m[22m
  [2m    [0m [90m 19 | [39m[0m[22m
  [2m    [0m [90m 20 | [39mtest([32m'Sums are calculated consistently'[39m[33m,[39m () [33m=>[39m {[0m[22m
  [2m    [0m[31m[1m>[2m[39m[90m 21 | [39m  expect(sum([35m4[39m[33m,[39m [35m5[39m[33m,[39m [35m6[39m[33m,[39m [35m7[39m[33m,[39m [35m8[39m))[33m.[39mtoBeGreaterThan(sum([35m100[39m[33m,[39m [35m2[39m[33m,[39m [35m3[39m[33m,[39m [35m1[39m[33m,[39m [35m5[39m))[33m;[39m[0m[22m
  [2m    [0m [90m    | [39m                             [31m[1m^[2m[39m[0m[22m
  [2m    [0m [90m 22 | [39m})[33m;[39m[0m[22m
  [2m    [0m [90m 23 | [39m[0m[22m
  [2m[22m
  [2m      [2mat Object.<anonymous> ([2m[0m[36msrc/sum.test.js[39m[0m[2m:21:30)[2m[22m

  [999D[K[1mTest Suites: [22m[1m[31m1 failed[39m[22m, 1 total
  [1mTests:       [22m[1m[31m2 failed[39m[22m, [1m[32m1 passed[39m[22m, 3 total
  [1mSnapshots:   [22m0 total
  [1mTime:[22m        1.375s
  [2mRan all test suites[22m[2m matching [22m/src/i[2m.[22m
  [2K[1G[31merror[39m Command failed with exit code 1.
  [2K[1G[34minfo[39m Visit [1mhttps://yarnpkg.com/en/docs/cli/run[22m for documentation about this command.

  travis_time:end:080ed3d9:start=1531095910184331231,finish=1531095914238336198,duration=4054004967
  [0K
  [31;1mThe command "yarn test" exited with 1.[0m
  travis_fold:start:cache.2
  [0Kstore build cache
  travis_time:start:03aa8500
  [0K
  travis_time:end:03aa8500:start=1531095914243740154,finish=1531095914247889334,duration=4149180
  [0Ktravis_time:start:09cec7b5
  [0K[32;1mnothing changed, not updating cache[0m

  travis_time:end:09cec7b5:start=1531095914253354134,finish=1531095916500071041,duration=2246716907
  [0Ktravis_fold:end:cache.2
  [0K
  Done. Your build exited with 1.`}
