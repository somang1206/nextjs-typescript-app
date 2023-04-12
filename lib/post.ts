import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    
    //post 파일 이름을 잡아주기
    const fileNames = fs.readdirSync(postsDirectory);
    //['pre-rendering.md','ssg-ssr.md']

    const allPostsData = fileNames.map(fileName =>{
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContent);

        //allPostsDat의 return
        return {
            id,
            ...matterResult.data as {date: string; title: string}
        }
    })

    //Sorting - 함수의 return (숫자큰게 위로)
    return allPostsData.sort((a,b) =>{
        if(a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })

}