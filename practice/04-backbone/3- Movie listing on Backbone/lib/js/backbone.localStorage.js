


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>Backbone.localStorage/backbone.localStorage.js at master · jeromegn/Backbone.localStorage</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jeromegn/Backbone.localStorage" name="twitter:title" /><meta content="Backbone.localStorage - A localStorage adapter for Backbone.js" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/43325?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/43325?v=3&amp;s=400" property="og:image" /><meta content="jeromegn/Backbone.localStorage" property="og:title" /><meta content="https://github.com/jeromegn/Backbone.localStorage" property="og:url" /><meta content="Backbone.localStorage - A localStorage adapter for Backbone.js" property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="B56C503A:5260:A0FE55A:54FD4887" name="octolytics-dimension-request_id" /><meta content="10978144" name="octolytics-actor-id" /><meta content="groncedo" name="octolytics-actor-login" /><meta content="d5d750d4a88e5798cbf2aec2b1c0d60a99804474c9cf155bbc90b6c1fc0915a7" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="0uw36ME2MDJyKsDvvbtVYVFhCzJZWaqj6KPCye9gxlP5RvJnv4xoNKiiayvp03Kgdvbwe+fqvfGpnOb4Ukk/BQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-de927e2906c40d418e6167abdba19ec436281bbdfe83d193db3e4a4a34a806b7.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-5b6b3b7e2cf65a583ee133afec7acb992ede9cbdb174d26d0ce68177e0899c80.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="8ebc0f16dd22cfe83f365608222868dd">

      
  <meta name="description" content="Backbone.localStorage - A localStorage adapter for Backbone.js">
  <meta name="go-import" content="github.com/jeromegn/Backbone.localStorage git https://github.com/jeromegn/Backbone.localStorage.git">

  <meta content="43325" name="octolytics-dimension-user_id" /><meta content="jeromegn" name="octolytics-dimension-user_login" /><meta content="1022555" name="octolytics-dimension-repository_id" /><meta content="jeromegn/Backbone.localStorage" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1022555" name="octolytics-dimension-repository_network_root_id" /><meta content="jeromegn/Backbone.localStorage" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jeromegn/Backbone.localStorage/commits/master.atom" rel="alternate" title="Recent Commits to Backbone.localStorage:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/jeromegn/Backbone.localStorage/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/jeromegn/Backbone.localStorage/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/groncedo" data-ga-click="Header, go to profile, text:username">
      <img alt="Gonzalo" class="avatar" data-user="10978144" height="20" src="https://avatars0.githubusercontent.com/u/10978144?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">groncedo</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="jeromegn/Backbone.localStorage">This repository</span>
    </li>
      <li>
        <a href="/jeromegn/Backbone.localStorage/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="80yLUq4PiUYcAdJEjapQVhyjGTGTmdAHi4Q2G8l3R5OYpPuSGBrNc+IzIpYhzf0Qy8rvigVMKhS1YmB1HWwG7g==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ct1zK2BwOoYrTFJO7Vbhi33FcgrvrMJDGV8WTQrc0utbAH6ezMFgsSRL7ckHdtaUdLJoXyShx03AD79mME4bdA==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="1022555" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/watchers">
          77
        </a>
        <a href="/jeromegn/Backbone.localStorage/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>

  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/jeromegn/Backbone.localStorage/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0CSkZpxp1Z5jkmF3Zzaz9nbzdSI/qm0RjLRwqq3KyB2J1Tax8r8j8bjriXm+uOFBrNz94fNseK3PAuhxFi21+A==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jeromegn/Backbone.localStorage">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/stargazers">
          1,693
        </a>
</form>
    <form accept-charset="UTF-8" action="/jeromegn/Backbone.localStorage/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="U2Z+CEQRN4k7LYe3TO1diNBL6cOWY3c9HAW5pN4lhG9ZdCEHG0pmMSrNcaOi7RRIDPKsLgFnP+lVttR4Hr5jFA==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star jeromegn/Backbone.localStorage">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/stargazers">
          1,693
        </a>
</form>  </div>

  </li>

        <li>
          <a href="/jeromegn/Backbone.localStorage/fork" class="minibutton with-count js-toggler-target tooltipped-n" title="Fork your own copy of jeromegn/Backbone.localStorage to your account" aria-label="Fork your own copy of jeromegn/Backbone.localStorage to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/jeromegn/Backbone.localStorage/network" class="social-count">692</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jeromegn" class="url fn" itemprop="url" rel="author"><span itemprop="title">jeromegn</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jeromegn/Backbone.localStorage" class="js-current-repository" data-pjax="#js-repo-pjax-container">Backbone.localStorage</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/jeromegn/Backbone.localStorage/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/jeromegn/Backbone.localStorage" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jeromegn/Backbone.localStorage">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/jeromegn/Backbone.localStorage/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jeromegn/Backbone.localStorage/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/jeromegn/Backbone.localStorage/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /jeromegn/Backbone.localStorage/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/jeromegn/Backbone.localStorage/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /jeromegn/Backbone.localStorage/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/jeromegn/Backbone.localStorage/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /jeromegn/Backbone.localStorage/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/jeromegn/Backbone.localStorage/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /jeromegn/Backbone.localStorage/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/jeromegn/Backbone.localStorage.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:jeromegn/Backbone.localStorage.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/jeromegn/Backbone.localStorage" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save jeromegn/Backbone.localStorage to your computer and use it in GitHub Desktop." aria-label="Save jeromegn/Backbone.localStorage to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/jeromegn/Backbone.localStorage/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of jeromegn/Backbone.localStorage as a zip file"
                   title="Download the contents of jeromegn/Backbone.localStorage as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/jeromegn/Backbone.localStorage/blob/96b1b47b3ec920eec4a7ad81a26ad961c207f7fe/backbone.localStorage.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:3fbfb7a9c681bae4a0ccb76976537e87 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jeromegn/Backbone.localStorage/blob/gh-pages/backbone.localStorage.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jeromegn/Backbone.localStorage/blob/master/backbone.localStorage.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.16/backbone.localStorage.js"
                 data-name="v1.1.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.16">v1.1.16</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.15/backbone.localStorage.js"
                 data-name="v1.1.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.15">v1.1.15</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.14/backbone.localStorage.js"
                 data-name="v1.1.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.14">v1.1.14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.13/backbone.localStorage.js"
                 data-name="v1.1.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.13">v1.1.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.12/backbone.localStorage.js"
                 data-name="v1.1.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.12">v1.1.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.10/backbone.localStorage.js"
                 data-name="v1.1.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.10">v1.1.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.9/backbone.localStorage.js"
                 data-name="v1.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.9">v1.1.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.8/backbone.localStorage.js"
                 data-name="v1.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.8">v1.1.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.7/backbone.localStorage.js"
                 data-name="v1.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.7">v1.1.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.6/backbone.localStorage.js"
                 data-name="v1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.6">v1.1.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.5/backbone.localStorage.js"
                 data-name="v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.5">v1.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.4/backbone.localStorage.js"
                 data-name="v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.4">v1.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.3/backbone.localStorage.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.2/backbone.localStorage.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.1/backbone.localStorage.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.0/backbone.localStorage.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/jeromegn/Backbone.localStorage/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jeromegn/Backbone.localStorage" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Backbone.localStorage</span></a></span></span><span class="separator">/</span><strong class="final-path">backbone.localStorage.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Jerome Gravel-Niquet" class="avatar" data-user="43325" height="24" src="https://avatars0.githubusercontent.com/u/43325?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/jeromegn" rel="author">jeromegn</a></span>
        <time datetime="2015-01-22T14:43:22Z" is="relative-time">Jan 22, 2015</time>
        <div class="commit-title">
            <a href="/jeromegn/Backbone.localStorage/commit/728194adef60befefed1416825498d1b53cd517a" class="message" data-pjax="true" title="bump to 1.1.16">bump to 1.1.16</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>43</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="jeromegn" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=jeromegn"><img alt="Jerome Gravel-Niquet" class="avatar" data-user="43325" height="20" src="https://avatars2.githubusercontent.com/u/43325?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dwt" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=dwt"><img alt="Martin Häcker" class="avatar" data-user="57199" height="20" src="https://avatars3.githubusercontent.com/u/57199?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="nekman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=nekman"><img alt="Nils" class="avatar" data-user="568019" height="20" src="https://avatars2.githubusercontent.com/u/568019?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ryan-roemer" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=ryan-roemer"><img alt="Ryan Roemer" class="avatar" data-user="445557" height="20" src="https://avatars0.githubusercontent.com/u/445557?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="phoey" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=phoey"><img alt="Joseph McElroy" class="avatar" data-user="49480" height="20" src="https://avatars3.githubusercontent.com/u/49480?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="paulmillr" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=paulmillr"><img alt="Paul Miller" class="avatar" data-user="574696" height="20" src="https://avatars3.githubusercontent.com/u/574696?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jayproulx" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=jayproulx"><img alt="Jay Proulx" class="avatar" data-user="157145" height="20" src="https://avatars0.githubusercontent.com/u/157145?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="uzikilon" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=uzikilon"><img alt="Uzi Kilon" class="avatar" data-user="874904" height="20" src="https://avatars2.githubusercontent.com/u/874904?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="nerdgore" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=nerdgore"><img alt="Torsten Walter" class="avatar" data-user="1582533" height="20" src="https://avatars2.githubusercontent.com/u/1582533?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dfcreative" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=dfcreative"><img alt="Deema Yvanow" class="avatar" data-user="300067" height="20" src="https://avatars3.githubusercontent.com/u/300067?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="adamterlson" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=adamterlson"><img alt="Adam Terlson" class="avatar" data-user="2498418" height="20" src="https://avatars1.githubusercontent.com/u/2498418?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="eastridge" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=eastridge"><img alt="Ryan Eastridge" class="avatar" data-user="30921" height="20" src="https://avatars3.githubusercontent.com/u/30921?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="zertosh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=zertosh"><img alt="Andres Suarez" class="avatar" data-user="830952" height="20" src="https://avatars2.githubusercontent.com/u/830952?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="richardchen331" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=richardchen331"><img alt="richardchen331" class="avatar" data-user="1118578" height="20" src="https://avatars2.githubusercontent.com/u/1118578?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="yakubori" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=yakubori"><img alt="Rick Yakubowski" class="avatar" data-user="166437" height="20" src="https://avatars0.githubusercontent.com/u/166437?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="renfredxh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=renfredxh"><img alt="Renfred Harper" class="avatar" data-user="3800339" height="20" src="https://avatars1.githubusercontent.com/u/3800339?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rbu" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=rbu"><img alt="Robert Buchholz" class="avatar" data-user="65913" height="20" src="https://avatars1.githubusercontent.com/u/65913?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tlray" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=tlray"><img alt="Raymond Vellener" class="avatar" data-user="239681" height="20" src="https://avatars1.githubusercontent.com/u/239681?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ryangreenberg" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=ryangreenberg"><img alt="Ryan Greenberg" class="avatar" data-user="134712" height="20" src="https://avatars3.githubusercontent.com/u/134712?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="schickling" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=schickling"><img alt="Johannes Schickling" class="avatar" data-user="1567498" height="20" src="https://avatars1.githubusercontent.com/u/1567498?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ssorallen" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=ssorallen"><img alt="Ross Allen" class="avatar" data-user="29612" height="20" src="https://avatars2.githubusercontent.com/u/29612?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="nbergseng" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=nbergseng"><img alt="Nick Bergseng" class="avatar" data-user="936051" height="20" src="https://avatars1.githubusercontent.com/u/936051?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="marlun78" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=marlun78"><img alt="Martin Eneqvist" class="avatar" data-user="61943" height="20" src="https://avatars1.githubusercontent.com/u/61943?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="igoralekseev" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=igoralekseev"><img alt="igor" class="avatar" data-user="60734" height="20" src="https://avatars0.githubusercontent.com/u/60734?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kmchugh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=kmchugh"><img alt="Ken McHugh" class="avatar" data-user="1219541" height="20" src="https://avatars1.githubusercontent.com/u/1219541?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="juhovh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=juhovh"><img alt="juhovh" class="avatar" data-user="262958" height="20" src="https://avatars3.githubusercontent.com/u/262958?v=3&amp;s=40" width="20" /></a>

    <a href="#blob_contributors_box" rel="facebox" class="others-text">and others</a>

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jerome Gravel-Niquet" data-user="43325" height="24" src="https://avatars0.githubusercontent.com/u/43325?v=3&amp;s=48" width="24" />
            <a href="/jeromegn">jeromegn</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Martin Häcker" data-user="57199" height="24" src="https://avatars1.githubusercontent.com/u/57199?v=3&amp;s=48" width="24" />
            <a href="/dwt">dwt</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nils" data-user="568019" height="24" src="https://avatars0.githubusercontent.com/u/568019?v=3&amp;s=48" width="24" />
            <a href="/nekman">nekman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Roemer" data-user="445557" height="24" src="https://avatars2.githubusercontent.com/u/445557?v=3&amp;s=48" width="24" />
            <a href="/ryan-roemer">ryan-roemer</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joseph McElroy" data-user="49480" height="24" src="https://avatars1.githubusercontent.com/u/49480?v=3&amp;s=48" width="24" />
            <a href="/phoey">phoey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Paul Miller" data-user="574696" height="24" src="https://avatars1.githubusercontent.com/u/574696?v=3&amp;s=48" width="24" />
            <a href="/paulmillr">paulmillr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jay Proulx" data-user="157145" height="24" src="https://avatars2.githubusercontent.com/u/157145?v=3&amp;s=48" width="24" />
            <a href="/jayproulx">jayproulx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Uzi Kilon" data-user="874904" height="24" src="https://avatars0.githubusercontent.com/u/874904?v=3&amp;s=48" width="24" />
            <a href="/uzikilon">uzikilon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Torsten Walter" data-user="1582533" height="24" src="https://avatars0.githubusercontent.com/u/1582533?v=3&amp;s=48" width="24" />
            <a href="/nerdgore">nerdgore</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Deema Yvanow" data-user="300067" height="24" src="https://avatars1.githubusercontent.com/u/300067?v=3&amp;s=48" width="24" />
            <a href="/dfcreative">dfcreative</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Terlson" data-user="2498418" height="24" src="https://avatars3.githubusercontent.com/u/2498418?v=3&amp;s=48" width="24" />
            <a href="/adamterlson">adamterlson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Eastridge" data-user="30921" height="24" src="https://avatars1.githubusercontent.com/u/30921?v=3&amp;s=48" width="24" />
            <a href="/eastridge">eastridge</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andres Suarez" data-user="830952" height="24" src="https://avatars0.githubusercontent.com/u/830952?v=3&amp;s=48" width="24" />
            <a href="/zertosh">zertosh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="richardchen331" data-user="1118578" height="24" src="https://avatars0.githubusercontent.com/u/1118578?v=3&amp;s=48" width="24" />
            <a href="/richardchen331">richardchen331</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Rick Yakubowski" data-user="166437" height="24" src="https://avatars2.githubusercontent.com/u/166437?v=3&amp;s=48" width="24" />
            <a href="/yakubori">yakubori</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Renfred Harper" data-user="3800339" height="24" src="https://avatars3.githubusercontent.com/u/3800339?v=3&amp;s=48" width="24" />
            <a href="/renfredxh">renfredxh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Robert Buchholz" data-user="65913" height="24" src="https://avatars3.githubusercontent.com/u/65913?v=3&amp;s=48" width="24" />
            <a href="/rbu">rbu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Raymond Vellener" data-user="239681" height="24" src="https://avatars3.githubusercontent.com/u/239681?v=3&amp;s=48" width="24" />
            <a href="/tlray">tlray</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Greenberg" data-user="134712" height="24" src="https://avatars1.githubusercontent.com/u/134712?v=3&amp;s=48" width="24" />
            <a href="/ryangreenberg">ryangreenberg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Johannes Schickling" data-user="1567498" height="24" src="https://avatars3.githubusercontent.com/u/1567498?v=3&amp;s=48" width="24" />
            <a href="/schickling">schickling</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ross Allen" data-user="29612" height="24" src="https://avatars0.githubusercontent.com/u/29612?v=3&amp;s=48" width="24" />
            <a href="/ssorallen">ssorallen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nick Bergseng" data-user="936051" height="24" src="https://avatars3.githubusercontent.com/u/936051?v=3&amp;s=48" width="24" />
            <a href="/nbergseng">nbergseng</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Martin Eneqvist" data-user="61943" height="24" src="https://avatars3.githubusercontent.com/u/61943?v=3&amp;s=48" width="24" />
            <a href="/marlun78">marlun78</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="igor" data-user="60734" height="24" src="https://avatars2.githubusercontent.com/u/60734?v=3&amp;s=48" width="24" />
            <a href="/igoralekseev">igoralekseev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ken McHugh" data-user="1219541" height="24" src="https://avatars3.githubusercontent.com/u/1219541?v=3&amp;s=48" width="24" />
            <a href="/kmchugh">kmchugh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="juhovh" data-user="262958" height="24" src="https://avatars1.githubusercontent.com/u/262958?v=3&amp;s=48" width="24" />
            <a href="/juhovh">juhovh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sean Juarez" data-user="1609890" height="24" src="https://avatars1.githubusercontent.com/u/1609890?v=3&amp;s=48" width="24" />
            <a href="/seanCodes">seanCodes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Wei Gao" data-user="724998" height="24" src="https://avatars3.githubusercontent.com/u/724998?v=3&amp;s=48" width="24" />
            <a href="/villadora">villadora</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="slamborne" data-user="3140379" height="24" src="https://avatars1.githubusercontent.com/u/3140379?v=3&amp;s=48" width="24" />
            <a href="/slamborne">slamborne</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="James Blashill" data-user="1558017" height="24" src="https://avatars2.githubusercontent.com/u/1558017?v=3&amp;s=48" width="24" />
            <a href="/jblashill">jblashill</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Egor Lynko" data-user="335778" height="24" src="https://avatars3.githubusercontent.com/u/335778?v=3&amp;s=48" width="24" />
            <a href="/flexoid">flexoid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Thomas Stephens" data-user="1293832" height="24" src="https://avatars1.githubusercontent.com/u/1293832?v=3&amp;s=48" width="24" />
            <a href="/spiralman">spiralman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dmitry Shirokov" data-user="903687" height="24" src="https://avatars3.githubusercontent.com/u/903687?v=3&amp;s=48" width="24" />
            <a href="/runk">runk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="dmix" data-user="12528" height="24" src="https://avatars0.githubusercontent.com/u/12528?v=3&amp;s=48" width="24" />
            <a href="/dmix">dmix</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dan Abramov" data-user="810438" height="24" src="https://avatars1.githubusercontent.com/u/810438?v=3&amp;s=48" width="24" />
            <a href="/gaearon">gaearon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kirill Korolyov" data-user="242202" height="24" src="https://avatars1.githubusercontent.com/u/242202?v=3&amp;s=48" width="24" />
            <a href="/Dremora">Dremora</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Brant Wedel" data-user="1801892" height="24" src="https://avatars0.githubusercontent.com/u/1801892?v=3&amp;s=48" width="24" />
            <a href="/onecsguy">onecsguy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Brandon Dimcheff" data-user="14111" height="24" src="https://avatars1.githubusercontent.com/u/14111?v=3&amp;s=48" width="24" />
            <a href="/bdimcheff">bdimcheff</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="toshi00ysm" data-user="2410794" height="24" src="https://avatars3.githubusercontent.com/u/2410794?v=3&amp;s=48" width="24" />
            <a href="/toshi00ysm">toshi00ysm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andreas Cederström" data-user="33141" height="24" src="https://avatars2.githubusercontent.com/u/33141?v=3&amp;s=48" width="24" />
            <a href="/andriijas">andriijas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andrey Popp" data-user="30594" height="24" src="https://avatars0.githubusercontent.com/u/30594?v=3&amp;s=48" width="24" />
            <a href="/andreypopp">andreypopp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andrew Kulinich" data-user="596990" height="24" src="https://avatars0.githubusercontent.com/u/596990?v=3&amp;s=48" width="24" />
            <a href="/4vanger">4vanger</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">
      <div class="button-group">
        <a href="/jeromegn/Backbone.localStorage/raw/master/backbone.localStorage.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/jeromegn/Backbone.localStorage/blame/master/backbone.localStorage.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw"
           href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/jeromegn/Backbone.localStorage/edit/master/backbone.localStorage.js" aria-label="Clicking this button will fork this project so you can edit the file" class="tooltipped tooltipped-s inline-form edit-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Nb6OL2bj+fdExzOpF/t8JcEBVhXw87eue2dQj8eqRKen1ZEqy/nYZ/pmFfnfrj29fTrPHHOdgXNfcAQ563kyzw==" /></div>
              <button class="web-edit-button"
                      type="submit"
                      data-hotkey="e"
                      data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/jeromegn/Backbone.localStorage/delete/master/backbone.localStorage.js" aria-label="Fork this project and delete file" class="tooltipped tooltipped-s inline-form delete-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CIgWX3NNHbKsuSV5/mkpNSf1IGCNP15bXMzxYO3kzhRZHhNp1hpXMCrAynsssaP3Msfj/W0Ssqt10fCELg15pQ==" /></div>
            <button class="web-edit-button"
                    type="submit"
                    data-disable-with>
              <span class="octicon octicon-trashcan "></span>
            </button>
</form>      </a>
    </div><!-- /.actions -->
    <div class="file-info">
        259 lines (219 sloc)
        <span class="file-info-divider"></span>
      7.448 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * Backbone localStorage Adapter</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * Version 1.1.16</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> * https://github.com/jeromegn/Backbone.localStorage</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">(<span class="pl-st">function</span> (<span class="pl-vpf">root</span>, <span class="pl-vpf">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-sv">exports</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-s3">require</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">    <span class="pl-sv">module</span>.exports <span class="pl-k">=</span> factory(<span class="pl-s3">require</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>backbone<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> define.amd) {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">    <span class="pl-c">// AMD. Register as an anonymous module.</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">    define([<span class="pl-s1"><span class="pl-pds">&quot;</span>backbone<span class="pl-pds">&quot;</span></span>], <span class="pl-st">function</span>(<span class="pl-vpf">Backbone</span>) {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">      <span class="pl-c">// Use global variables if the locals are undefined.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">      <span class="pl-k">return</span> factory(Backbone <span class="pl-k">||</span> root.Backbone);</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">    factory(Backbone);</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">}(<span class="pl-v">this</span>, <span class="pl-st">function</span>(<span class="pl-vpf">Backbone</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line"><span class="pl-c">// A simple module to replace `Backbone.sync` with *localStorage*-based</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"><span class="pl-c">// persistence. Models are given GUIDS, and saved into a JSON object. Simple</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="pl-c">// as that.</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line"><span class="pl-c">// Generate four random hex digits.</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">S4</span>() {</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">   <span class="pl-k">return</span> (((<span class="pl-c1">1</span><span class="pl-k">+</span><span class="pl-s3">Math</span>.<span class="pl-s3">random</span>())<span class="pl-k">*</span><span class="pl-c1">0x10000</span>)|<span class="pl-c1">0</span>).<span class="pl-s3">toString</span>(<span class="pl-c1">16</span>).<span class="pl-s3">substring</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line"><span class="pl-c">// Generate a pseudo-GUID by concatenating random hexadecimal.</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">guid</span>() {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">   <span class="pl-k">return</span> (S4()<span class="pl-k">+</span>S4()<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>S4()<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>S4()<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>S4()<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>S4()<span class="pl-k">+</span>S4()<span class="pl-k">+</span>S4());</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">isObject</span>(<span class="pl-vpf">item</span>) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">  <span class="pl-k">return</span> item <span class="pl-k">===</span> <span class="pl-s3">Object</span>(item);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">contains</span>(<span class="pl-vpf">array</span>, <span class="pl-vpf">item</span>) {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">  <span class="pl-s">var</span> i <span class="pl-k">=</span> array.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">  <span class="pl-k">while</span> (i<span class="pl-k">--</span>) <span class="pl-k">if</span> (array[i] <span class="pl-k">===</span> item) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">  <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">extend</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">props</span>) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">  <span class="pl-k">for</span> (<span class="pl-s">var</span> key <span class="pl-k">in</span> props) obj[key] <span class="pl-k">=</span> props[key]</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">  <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">result</span>(<span class="pl-vpf">object</span>, <span class="pl-vpf">property</span>) {</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">    <span class="pl-k">if</span> (object <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">    <span class="pl-s">var</span> value <span class="pl-k">=</span> object[property];</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">    <span class="pl-k">return</span> (<span class="pl-k">typeof</span> value <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> object[property]() <span class="pl-k">:</span> value;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line"><span class="pl-c">// Our Store is represented by a single JS object in *localStorage*. Create it</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line"><span class="pl-c">// with a meaningful name, like the name you&#39;d give a table.</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line"><span class="pl-c">// window.Store is deprectated, use Backbone.LocalStorage instead</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">Backbone.LocalStorage <span class="pl-k">=</span> <span class="pl-s3">window</span>.<span class="pl-en">Store</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">name</span>, <span class="pl-vpf">serializer</span>) {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">  <span class="pl-k">if</span>( <span class="pl-k">!</span><span class="pl-v">this</span>.localStorage ) {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">    <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Backbone.localStorage: Environment does not support localStorage.<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">  <span class="pl-v">this</span>.<span class="pl-sc">name</span> <span class="pl-k">=</span> name;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">  <span class="pl-v">this</span>.serializer <span class="pl-k">=</span> serializer <span class="pl-k">||</span> {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">    <span class="pl-en">serialize</span>: <span class="pl-st">function</span>(<span class="pl-vpf">item</span>) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">      <span class="pl-k">return</span> isObject(item) <span class="pl-k">?</span> JSON.stringify(item) <span class="pl-k">:</span> item;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">    <span class="pl-c">// fix for &quot;illegal access&quot; error on Android when JSON.parse is passed null</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">    <span class="pl-en">deserialize</span>: <span class="pl-st">function</span> (<span class="pl-vpf">data</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">      <span class="pl-k">return</span> data <span class="pl-k">&amp;&amp;</span> JSON.<span class="pl-s3">parse</span>(data);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">  <span class="pl-s">var</span> store <span class="pl-k">=</span> <span class="pl-v">this</span>.localStorage().getItem(<span class="pl-v">this</span>.<span class="pl-sc">name</span>);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">  <span class="pl-v">this</span>.records <span class="pl-k">=</span> (store <span class="pl-k">&amp;&amp;</span> store.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">extend(Backbone.LocalStorage.<span class="pl-sc">prototype</span>, {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">  <span class="pl-c">// Save the current state of the **Store** to *localStorage*.</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">  <span class="pl-en">save</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">    <span class="pl-v">this</span>.localStorage().setItem(<span class="pl-v">this</span>.<span class="pl-sc">name</span>, <span class="pl-v">this</span>.records.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">  <span class="pl-c">// Add a model, giving it a (hopefully)-unique GUID, if it doesn&#39;t already</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">  <span class="pl-c">// have an id of it&#39;s own.</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">  <span class="pl-en">create</span>: <span class="pl-st">function</span>(<span class="pl-vpf">model</span>) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>model.<span class="pl-sc">id</span> <span class="pl-k">&amp;&amp;</span> model.<span class="pl-sc">id</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">      model.<span class="pl-sc">id</span> <span class="pl-k">=</span> guid();</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">      model.set(model.idAttribute, model.<span class="pl-sc">id</span>);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">    <span class="pl-v">this</span>.localStorage().setItem(<span class="pl-v">this</span>._itemName(model.<span class="pl-sc">id</span>), <span class="pl-v">this</span>.serializer.serialize(model));</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">    <span class="pl-v">this</span>.records.<span class="pl-s3">push</span>(model.<span class="pl-sc">id</span>.<span class="pl-s3">toString</span>());</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">    <span class="pl-v">this</span>.save();</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-s3">find</span>(model);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">  <span class="pl-c">// Update a model by replacing its copy in `this.data`.</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">  <span class="pl-en">update</span>: <span class="pl-st">function</span>(<span class="pl-vpf">model</span>) {</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">    <span class="pl-v">this</span>.localStorage().setItem(<span class="pl-v">this</span>._itemName(model.<span class="pl-sc">id</span>), <span class="pl-v">this</span>.serializer.serialize(model));</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">    <span class="pl-s">var</span> modelId <span class="pl-k">=</span> model.<span class="pl-sc">id</span>.<span class="pl-s3">toString</span>();</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>contains(<span class="pl-v">this</span>.records, modelId)) {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">      <span class="pl-v">this</span>.records.<span class="pl-s3">push</span>(modelId);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">      <span class="pl-v">this</span>.save();</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-s3">find</span>(model);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">  <span class="pl-c">// Retrieve a model from `this.data` by id.</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">  <span class="pl-en">find</span>: <span class="pl-st">function</span>(<span class="pl-vpf">model</span>) {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.serializer.deserialize(<span class="pl-v">this</span>.localStorage().getItem(<span class="pl-v">this</span>._itemName(model.<span class="pl-sc">id</span>)));</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">  <span class="pl-c">// Return the array of all models currently in storage.</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">  <span class="pl-en">findAll</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">    <span class="pl-s">var</span> result <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, id, data; i <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.records.<span class="pl-sc">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">      id <span class="pl-k">=</span> <span class="pl-v">this</span>.records[i];</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">      data <span class="pl-k">=</span> <span class="pl-v">this</span>.serializer.deserialize(<span class="pl-v">this</span>.localStorage().getItem(<span class="pl-v">this</span>._itemName(id)));</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">      <span class="pl-k">if</span> (data <span class="pl-k">!=</span> <span class="pl-c1">null</span>) result.<span class="pl-s3">push</span>(data);</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">  <span class="pl-c">// Delete a model from `this.data`, returning it.</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">  <span class="pl-en">destroy</span>: <span class="pl-st">function</span>(<span class="pl-vpf">model</span>) {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">    <span class="pl-v">this</span>.localStorage().removeItem(<span class="pl-v">this</span>._itemName(model.<span class="pl-sc">id</span>));</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">    <span class="pl-s">var</span> modelId <span class="pl-k">=</span> model.<span class="pl-sc">id</span>.<span class="pl-s3">toString</span>();</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, id; i <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.records.<span class="pl-sc">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.records[i] <span class="pl-k">===</span> modelId) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">        <span class="pl-v">this</span>.records.<span class="pl-s3">splice</span>(i, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">    <span class="pl-v">this</span>.save();</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">    <span class="pl-k">return</span> model;</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">  <span class="pl-en">localStorage</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">    <span class="pl-k">return</span> localStorage;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">  <span class="pl-c">// Clear localStorage for specific collection.</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">  <span class="pl-en">_clear</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">    <span class="pl-s">var</span> local <span class="pl-k">=</span> <span class="pl-v">this</span>.localStorage(),</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">      itemRe <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">name</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">    <span class="pl-c">// Remove id-tracking item (e.g., &quot;foo&quot;).</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">    local.removeItem(<span class="pl-v">this</span>.<span class="pl-sc">name</span>);</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">    <span class="pl-c">// Match all data items (e.g., &quot;foo-ID&quot;) and remove.</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> k <span class="pl-k">in</span> local) {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">      <span class="pl-k">if</span> (itemRe.<span class="pl-s3">test</span>(k)) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">        local.removeItem(k);</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">    <span class="pl-v">this</span>.records.<span class="pl-sc">length</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">  <span class="pl-c">// Size of localStorage.</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">  <span class="pl-en">_storageSize</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.localStorage().<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">  <span class="pl-en">_itemName</span>: <span class="pl-st">function</span>(<span class="pl-vpf">id</span>) {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">name</span><span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>id;</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line"><span class="pl-c">// localSync delegate to the model or collection&#39;s</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line"><span class="pl-c">// *localStorage* property, which should be an instance of `Store`.</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line"><span class="pl-c">// window.Store.sync and Backbone.localSync is deprecated, use Backbone.LocalStorage.sync instead</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">Backbone.LocalStorage.sync <span class="pl-k">=</span> <span class="pl-s3">window</span>.Store.sync <span class="pl-k">=</span> <span class="pl-s3">Backbone</span>.<span class="pl-en">localSync</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">method</span>, <span class="pl-vpf">model</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">  <span class="pl-s">var</span> store <span class="pl-k">=</span> result(model, <span class="pl-s1"><span class="pl-pds">&#39;</span>localStorage<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> result(model.collection, <span class="pl-s1"><span class="pl-pds">&#39;</span>localStorage<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">  <span class="pl-s">var</span> resp, errorMessage;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">  <span class="pl-c">//If $ is having Deferred - use it.</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">  <span class="pl-s">var</span> syncDfd <span class="pl-k">=</span> Backbone.$ <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">    (Backbone.$.Deferred <span class="pl-k">&amp;&amp;</span> Backbone.$.Deferred()) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">    (Backbone.Deferred <span class="pl-k">&amp;&amp;</span> Backbone.Deferred());</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">  <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">    <span class="pl-k">switch</span> (method) {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>read<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">        resp <span class="pl-k">=</span> model.<span class="pl-sc">id</span> <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> <span class="pl-k">?</span> store.<span class="pl-s3">find</span>(model) <span class="pl-k">:</span> store.findAll();</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>create<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">        resp <span class="pl-k">=</span> store.create(model);</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>update<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">        resp <span class="pl-k">=</span> store.update(model);</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>delete<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">        resp <span class="pl-k">=</span> store.destroy(model);</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">  } <span class="pl-k">catch</span>(error) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">    <span class="pl-k">if</span> (error.<span class="pl-sc">code</span> <span class="pl-k">===</span> <span class="pl-c1">22</span> <span class="pl-k">&amp;&amp;</span> store._storageSize() <span class="pl-k">===</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">      errorMessage <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Private browsing is unsupported<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">    <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">      errorMessage <span class="pl-k">=</span> error.message;</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">  <span class="pl-k">if</span> (resp) {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">    <span class="pl-k">if</span> (options <span class="pl-k">&amp;&amp;</span> options.success) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">      <span class="pl-k">if</span> (Backbone.VERSION <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>0.9.10<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">        options.success(model, resp, options);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">        options.success(resp);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">    <span class="pl-k">if</span> (syncDfd) {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">      syncDfd.resolve(resp);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">    errorMessage <span class="pl-k">=</span> errorMessage <span class="pl-k">?</span> errorMessage</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">                                <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Record Not Found<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">    <span class="pl-k">if</span> (options <span class="pl-k">&amp;&amp;</span> options<span class="pl-s3">.error</span>)</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">      <span class="pl-k">if</span> (Backbone.VERSION <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>0.9.10<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">        options<span class="pl-s3">.error</span>(model, errorMessage, options);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">        options<span class="pl-s3">.error</span>(errorMessage);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">    <span class="pl-k">if</span> (syncDfd)</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">      syncDfd.reject(errorMessage);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">  <span class="pl-c">// add compatibility with $.ajax</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">  <span class="pl-c">// always execute callback for success and error</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">  <span class="pl-k">if</span> (options <span class="pl-k">&amp;&amp;</span> options.<span class="pl-sc">complete</span>) options.<span class="pl-sc">complete</span>(resp);</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">  <span class="pl-k">return</span> syncDfd <span class="pl-k">&amp;&amp;</span> syncDfd.promise();</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">Backbone.ajaxSync <span class="pl-k">=</span> Backbone.sync;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line"><span class="pl-s3">Backbone</span>.<span class="pl-en">getSyncMethod</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">model</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">  <span class="pl-s">var</span> forceAjaxSync <span class="pl-k">=</span> options <span class="pl-k">&amp;&amp;</span> options.ajaxSync;</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">!</span>forceAjaxSync <span class="pl-k">&amp;&amp;</span> (result(model, <span class="pl-s1"><span class="pl-pds">&#39;</span>localStorage<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> result(model.collection, <span class="pl-s1"><span class="pl-pds">&#39;</span>localStorage<span class="pl-pds">&#39;</span></span>))) {</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">    <span class="pl-k">return</span> Backbone.localSync;</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">  <span class="pl-k">return</span> Backbone.ajaxSync;</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line"><span class="pl-c">// Override &#39;Backbone.sync&#39; to default to localSync,</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line"><span class="pl-c">// the original &#39;Backbone.sync&#39; is still available in &#39;Backbone.ajaxSync&#39;</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line"><span class="pl-s3">Backbone</span>.<span class="pl-en">sync</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">method</span>, <span class="pl-vpf">model</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">  <span class="pl-k">return</span> Backbone.getSyncMethod(model, options).<span class="pl-s3">apply</span>(<span class="pl-v">this</span>, [method, model, options]);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line"><span class="pl-k">return</span> Backbone.LocalStorage;</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">}));</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="http://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="http://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07472s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-4bf9533935259bb898a8d60e1958f4d047968c430eae889800a187e279faf38f.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-28ec6d32162a369dbf5d19d907cfb5e2a218885d32a95242a2a40ef746133864.js"></script>
      
      

  </body>
</html>

