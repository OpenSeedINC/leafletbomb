Router.configure({
    layoutTemplate:'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts');}
    });

Router.route('/login', {name: 'login',

waitOn: function() { return Meteor.subscribe('companies',"all"),Meteor.subscribe('images');}
});

Router.route('/pressSignup/', {name: 'pressSignup',
                                waitOn: function() { return Meteor.subscribe('companies',"all"),Meteor.subscribe('images');}

});
   
Router.route('/marketerSignup/', {name: 'marketerSignup',
                                    waitOn: function() { return Meteor.subscribe('companies',"all"),Meteor.subscribe('images'),Meteor.subscribe('prteam');}


});

Router.route('/jointeam/', {name: 'subaccountSignup',
                                    waitOn: function() { return Meteor.subscribe('companies',"all"),Meteor.subscribe('images'),Meteor.subscribe('prteam');}


});
     
Router.route('/', {
            name: 'stopPage',
                waitOn: function() { return Meteor.subscribe('posts','all'),Meteor.subscribe('companies',"all"),Meteor.subscribe('images'),Meteor.subscribe('postassets');}
            }); 
            
            
Router.route('/release/:docId', {
            name: 'influencerPage',
                waitOn: function() { 
                                        var showpost = "all";
                                            if(this.params.docId != "undefinded") {
                                                showpost = 'docId='+this.params.docId;
                                                }
                                        
                                        return Meteor.subscribe('posts',showpost),Meteor.subscribe('images'),Meteor.subscribe('postassets'),Meteor.subscribe('postengagement',this.params.docId),Meteor.subscribe('influencers'),Meteor.subscribe('postquestions'),Meteor.subscribe('postanswers');}
            });    
            
Router.route('/dashboard/:userId/postCtrl/:docId', {
            name: 'postCtrl',
                waitOn: function() { 
                                     var showpost = "all";
                                        if(this.params.docId != "undefinded") {
                                            showpost = 'docId='+this.params.docId;
                                            }
                                        return Meteor.subscribe('posts',showpost),Meteor.subscribe('images'),Meteor.subscribe('postassets'),Meteor.subscribe('influencers'),Meteor.subscribe('postengagement',this.params.docId),Meteor.subscribe('distrolist',this.params.userId),Meteor.subscribe('postdistribution'),Meteor.subscribe('postengagement'),Meteor.subscribe('settings'),Meteor.subscribe('postquestions'), Meteor.subscribe('postanswers');}
            });                              
            
            
            
Router.route('/dashboard/:userId', {
    name: 'marketerDashBoard',
    waitOn: function() { return Meteor.subscribe('posts',this.params.userId),Meteor.subscribe('companies',this.params.userId),Meteor.subscribe('companyassets',this.params.userId),Meteor.subscribe('influencers'),Meteor.subscribe('import'),Meteor.subscribe('postengagement'),Meteor.subscribe('distrolist',this.params.userId),Meteor.subscribe('images'),Meteor.subscribe('prteam',this.params.userId),Meteor.subscribe('postdistribution'),Meteor.subscribe('settings'),Meteor.subscribe('postquestions'), Meteor.subscribe('postanswers');}
    });
    
Router.route('/influence/:userId', {
    name: 'influencerDashBoard',
    waitOn: function() { return Meteor.subscribe('posts',this.params.userId),Meteor.subscribe('companies',this.params.userId),Meteor.subscribe('companyassets'),Meteor.subscribe('images');}
    });    
    
    
    
Router.route('/dashboard/:userId/newPressRelease', {
    name: 'newPressRelease',
    waitOn: function() { return Meteor.subscribe('posts',this.params.userId),Meteor.subscribe('companies',this.params.userId),Meteor.subscribe('images'),Meteor.subscribe('files'),Meteor.subscribe('postassets'),Meteor.subscribe('companyassets'),Meteor.subscribe('distrolist',this.params.userId),Meteor.subscribe('postdistribution');}
    });    
    
Router.route('/profile/:userId' , {
        name: 'profiles',
       // waitOn: function() { return Meteor.subscribe('posts',this.params.userId),Meteor.subscribe('companies',this.params.userId),Meteor.subscribe('images');}
        
        });
        
Router.route('/welcome', {
        name: 'setup',
        //waitOn: function() { return Meteor.subscribe('companies',this.params.userID);}

    });
        
    
Router.route('/influencerSetup/:_id', {
        name:'influencerSetup',
         waitOn: function() { return Meteor.subscribe('companies',this.params._id),Meteor.subscribe('images'),Meteor.subscribe('companyassets');}

    });
    
Router.route('/marketerSetup/:_id', {
        name:'marketerSetup',
         waitOn: function() { return Meteor.subscribe('companies',this.params._id),Meteor.subscribe('images'),Meteor.subscribe('companyassets');}

    });               

Router.route('/:companyName', {
            name: 'companyPage',
                waitOn: function() { 
                        var showposts = 'company='+this.params.companyName;
                return Meteor.subscribe('posts',showposts),Meteor.subscribe('images'),Meteor.subscribe('postassets'),Meteor.subscribe('companies',this.params.companyName),Meteor.subscribe('companyassets');}
            }); 
                                 
        
