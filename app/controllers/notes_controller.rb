class NotesController < ApplicationController
  before_action :set_note, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  
  # GET /notes
  def index
    @notes = Note.all.order("id DESC")

    render json: @notes
  end

  # GET /notes/1
  def show
    render json: @note, :include => :user, status: :ok
  end

  # POST /notes
  def create
    # binding.pry
    note = Note.new(note_params)
    # note.user = @current_user

    if note.save
      note.save!
      render json: note, status: :created, location: note
    else
      render json: note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1
  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1
  def destroy
    @note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    def set_user_note
      @note = @current_user.notes.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def note_params
      params.require(:note).permit(:note)
    end
end
