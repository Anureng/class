// // SPDX-License-Identifier: MIT
// pragma solidity 0.8.20;
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract udemy is ERC20, Ownable {
//     constructor(
//         address initialOwner
//     ) ERC20("Udemy", "UD") Ownable(initialOwner) {}

//     function mint(address to, uint256 amount) public {
//         _mint(to, amount);
//     }

//     struct User {
//         address Data;
//         string name;
//         uint TS;
//     }

//     struct playList {
//         string name;
//         string description;
//         string category;
//         uint price;
//         string[] videos;
//         string[] images;
//         address owner;
//         bool ChattinVideoCall;
//     }

//     struct comments {
//         string message;
//         uint star;
//     }

//     mapping(address => User) UserData;
//     mapping(uint => playList) playListData;
//     mapping(address => uint) uniqueData;
//     mapping(address => mapping(uint => bool))   BuyedPlayelist;
//     mapping(address => bool) userCreated;
//     mapping(bytes32 => uint) uniqueName;
//     // mapping(uint => comments) allComments;
//     mapping(uint => address[])  allBuyedUser;
//     mapping (address => uint[]) allPlaylistCreateByTeacher;
//     // mapping(uint => comments[]) getAllComments;
//     mapping(address => uint[])  buyedPlayelistByUser;
//     mapping (uint => mapping (uint => comments)) CreateComment;
//     mapping (uint => uint[]) allCommentsMapping;

//     uint lastIndex = 1;

//     uint commentIndex = 1;

//     event createUserEvent(address, string, uint);

//     uint time;

//     uint[]  allPlaylist;

//     // uint[][]  AllComments;


//     function createUser(address _data, string calldata _name, uint ts) public {
//         require(userCreated[_data] == false, "User is already created");
//         bytes32 hashMap = keccak256(bytes(_name));
//         require(uniqueName[hashMap] == 0, "Username is already taken");
//         UserData[msg.sender].Data = _data;
//         UserData[msg.sender].name = _name;
//         UserData[msg.sender].TS = ts;

//         userCreated[_data] = true;

//         uniqueName[hashMap] = 1;

//         _mint(msg.sender, 100);

//         time = block.timestamp + 1 minutes;

//         emit createUserEvent(_data, _name, ts);
//     }

//     function getUser() public view returns (string memory, address, uint) {
//         return (
//             UserData[msg.sender].name,
//             UserData[msg.sender].Data,
//             UserData[msg.sender].TS
//         );
//     }

//     function CreatePlaylist(
//         string calldata _name,
//         string calldata _description,
//         string calldata _category,
//         uint price,
//         string[] calldata _videos,
//         string[] calldata _images
//     ) public {
//         require(UserData[msg.sender].TS == 1, "You are not teacher");
//         playListData[lastIndex] = playList({
//             name: _name,
//             description: _description,
//             category: _category,
//             price: price,
//             videos: _videos,
//             images: _images,
//             owner: msg.sender,
//             ChattinVideoCall: false
//         });

//         uniqueData[msg.sender] = lastIndex;
//         allPlaylist.push(lastIndex);
//         allPlaylistCreateByTeacher[msg.sender].push(lastIndex);
//         lastIndex++;
//     }

//     function getPlaylist(
//         uint id
//     )
//         public
//         view
//         returns (
//             string memory,
//             string memory,
//             string memory,
//             uint,
//             string[] memory,
//             string[] memory,
//             bool
//         )
//     {
//         require(
//             block.timestamp <= time || BuyedPlayelist[msg.sender][id] == true,
//             "First buy course"
//         );
//         return (
//             playListData[id].name,
//             playListData[id].description,
//             playListData[id].category,
//             playListData[id].price,
//             playListData[id].videos,
//             playListData[id].images,
//             playListData[id].ChattinVideoCall
//         );
//     }

//     function allPlaylistData(uint id) public view returns ( string memory,string memory,string memory,uint,uint, string[] memory ){
//         return (playListData[id].name,playListData[id].description , playListData[id].category , id , playListData[id].price , playListData[id].images  );
//     }

//     function updatePlaylist(
//         uint startingID,
//         string calldata _name,
//         string calldata _description,
//         string calldata _category,
//         uint price
//     ) public {
//         require(UserData[msg.sender].TS == 1);
//         playListData[startingID].name = _name;
//         playListData[startingID].description = _description;
//         playListData[startingID].category = _category;
//         playListData[startingID].price = price;
//     }

//     function deletePlaylist(uint startingId) public {
//         require(UserData[msg.sender].TS == 1);
//         delete playListData[startingId];
//         uniqueData[msg.sender] -= 1;
//     }

//     function buyPlaylist(uint id) public {
//         require(
//             id > 0 &&
//                 id < lastIndex &&
//                 BuyedPlayelist[msg.sender][id] == false &&
//                 UserData[msg.sender].TS == 2
//         );
//         address data = playListData[id].owner;
//         transfer(data, 10);
//         BuyedPlayelist[msg.sender][id] = true;
//         allBuyedUser[id].push(msg.sender);
//         buyedPlayelistByUser[msg.sender].push(id);
//         playListData[id].ChattinVideoCall = true;
//     }


//     function allGetPlaylist() public view returns (uint [] memory){
//         return  allPlaylist;
//     }

//     function createComment(
//         uint productId,
//         string calldata description,
//         uint rating
//     ) external {
//         // require(id < lastIndex && BuyedPlayelist[msg.sender][id] == true);
//         // allComments[id].message = description;
//         // allComments[id].star = rating;
//         CreateComment[productId][commentIndex].message=description;
//         CreateComment[productId][commentIndex].star=rating;

//         // AllComments[productId].push(commentIndex);
//         allCommentsMapping[productId].push(commentIndex);

//         commentIndex++;
//     }

//     function allCommentsData(uint productId) public  view returns (uint [] memory){
//         return allCommentsMapping[productId];
//     }

//     function getComment(uint commentId , uint ProductId) public view returns (string memory , uint) {
//         return (CreateComment[ProductId][commentId].message ,CreateComment[ProductId][commentId].star );
//     }

//     function allPlaylistCreateByTeacherData() public view returns (uint [] memory){
//         return allPlaylistCreateByTeacher[msg.sender];
//     }

//     function allUserbuyed(uint id) public view returns (address [] memory){
//         return allBuyedUser[id];
//     }

//     function buyedPlaylistUser() public view returns (uint [] memory){
//         return buyedPlayelistByUser[msg.sender];
//     }
// }
