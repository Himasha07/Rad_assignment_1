import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination = () => {
    return(
        <>
            <div className="destinations">
                <h1>Popular destinations</h1>
            </div>

            <DestinationData
            classname = "firstDestination"
            heading="Taj Mahal,The Timeless symbol of love"
            text = "Experience the breathtaking beauty and architectural marvel of the Taj Mahal, an iconic symbol of love 
                        and one of the world's most celebrated landmarks. Located in Agra, India, this 17th-century masterpiece was 
                        commissioned by Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. Renowned for its stunning white marble
                         facade, intricate carvings, and symmetrical gardens, the Taj Mahal stands as a testament to the 
                         eternal bond of love and an extraordinary example of Mughal architecture"

            img1= "https://i.pinimg.com/474x/ac/94/35/ac9435b1dae07a86462fa6fa691498c4.jpg"
            img2= "https://i.pinimg.com/474x/b8/7e/94/b87e948579845f52663fd59c6a45ccc4.jpg"
            />


        <br></br>
        <br></br> <br></br>

            <DestinationData
             classname = "firstDestinationReverse"
            heading="Anse Source d'Argent, Seychelles"
            text = "Discover the serene beauty of Anse Source d'Argent, one of the most photographed beaches in the world, 
            located on La Digue Island in the Seychelles. This stunning beach is renowned for its striking granite boulders, 
            powdery white sands, and crystal-clear turquoise waters. Surrounded by lush tropical greenery and protected by a 
            coral reef, Anse Source d'Argent offers calm and shallow waters perfect for swimming and snorkeling. Whether you’re 
            seeking a peaceful retreat or an idyllic spot for breathtaking photos, this picturesque paradise is a must-visit 
            destination for nature lovers and beachgoers alike."

            img1= "https://i.pinimg.com/564x/8b/db/c7/8bdbc7047311110c04039d5371f0ef8c.jpg"
            img2= "https://i.pinimg.com/474x/88/e5/40/88e540a9a9fd10b9e8d9139226351205.jpg"
            />
        </>
    )
}
export default Destination;