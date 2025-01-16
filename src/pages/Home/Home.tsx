import { useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";
import { useSideBar } from "../../hooks/useSidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import InputField from "../../components/Input/Input";
import FileInputField from "../../components/FileInput/FileInput";
import Button from "../../components/Button/Button";
import AlertModal from "../../components/AlertModal/AlertModal";
import { Icon } from "../../components/Icon";
import { toast } from "react-toastify";

interface CardProps {
  id: number;
  name: string;
  image: string;
}

function Home() {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSideBar();
  const [cards, setCards] = useState<CardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState<CardProps[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<number | null>(null);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const foundCards = cards.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCards(foundCards);
    } else {
      setFilteredCards(cards);
    }
  };

  const handleNewCard = () => {
    openSidebar("Criando novo card");
  };

  const handleImageChange = (image: File | null) => {
    setImage(image);
  };

  const handleCreateCard = () => {
    if (!name) {
      toast("Por favor, digite o nome do card.", { type: "error" });
      return;
    }

    const newCard = {
      id: cards.length + 1,
      name,
      image: image ? URL.createObjectURL(image) : "",
    };

    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    setFilteredCards(updatedCards);
    setName("");
    setImage(null);
    closeSidebar();
    toast("Card criado com sucesso!", { type: "success" });
  };

  const openDeleteModal = (cardId: number) => {
    setCardToDelete(cardId);
    setModalOpen(true);
  };

  const handleDeleteCard = () => {
    if (cardToDelete !== null) {
      const updatedCards = cards.filter((card) => card.id !== cardToDelete);
      setCards(updatedCards);
      setFilteredCards(updatedCards);
    }
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCardToDelete(null);
  };

  return (
    <>
      <div className="search-container">
        <div style={{ width: "1200px", margin: "0 auto" }}>
          <InputField
            placeholder="Digite aqui sua busca..."
            hasIcon
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onIconClick={handleSearch}
          />
        </div>
      </div>
      <div className="home-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <h2>Resultado de busca</h2>
          <Button
            text="Novo Card"
            onClick={handleNewCard}
            style={{ width: "167px" }}
          />
        </div>
        <div className="grid">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                image={card.image}
                onEdit={() => toast("Funcionalidade não implementada", { type: "info" })}
                onDelete={() => openDeleteModal(card.id)}
              />
            ))
          ) : (
            <p>Nenhum card encontrado</p>
          )}
        </div>

        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
          <div className="sidebar-header-content">
            <Icon type="IconCreate" />
            <h3>Criar card</h3>
          </div>
          <div className="divider" />
          <form
            className="create-card-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateCard();
            }}
          >
            <InputField
              placeholder="Digite o título"
              label="Nome do card"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FileInputField
              label="INCLUA UMA IMAGEM PARA APARECER NO CARD"
              onImageChange={handleImageChange}
            />

            <div style={{ margin: "20px 0 10px 0" }} className="divider" />
            <div className="sidebar-footer">
              <Button
                style={{ width: "167px" }}
                text="Criar card"
                type="submit"
              />
            </div>
          </form>
        </Sidebar>

        <AlertModal
          isOpen={isModalOpen}
          title="Excluir"
          message="Certeza que deseja excluir?"
          onConfirm={handleDeleteCard}
          onCancel={closeModal}
        />
      </div>
    </>
  );
}

export default Home;
