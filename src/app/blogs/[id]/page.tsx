'use client'
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr'


const ViewDetailBlog = ({ params }: {params: { id: string} }) => {

    const fetcher: Fetcher<IBlog, string> = (url:string) => fetch(url)
    .then((res) => res.json());
  
  
    const { data, error, isLoading } = useSWR(
      `http://localhost:8000/blogs/${params.id}`,
      fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }
    );
    if(isLoading){
        return (
        <div>loading...</div>
        )
      }
    return (
        <div>
        <Card className="text-center">
      <Card.Body>
      <Card.Header>{data?.title}</Card.Header>
        <Card.Text>
            {data?.content}
        </Card.Text>
        <Button href='/blogs' variant="primary">Return</Button>
        <Card.Footer className="text-muted">{data?.author}</Card.Footer>
      </Card.Body>
    </Card>
    </div>
    )
}

export default ViewDetailBlog;