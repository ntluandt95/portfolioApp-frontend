export class Project {
    constructor(id,name,description,deploymentlink,githublink, imgLink,status,devUsername){
        this.id = id;
        this.name = name;
        this.description = description;
        this.deploymentlink = deploymentlink;
        this.githublink = githublink;
        this.imgLink = imgLink;
        this.status = status;
        this.devUsername = devUsername; //the Developer Object
    }
}